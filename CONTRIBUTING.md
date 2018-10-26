# Contributing

Thanks for your interest in helping with development on Iridium.

## Pull requests

**Create an issue before creating a pull request.**

Please consider creating an issue so we can discuss and review whether the change makes sense. That way you avoid wasting time creating code that won't be merged and we can get several inputs on new features.

## Coding standards

The code formatting standards for this library are defined in the `.eslintrc` file. You can checker whether your code adhere to the guidelines by running:

```sh
npm run style
```

ESLint can automatically fix your style problems:

```sh
npm run style:fix
```

## Running tests

You can run the test with the following command:

```sh
npm test
```

Please make sure that tests are passing before submitting a pull request. If you are adding a new feature please make sure it's covered by tests.

## Documentation

If you are making notable changes to any components please consider updating the [docs](https://github.com/iridiumui/docs) as well.

## Compiling the project

If you are working on the project you can spin up a watcher using the following command:

```sh
npm run watch
```

This will automaticall run rollup with a watch flag.

If you want to build your code instead run the following command:
```sh
npm run build
```
