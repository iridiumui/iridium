[![Build Status](https://travis-ci.org/iridiumui/iridium.svg?branch=master)](https://travis-ci.org/iridiumui/iridium)

# What is Iridium?
Iridium is a UI framework with no UI. It's built for Vue. It focuses on providing reuseable renderless UI components and convenient helper components.

### What is a renderless component?
It's a Vue component that doesn't have a template. Instead it has a render function and is responsible for managine the state and functionality of the component. The consumer of the component is responsible for actually creating the UI. The state, events and methods can be accessed through a scoped slot. 

If you wanna know more I recommend checking out this [article](https://adamwathan.me/renderless-components-in-vuejs/) by Adam Wathan. 

## Installation
1. Run npm install

If you want to install the entire library you can install Iridium as a Vue plugin. You should do that in your main javascript file. This will automatically register all components globally.

```sh
import Iridium from 'iridium'

Vue.use(Iridium)
```

If you don't want to register all components or you want to change the registered name of a component you can import them manually.

```sh
import { Modal } from 'iridium'

Vue.component('modal', Modal)
```

### Options
When installing Iridium as a plugin you can optionally pass it an object of options.

```sh
import Iridium from 'iridium'

Vue.use(Iridium, {
    prefix: 'myprefix' // Defaults to 'iridium-'. You can pass in an empty string to remove the prefix.
})
```
