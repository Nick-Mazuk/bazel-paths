load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@aspect_rules_js//npm:defs.bzl", "npm_package")

# calling this macro creates the following error:
#
# ```
# Error in fail: The npm_link_all_packages() macro loaded from @npm//:defs.bzl
# and called in bazel package 'hello' may only be called in the bazel package(s)
# corresponding to the root package '' and packages ['']
# ```
#
# load("@npm//:defs.bzl", "npm_link_all_packages")
# npm_link_all_packages(name = "node_modules")

ts_project(
    name = "lib",
    srcs = [
        "index.ts",
    ],
    tsconfig = "//:tsconfig",
    visibility = ["//visibility:public"],
)

npm_package(
    name = "hello",
    srcs = [":lib"],
    package = "@my_workspace/hello",
    visibility = ["//visibility:public"],
)

