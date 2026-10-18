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
    // quietDeps: keine Deprecation-Warnungen aus node_modules (Bootstrap)
    // silenceDeprecations: @import wird erst mit der Umstellung auf @use entfernt
    .enableSassLoader((options) => {
        options.sassOptions = {
            ...options.sassOptions,
            quietDeps: true,
            silenceDeprecations: ['import'],
        };
    })
    .enablePostCssLoader()

    // svgo im CSS-Minifier abschalten: Er kann die URL-kodierten SVG-Icons
    // von Bootstrap (Data-URIs) nicht lesen und wirft sonst Warnungen.
    .configureCssMinimizerPlugin((options) => {
        options.minimizerOptions = {
            preset: ['default', {svgo: false}],
        };
    })
    .addStyleEntry('styles/frontend', './assets/styles/frontend/scss/main.scss')
;

module.exports = Encore.getWebpackConfig();
