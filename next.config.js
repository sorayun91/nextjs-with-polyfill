const path = require("path");
const fetch = require("isomorphic-unfetch");
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withPlugins([withCSS, withSass, withImages], {
    webpack: function(cfg) {
        const originalEntry = cfg.entry;
        cfg.entry = async () => {
            const entries = await originalEntry();

            if (
                entries["main.js"] &&
                !entries["main.js"].includes("./client/polyfills.js")
            ) {
                entries["main.js"].unshift("./client/polyfills.js");
            }

            return entries;
        };

        return cfg;
    },
    module: {
        rules: [
            {
                test: /\.(scss | css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    // ssr router
    exportTrailingSlash: true,
    exportPathMap: async function() {
        const paths = {
            "/": { page: "/" },
            "/about": { page: "/about" },
            "/shop/goods/goods_search": {
                page: "/shop/goods/goods_search",
            },
        };
        const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
        const data = await res.json();
        const shows = data.map(entry => entry.show);
        shows.forEach(show => {
            paths[`/show/${show.id}`] = {
                page: "/show/[id]",
                query: { id: show.id },
            };
        });
        return paths;
    },
});
