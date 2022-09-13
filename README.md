# Bazel TypeScript paths

This repository is a minimal reproduction for TypeScript paths with Bazel, `rules_ts`, and `rules_js`.

Assuming you have Bazel installed, you can run the following commands:

```sh
bazel build //:ts # build the TypeScript code
bazel run //:ts # run the TypeScript code
```

This branch uses Node's `--experimental-loader` API to automatically convert `@my_workspace/` imports to relative imports, preventing the need for manually adding all first-party packages to the root BUILD file.
