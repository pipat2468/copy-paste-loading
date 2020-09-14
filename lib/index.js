import ins from '@copy-paste/loading/components/loading.vue'
import '@copy-paste/loading/css/index.css'

const install = (Vue, options = {}) => {
    const animation = options.animation || ''
    const loading = options.loading || {
        render(c) {
            return c('div', 'loading...')
        }
    }
    const instance = new Vue({
        render: function (h) {
            return h(
                ins,
                {
                    props: {
                        animation
                    }
                },
                [h(loading)]
            )
        }
    })

    const component = instance.$mount()
    document.body.appendChild(component.$el)

    Vue.prototype.$loading = component.$children[0].show
}

export default { install }
