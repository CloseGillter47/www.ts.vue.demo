const path = require('path');
function resolveResouce (name) {
    return path.resolve(__dirname, './src/assets/scss/' + name);
}
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(sass|scss)$/,
                    use: {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [resolveResouce('mixins.scss')]
                        }
                    }
                }
            ]
        }
    }
}