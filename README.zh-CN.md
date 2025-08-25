# tinup

[English](./README.md) | [简体中文](./README.zh-CN.md)

## 环境变量 mode 参数说明

Tinup Core 支持通过 `mode` 参数来区分不同的环境配置。

### 用法

在启动服务时，会根据当前的 mode 加载对应的环境文件。例如：

- `mode=dev` 时加载 `.env.dev`
- `mode=prod` 时加载 `.env.prod`
- 未设置 mode 时加载 `.env`

你可以通过设置环境变量或在代码中指定 mode 来实现多环境切换。

### 示例

```bash
pnpm run dev --mode=xxx
```
