## 🚀Time for Test ( Namaste-React ) 🚀

### Types of Developer Testing

- Unit Testing
  - test in isolation for only one component or unit.
  - Eg. only Header component
- Integration Testing
  - test multiple integrated components into one component.
  - Eg. Resto List
- End to End or E2E testing
  - test all the flows from landing to ending

## Setup for unit or integration testing

- Install react testing library
  - `npm install --save-dev @testing-library/react @testing-library/dom`
- Install Jest
  - `npm install -D jest`
- Install Jest dependencies (Babel)
  - `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Create babel.config.js file in root of project and configure with below content

  ```
  module.exports = {
    presets: [["@babel/preset-env", { targets: { node: "current" } }]]}
  ```

- Create .parcelrc file to disable default babel transpilation and configure with below content
  ```
  {
    "extends": "@parcel/config-default",
    "transformers": {
    "\*.{js,mjs,jsx,cjs,ts,tsx}": [
    "@parcel/transformer-js",
    "@parcel/transformer-react-refresh-wrap"
      ]
    }
  }
  ```
- Configure jest
  - `npx jest --init`
- Install jsDom library
  - `npm install --save-dev jest-environment-jsdom`
- Create folder `__tests__` in src\components for holding test case files.
- Install babel preset react to make test run for .jsx
  - ` npm i -D  @babel/preset-react`
  - Update babel.config.js
    ```
    module.exports = {
    presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    ],
    }
    ```
- Install testing library jestDom
  - `npm i -D @testing-library/jest-dom`

## References:

- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [JestDom](https://www.npmjs.com/package/@testing-library/jest-dom)
