module.exports = function (config) {
    config.module.rules.push(
        Object.assign(
            {
                test: /((client|server)\.js)|(\.tsx?)$/
            },
            {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        )
    )
}