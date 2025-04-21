const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/')
    .setPublicPath('/bundles/markocupiccontaothemesacpilatus')
    .setManifestKeyPrefix('')

    //.addEntry('select2', './assets/entries/select2.js')
    //.addEntry('frontend', './assets/filepond.js')
    .copyFiles({
        from: './assets/fonts',
        to: 'fonts/[path][name].[ext]'
    })
    .copyFiles({
        from: './assets/js',
        to: 'js/[path][name].[hash:8].[ext]'
    })
    .copyFiles({
        from: './node_modules/jquery/dist',
        to: 'jquery/[path][name].[hash:8].[ext]',
        pattern: /(jquery\.js)$/,
    })
    .copyFiles({
        from: './node_modules/jquery-touchswipe',
        to: 'jquery-touchswipe/[path][name].[hash:8].[ext]',
        pattern: /(jquery\.touchSwipe\.js)$/,
    })
    .copyFiles({
        from: './node_modules/flatpickr/dist',
        to: 'flatpickr/dist/[path][name].[hash:8].[ext]',
        pattern: /(de\.js|flatpickr\.js|flatpickr\.css)$/,
    })
    .copyFiles({
        from: './node_modules/select2/dist',
        to: 'select2/dist/[path][name].[hash:8].[ext]',
        pattern: /(de\.js|select2\.js|select2\.css)$/,
    })
    .copyFiles({
        from: './node_modules/masonry-layout/dist',
        to: 'masonry/[path][name].[hash:8].[ext]',
        pattern: /(masonry\.pkgd\.js)$/,
    })
    .copyFiles({
        from: './node_modules/aos/dist',
        to: 'aos/[path][name].[hash:8].[ext]',
        pattern: /(aos\.css|aos\.js)$/,
    })
    .copyFiles({
        from: './node_modules/sortablejs',
        to: 'sortablejs/[path][name].[hash:8].[ext]',
        pattern: /(Sortable\.js)$/,
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
;

module.exports = Encore.getWebpackConfig();
