import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

await import("./build.mjs");
const html = await readFile(new URL("./index.html", import.meta.url), "utf8");

test("landing uses white Primer, original content, and no tracking scripts", () => {
    assert.match(html, /data-color-mode="light"/);
    assert.match(html, /href="primer.css"/);
    assert.match(html, /AI-created questions. Human validation needed/);
    assert.match(html, /future ideas, not shipped features/);
    assert.match(html, /GitHub certifications/);
    assert.doesNotMatch(html, /__ICON_|__TOKEN__|127\.0\.0\.1|<script|--cp-/);
});
test("roadmap points to the umbrella repo while content reviews stay in GitHub", () => {
    assert.match(html, /href="https:\/\/github.com\/sviera91\/certification-coach\/blob\/main\/ROADMAP.md"/);
    assert.match(html, /href="https:\/\/github.com\/sviera91\/github-certification-coach\/tree\/main\/reviews"/);
    assert.match(html, /href="\.\.\/github-certification-coach\/"/);
    assert.doesNotMatch(html, /github-certification-coach\/blob\/main\/ROADMAP/);
});
test("local links and section anchors resolve", async () => {
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
        if (href.startsWith("#")) {
            assert.ok(html.includes(`id="${href.slice(1)}"`), href);
        } else if (!href.startsWith("http") && !href.startsWith("../") && href !== "./") {
            await readFile(new URL(href, import.meta.url));
        }
    }
});
test("deployment artifact contains only explicit public assets", async () => {
    assert.deepEqual((await readdir(new URL("./_site/", import.meta.url))).sort(),
        [".nojekyll", "index.html", "landing.css", "primer.css", "LICENSE", "LICENSES.txt", "THIRD-PARTY-NOTICES.md"].sort());
});
