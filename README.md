# Other

> <a href="https://github.com/pipat2468/copy-paste-validate">validate</a> with Vue.js

> <a href="https://github.com/pipat2468/copy-paste-grid">grid</a> with Vue.js

## Development

npm install @copy-paste/loading

## Config

```html
<!-- components/loading.vue -->
<template>
    <div>loading custom...</div>
</template>
```

```js
import loader from '@/loading/index.js'
import loading from '@/components/loading.vue'

Vue.use(loader, {
    animation: 'custom', //transition vue, default no animation
    loading
})
```

## Usage

```js
//show
this.$loading(true)

//hide
this.$loading(false)
```

## 📑 License

[MIT License](./LICENSE)
