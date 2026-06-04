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

### ESLint

```js
import { reactViteConfig, typescriptConfig } from '@dead-harbour/shipshape/eslint';

export default [...typescriptConfig(), ...reactViteConfig()];
```

### Stylelint

```js
import { stylelint } from '@dead-harbour/shipshape/stylelint';

export default { ...stylelint() };
```