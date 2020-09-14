export default {
    props: {
        animation: String
    },
    data() {
        return {
            num: 0
        }
    },
    render(h) {
        return h(
            'transition',
            {
                props: {
                    name: this.animation
                }
            },
            [
                this.num
                    ? h(
                          'div',
                          {
                              class: 'loading-mask'
                          },
                          this.$slots.default
                      )
                    : null
            ]
        )
    },
    methods: {
        show(bool) {
            if (bool) {
                this.num++
            } else {
                this.num--
            }
        }
    }
}
