load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@aspect_rules_swc//swc:defs.bzl", "swc_transpiler")
load("@bazel_skylib//lib:partial.bzl", "partial")

ts_project(
    name = "hello",
    srcs = [
        "index.ts",
    ],
    transpiler = partial.make(
        swc_transpiler,
        swcrc = ".swcrc",
    ),
    declaration = True,
    tsconfig = "//:tsconfig",
    visibility = ["//visibility:public"],
)
