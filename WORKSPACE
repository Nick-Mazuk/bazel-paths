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

http_archive(
    name = "aspect_rules_swc",
    sha256 = "55f84b06e8ea5ddce07077439c2197911acdf42c8416e464a7e77b9cf42f7184",
    strip_prefix = "rules_swc-0.17.0",
    url = "https://github.com/aspect-build/rules_swc/archive/refs/tags/v0.17.0.tar.gz",
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

###################
# rules_swc setup #
###################

# Fetches the rules_swc dependencies.
# If you want to have a different version of some dependency,
# you should fetch it *before* calling this.
# Alternatively, you can skip calling this function, so long as you've
# already fetched all the dependencies.
load("@aspect_rules_swc//swc:dependencies.bzl", "rules_swc_dependencies")

rules_swc_dependencies()

# Fetches a pre-built Rust-node binding from
# https://github.com/swc-project/swc/releases.
# If you'd rather compile it from source, you can use rules_rust, fetch the project,
# then register the toolchain yourself. (Note, this is not yet documented)
load("@aspect_rules_swc//swc:repositories.bzl", "swc_register_toolchains")

swc_register_toolchains(
    name = "swc",
    swc_version = "v1.2.141",
)
