import { defineConfig } from 'i18next-cli';

export default defineConfig({
  locales: ['fr', 'en'],
  extract: {
    input: ['src/**/*.{js,jsx,ts,tsx}'],
    output: 'src/shared/i18n/{{language}}/{{namespace}}.ts',
    defaultNS: 'messages',
    outputFormat: 'ts',
  },
});
