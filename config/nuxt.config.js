module.exports = {
    css: [
        'assets/main.css'
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    plugins:[
        {src:'@/plugins/vuesocket', ssr:false}
    ],
    telemetry: true
    /*modules: [
        '@nuxtjs/axios'
    ]*/
}
