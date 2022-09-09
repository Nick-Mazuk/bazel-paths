# Bazel TypeScript paths

This repository is a minimal reproduction for TypeScript paths with Bazel, `rules_ts`, and `rules_js`.

Assuming you have Bazel installed, you can run the following commands:

```sh
bazel build //:ts # build the TypeScript code
bazel run //:ts # run the TypeScript code
```

The build should complete successfully. However, the run will fail with the following error:

```sh
Error: Cannot find module '@my_workspace/hello'
```
