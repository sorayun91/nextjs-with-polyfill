import Document, { Head, Main, NextScript } from "next/document";

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
                    />
                    <meta name="description" content="Dev.log" />
                    <meta
                        name="keywords"
                        content="blog,react,antd,webpack,css,javascript"
                    />
                    <meta
                        httpEquiv="Content-Security-Policy"
                        content="upgrade-insecure-requests"
                    />
                    <link rel="shortcut icon" href="/static/img/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/earlyaccess/notosanskr.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
