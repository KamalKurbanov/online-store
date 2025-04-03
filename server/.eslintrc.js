module.exports = {
    env: {
      node: true, // Включает глобальные переменные Node.js
      es2021: true, // Включает возможности ES2021
    },
    extends: [
      'eslint:recommended', // Использует рекомендованные правила ESLint
      'plugin:node/recommended', // Использует рекомендованные правила для Node.js
      'prettier', // Отключает правила, которые конфликтуют с Prettier (если используете)
      'plugin:prettier/recommended', // Добавляет поддержку Prettier

    ],
    parserOptions: {
      ecmaVersion: 12, // Указывает версию ECMAScript
      sourceType: 'module', // Позволяет использовать import/export
    },
    rules: {
      // Здесь можно добавить или переопределить правила
      'no-console': 'off', // Отключает правило, запрещающее использование console.log
      'node/no-unpublished-require': 'off', // Отключает правило, запрещающее require для неопубликованных модулей
      'node/no-missing-require': 'off', // Отключает правило, проверяющее наличие require
      'node/no-unsupported-features/es-syntax': 'off', // Отключает правило, запрещающее использование ES модулей
    }
  };