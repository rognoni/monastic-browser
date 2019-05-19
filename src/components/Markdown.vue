<template>
    <div v-html="html"></div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import URI from 'urijs'

const renderer = new marked.Renderer()

renderer.link = function (href, title, text) {
    if (URI(href).suffix() == 'md') {
        href = '#/url/' + URI(href, this.options.baseUrl).href()
    }
    return `<a href="${href}">${text}</a>`
}

marked.setOptions({
  renderer: renderer,
  highlight(code) {
    return hljs.highlightAuto(code).value
  },
})

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
            const uri = URI(url)
            marked.setOptions({ baseUrl: uri.filename('').href() })
            axios.get(url)
                .then(response => this.markdown = response.data)
        }
    }
}
</script>

<style>
h1, h2, h3, h4, ol, ul, p, pre {
    margin: 10px 0 10px 0;
}
pre > code {
    font-weight: normal;
    font-size: 100%;
    color: black;
    padding: 10px;
}
pre > code::before {
    content: "";
}
pre > code::after {
    content: "";
}
</style>
