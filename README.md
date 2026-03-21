# CoNcauses

This is a package containing a handful of helper functions and configs I use in various projects of mine.

## Yarn Config

```yml
# .yarnrc.yml

nodeLinker: node-modules

npmRegistries:
  "https://npm.pkg.github.com":
    npmAuthToken: "${GITHUB_TOKEN}"

npmScopes:
  syren-dev-tech:
    npmRegistryServer: "https://npm.pkg.github.com"
```

## Linters

### ESLint

```js
import { reactViteConfig, typescriptConfig } from '@syren-dev-tech/concauses/eslint';

export default [...typescriptConfig(), ...reactViteConfig()];
```

### Stylelint

```js
import { stylelint } from '@syren-dev-tech/concauses/stylelint';

export default { ...stylelint() };
```

## Numbers

- `random(min, max)`
    - Returns a random number between `min` and `max`.

## Sorting

- `sortByValue<T>(a, b)`
    - Generic sorting function of `a` to `b` of type `T` (`Sortable`)

- `sortArray<T>(arr, sortFn)`
    - Alias for `arr.sort(sortFn)` of type `T[]`

- `sortObjects<T>(arr, key)`
    - Alias for `arr.sort` for `a[key]` to `b[key]` of type `T[]` (`object`)

## Strings

- `capitalize(str)`
    - Capitalizes the first character of a string

- `prettyString(str, options)`
    - Splits a string on hypens, underscores, and whitespace (`\s`) and joins it back to a single string
    - This will convert a string `something_like_this` to `something like this`
    - Options (optional):
        - `capitalize`
            - `"all"` - capitalize the first of each word
            - `"first"` - capitalize the first of the first word
            - `undefined` / default - no capitalization

- `uniqueId()`
    - UUID string generator

- `uniqueKey(prefix)`
    - UUID string generator with an optional prefix