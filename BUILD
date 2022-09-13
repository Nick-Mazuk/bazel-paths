load("@aspect_rules_ts//ts:defs.bzl", "ts_project", "ts_config")
load("@aspect_rules_js//js:defs.bzl", "js_binary")
load("@aspect_rules_swc//swc:defs.bzl", "swc_transpiler")
load("@bazel_skylib//lib:partial.bzl", "partial")
load("@npm//:defs.bzl", "npm_link_all_packages")

exports_files([".swcrc"])

npm_link_all_packages(name = "node_modules")

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = ["//visibility:public"],
)

ts_project(
    name = "bin",
    srcs = [
        "main.ts",
    ],
    deps = [
        "//hello",
    ],
    transpiler = partial.make(
        swc_transpiler,
        swcrc = ".swcrc",
    ),
    declaration = True,
    tsconfig = ":tsconfig",
)

js_binary(
    name = "ts",
    data = [":bin", ":module-loader.mjs"],
    node_options = ["--experimental-loader=$(execpath //:module-loader.mjs)"],
    entry_point = "main.js",
)
