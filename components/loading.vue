<template>
    <transition :name="animation">
        <div class="loading-mask" v-if="num">
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        animation: String
    },
    data() {
        return {
            num: 0
        }
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
</script>
