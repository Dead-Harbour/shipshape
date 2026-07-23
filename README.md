# ShipShape

This is a package containing a handful of helper functions and configs I use in various projects of mine.

## Yarn Config

```yml
# .yarnrc.yml

approvedGitRepositories:
  - "**"

enableScripts: true

nodeLinker: node-modules

npmMinimalAgeGate: 0

npmRegistries:
  "https://npm.pkg.github.com":
    npmAuthToken: "${GITHUB_TOKEN}"

npmScopes:
  dead-harbour:
    npmRegistryServer: "https://npm.pkg.github.com"
```

## Linters

### Oxlint

```js
import { oxlintConfig } from '@dead-harbour/shipshape/oxlint';

export default oxlintConfig();
```

### Stylelint

```js
import { stylelint } from '@dead-harbour/shipshape/stylelint';

export default stylelint();
```