import { defineConfig } from 'i18next-cli';

export default defineConfig({
  locales: ['fr', 'en'],
  extract: {
    input: ['apps/*/src/**/*.{js,jsx,ts,tsx}'],
    output: 'apps/web/src/shared/i18n/{{language}}/{{namespace}}.ts',
    defaultNS: 'messages',
    outputFormat: 'ts',
  },
});
