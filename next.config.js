const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        env: {
            apiKey: 'I6HxQt5HGEvjCZLysbmk',
            newsLetterKey: '2TqqbIBcergQYn16LETH',
            leadsourceID: 'df6a5527-9869-448e-a14e-152f26c4c7c4',
            newsLetterLeadSource: 'ba2df751-e46c-41a8-b9a6-400b6d60c07b'
        },
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    }],
    [withCSS], [withFonts], [withSass]
]);

