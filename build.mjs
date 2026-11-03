import { mkdir, copyFile, writeFile } from "node:fs/promises";

await mkdir(new URL("./_site/", import.meta.url), { recursive: true });
for (const name of ["index.html", "landing.css", "primer.css", "LICENSE", "LICENSES.txt", "THIRD-PARTY-NOTICES.md"]) {
    await copyFile(new URL(name, import.meta.url), new URL(`./_site/${name}`, import.meta.url));
}
await writeFile(new URL("./_site/.nojekyll", import.meta.url), "");
console.log("Built the explicit public landing-page allowlist in _site/.");
