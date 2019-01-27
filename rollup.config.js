import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import VuePlugin from 'rollup-plugin-vue'
import { eslint } from "rollup-plugin-eslint";
import alias from 'rollup-plugin-alias';

const env = process.env.NODE_ENV;
const pkg = require("./package.json");
const path = require('path');

export default {
    input: "src/index.js",
    output: {
        file: {
            es: pkg.module,
            cjs: pkg.main
        }[env],
        format: env
    },
    external: ["vue"],
    plugins: [
        resolve(),
        alias({
            "@": path.join(__dirname, "./src"),
            "~": path.join(__dirname, "./"),
            resolve: ['.vue', '.js', '/index.js']
        }),
        eslint({
            throwOnError: true
        }),
        VuePlugin(),
        babel({
            exclude: "node_modules/**",
            plugins: ["@babel/external-helpers"],
            externalHelpers: true
        }),
        commonjs()
    ]
};
