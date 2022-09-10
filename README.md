# Bazel TypeScript paths

This repository is a minimal reproduction for TypeScript paths with Bazel, `rules_ts`, and `rules_js`.

Assuming you have Bazel installed, you can run the following commands:

```sh
bazel build //:ts # build the TypeScript code
bazel run //:ts # run the TypeScript code
```

The build should complete successfully. However, the run will fail with the following error:

```sh
Error: BUILD:13:11: in deps attribute of ts_project_rule rule //:bin:
rule '//:node_modules/@my_workspace/hello' does not exist. Since
this rule was created by the macro 'ts_project', the error might
have been caused by the macro implementation

Error: BUILD:13:11: Analysis of target '//:bin' failed
ERROR: Analysis of target '//:ts' failed; build aborted:
```
