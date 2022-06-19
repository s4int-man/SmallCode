const path = require("path");

const siteConfig = {
    target: 'web',
    mode: 'development',
    entry: {
        main: './dist/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: '[name].js'
    }
}

const workersConfig = {
    target: 'webworker',
    mode: 'production',
    entry: {
        first_worker: './dist/workers/first_worker.js',
        second_worker: './dist/workers/second_worker.js'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'workers'),
        filename: '[name].js'
    }
}

module.exports = [ siteConfig, workersConfig ]