# Electron Wrapper

Use this project to create an electron app using a front and/or a backend projects already built.

# Module Builds

Modules should be built with relatives paths.

## Front example

This will fail:

```html
    <script type="module" src="/assets/index.js"></script>
    <link rel="stylesheet" href="/assets/index.css">
```

instead build it to use paths like this:

```html
    <script type="module" src="./assets/index.js"></script>
    <link rel="stylesheet" href="./assets/index.css">
```

# Import modules

There is a yarn command to add font and back modules:

```shell
yarn add-front $path-to-built-project

yarn add-backend $path-to-built-project
```

This will save your modules in the back and front folders, electron will use them to build the desktop app.

You can install your modules as a dependency like:

```shell
yarn install front-project
```
And use the command to load the module:

```shell
yarn add-backend node_modules/$path-to-built-project
```
