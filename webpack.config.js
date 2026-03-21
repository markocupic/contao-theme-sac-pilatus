const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/')
    .setPublicPath('/bundles/markocupiccontaothemesacpilatus')
    .setManifestKeyPrefix('')

    // Add stimulus controllers
    .addEntry('stimulus_frontend', './assets/stimulus_frontend.js')

    .copyFiles({
        from: './node_modules/bootstrap/dist/js',
        to: 'bootstrap/dist/js/[path][name].[ext]',
        pattern: /(bootstrap\.bundle\.min\.js)$/,
    })
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[hash:8].[ext]'
    })
    .copyFiles({
        from: './assets/fonts',
        to: 'fonts/[path][name].[ext]'
    })
    .copyFiles({
        from: './assets/js',
        to: 'js/[path][name].[hash:8].[ext]'
    })
    .copyFiles({
        from: './node_modules/swiper',
        to: 'swiper/[path][name].[hash:8].[ext]',
        pattern: /(swiper-bundle\.js|swiper-bundle\.css)$/,
    })
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps()
    .enableVersioning()

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .enablePostCssLoader()
    // Preprocessing scss in css
    .enableSassLoader()
    .enablePostCssLoader()
    .addStyleEntry('styles/frontend', './assets/styles/frontend/scss/main.scss')
;

module.exports = Encore.getWebpackConfig();
