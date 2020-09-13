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
        const mask = this.num
            ? h(
                  'div',
                  {
                      class: 'loading-mask'
                  },
                  this.$scopedSlots.default()
              )
            : null
        return h(
            'transition',
            {
                props: {
                    name: this.animation
                }
            },
            [mask]
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
