workspace(
    name = "my_workspace",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "aspect_rules_ts",
    sha256 = "b491ff46f8d9167986033552bdd7b39106fac5a1cbc4d5ea44582d3d71557519",
    strip_prefix = "rules_ts-1.0.0-rc2",
    url = "https://github.com/aspect-build/rules_ts/archive/refs/tags/v1.0.0-rc2.tar.gz",
)

##################
# rules_ts setup #
##################
load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies", "LATEST_VERSION")

rules_ts_dependencies(ts_version = LATEST_VERSION)

# Fetch and register node, if you haven't already
load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "node",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    bins = {
        # derived from "bin" attribute in node_modules/typescript/package.json
        "typescript": {
            "tsc": "./bin/tsc",
            "tsserver": "./bin/tsserver",
        },
    },
    pnpm_lock = "//:pnpm-lock.yaml",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()
