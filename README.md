# Bazel TypeScript paths

This repository is a minimal reproduction for TypeScript paths with Bazel, `rules_ts`, and `rules_js`.

Assuming you have Bazel installed, you can run the following commands:

```sh
bazel build //:ts # build the TypeScript code
bazel run //:ts # run the TypeScript code
```

Note: This method requires that you link every single target in the root BUILD file. Otherwise, the applicable Bazel targets will not be created.
