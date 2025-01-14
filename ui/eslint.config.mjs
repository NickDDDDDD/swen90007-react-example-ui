import globals from "globals";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  pluginReact.configs.flat.recommended,
  {rules: {
    "react/react-in-jsx-scope": "off"
  }},
];
