<template>
    <div v-html="html"></div>
</template>

<script>
export default {
    data () {
        return {
            markdown: ''
        }
    },
    computed: {
        html: function () {
            return 'markdown --> html'
        }
    }
}
</script>
