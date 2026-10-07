# tolokacode docs

Documentation site for tolokacode plugins. Docusaurus, Ukrainian (default) and English.

```sh
npm install
npm start               # Ukrainian, http://localhost:3000/docs/
npm start -- --locale en
npm run build           # both languages
```

## Where things are

| What | Ukrainian | English |
|---|---|---|
| monobank, next version | `monobank/` | `i18n/en/docusaurus-plugin-content-docs-monobank/current/` |
| monobank, released versions | `monobank_versioned_docs/version-X/` | `i18n/en/docusaurus-plugin-content-docs-monobank/version-X/` |
| Home page | `src/pages/index.js` | `i18n/en/code.json` |

Each plugin has its own docs section and its own versions.

## Releasing docs for a new plugin version

When the plugin is released (for example 0.2.0):

```sh
npx docusaurus docs:version:monobank 0.2.0
```

Then set `lastVersion: '0.2.0'` for the monobank docs in `docusaurus.config.js`.
