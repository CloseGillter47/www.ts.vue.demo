const path = require('path');
function resolveResouce (name) {
    return path.resolve(__dirname, './src/assets/scss/' + name);
}

function generateSassResourceLoader () {
    const loaders = [
        'sass-loader',
        {
            loader: 'sass-resources-loader',
            options: {
                resources: [resolveResouce('mixins.scss')]
            }
        }
    ]
    return ['vue-style-loader'].concat(loaders);
}

exports.styleLoaders = function (options) {
    const output = [];
    output.push({
        test: /\\.sass$/,
        use:generateSassResourceLoader()
    });
    output.push({
        test: /\\.scss$/,
        use:generateSassResourceLoader()
    });
    return output;
}
