import ins from '@copy-paste/loading/lib/loading.js'
import '@copy-paste/loading/css/index.css'

export default (Vue, options = {}) => {
    const animation = options.animation || ''
    const loading = options.loading || {
        render(c) {
            return c('div', 'loading...')
        }
    }
    const instance = new Vue({
        render: function (h) {
            return h(ins, {
                props: {
                    animation
                },
                scopedSlots: {
                    default() {
                        return h(loading)
                    }
                }
            })
        }
    })

    const component = instance.$mount()
    document.body.appendChild(component.$el)

    Vue.prototype.$loading = component.$children[0].show
}
