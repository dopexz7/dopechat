const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = {
    plugins: [new Dotenv()],
    entry: {
        backgroundPage: path.join(__dirname, "src/backgroundPage.ts"),
        contentScript: path.join(__dirname, "src/contentScript.ts"),
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
            // Treat src/css/app/options.css as a global stylesheet
            {
                test: [/\app.css$/, /\options.css$/, /\emoteMenu.css$/],
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
        alias: {
            react: "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat", // Must be below test-utils
            "react/jsx-runtime": "preact/jsx-runtime",
        },
    },
};
