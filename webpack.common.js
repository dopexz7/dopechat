const path = require("path");

module.exports = {
    entry: {
        backgroundPage: path.join(__dirname, "src/backgroundPage.ts"),
        contentScript: path.join(__dirname, "src/contentScript.ts"),
        popup: path.join(__dirname, "src/popup/index.tsx"),
        options: path.join(__dirname, "src/options/index.tsx"),
        emoteMenu: path.join(__dirname, "src/emoteMenu/index.tsx"),
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: "ts-loader",
            },
            // Treat src/css/app/popup/options.css as a global stylesheet
            {
                test: [
                    /\app.css$/,
                    /\popup.css$/,
                    /\options.css$/,
                    /\emoteMenu.css$/,
                ],
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            // Load .module.css files as CSS modules
            {
                test: /\.module.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "postcss-loader",
                ],
            },
        ],
    },
    // Setup @src path resolution for TypeScript files
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
        },
    },
};
