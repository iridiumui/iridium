import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import VuePlugin from 'rollup-plugin-vue'
import { eslint } from "rollup-plugin-eslint";

const env = process.env.NODE_ENV;
const pkg = require("./package.json");

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
        VuePlugin(),
        eslint({
            throwOnError: true
        }),
        babel({
            exclude: "node_modules/**",
            plugins: ["@babel/external-helpers"],
            externalHelpers: true
        }),
        commonjs()
    ]
};
