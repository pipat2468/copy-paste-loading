# Other

> <a href="https://github.com/pipat2468/copy-paste-validate">validate</a> Vue.js

> <a href="https://github.com/pipat2468/copy-paste-grid">grid</a> Vue.js

## Development

npm install @copy-paste/loading

## Config

```js
import loader from '@/loading/index.js'

Vue.use(loader)
```

## Usage

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

## 📑 License

[MIT License](./LICENSE)
