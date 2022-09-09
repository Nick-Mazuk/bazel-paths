load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@aspect_rules_js//js:defs.bzl", "js_binary")

ts_project(
    name = "ts_library",
    srcs = [
        "hello.ts",
        "main.ts",
    ],
)

js_binary(
    name = "ts",
    data = [":ts_library"],
    entry_point = "main.js",
)
