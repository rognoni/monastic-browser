<template>
    <div v-html="html"></div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
    data () {
        return {
            markdown: ''
        }
    },
    computed: {
        html: function () {
            return marked(this.markdown)
        }
    },
    mounted() {
        this.loadMarkdown(this.$route.params.pathMatch)
    },
    beforeRouteUpdate (to, from, next) {
        this.loadMarkdown(to.params.pathMatch)
        next()
    },
    methods: {
        loadMarkdown(url) {
            axios.get(url)
                .then(response => this.markdown = response.data)
        }
    }
}
</script>
