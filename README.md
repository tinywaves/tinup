# tinup

[English](./README.md) | [简体中文](./README.zh-CN.md)

## Environment Variable: mode Parameter Description

Tinup Core supports using the `mode` parameter to distinguish between different environment configurations.

### Usage

When starting the service, the corresponding environment file will be loaded according to the current mode. For example:

- When `mode=dev`, `.env.dev` will be loaded
- When `mode=prod`, `.env.prod` will be loaded
- If mode is not set, `.env` will be loaded

You can switch between environments by setting the environment variable or specifying mode in the code.

### Example

```bash
pnpm run dev --mode=xxx
```
