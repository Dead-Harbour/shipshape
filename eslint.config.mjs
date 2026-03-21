import { reactViteConfig, typescriptConfig } from './dist/lib/eslint.js';

export default [...typescriptConfig(), ...reactViteConfig()];