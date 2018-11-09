const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "bundle.js",
        path : path.resolve (__dirname , 'dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,  //webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, //以 .png... 结尾的全部文件，都将被提供给 file-loader。
                use : [
                    'file-loader'
                ] 
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,//以 .woff... 结尾的全部文件，都将被提供给 file-loader。
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};