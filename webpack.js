#!/usr/bin/env node
const webpack = require('webpack');
const webpackConfig = require('./build/webpack.base.config');
const cp = require('child_process');

const compiler = webpack(webpackConfig)

let buildAndWatch = function buildAndWatch(compiler, callback) {
    let compilerCallbackTime = 0;
    return new Promise((resolve) => {
        compiler.watch({ aggregateTimeout: 200 }, () => {
            console.log('--重新构建成功' + compilerCallbackTime)
            compilerCallbackTime++;
            if (compilerCallbackTime > 1) {
                if (callback) {
                    callback();
                }
            }
            resolve();
        });
    });
};

let server = cp.spawn('node', ['./server-client.js']);
server.stdout.on('data', x => process.stdout.write(x));
server.stderr.on('data', x => process.stderr.write(x));

buildAndWatch(compiler)