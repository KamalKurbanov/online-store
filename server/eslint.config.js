const  js = require('@eslint/js'); // Базовые правила ESLint
const  globals = require('globals')
const  prettier = require('eslint-config-prettier'); 

module.exports =  [
  // Базовые правила ESLint
  js.configs.recommended,

  // Настройки для JavaScript
  {
    files: ['**/*.js'], // Применять только к JS-файлам
    languageOptions: {
      ecmaVersion: 2022, // Версия ECMAScript
      sourceType: 'script', // Использовать CommonJS
      globals: {
        ...globals.node, // Глобальные переменные Node.js
      },
    },
    rules: {
      'no-console': 'warn', // Предупреждение при использовании console.log
      'no-unused-vars': 'error', // Ошибка при неиспользуемых переменных
      'no-undef': 'error', // Ошибка при использовании необъявленных переменных
      'prefer-const': 'error', // Требует использовать const вместо let, если переменная не перезаписывается
    },
  },

  // Интеграция с Prettier
  prettier,
];