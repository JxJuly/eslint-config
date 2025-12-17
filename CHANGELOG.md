# Changelog | 变更日志

## [2.4.1](///compare/2.4.0...2.4.1) (2025-12-17)

### 🚀 Tool | 工具升级

* 优化 npm 认证配置和发布流程 b715c80
* 升级 Node.js 到 v24，简化 npm 认证配置 ebe2b38
* 升级 npm 到最新版本以支持 OIDC，跳过 release-it 检查 79dc0c3
* 启用 OIDC 认证和 pnpm 缓存 72d51ca
* 添加版本类型选择功能，支持手动指定或自动推断版本号 fb34cbb
* 移除 setup-node 的 pnpm 缓存配置 42d8f33
* 移除不必要的 npm ci 步骤 0eafb66
* 统一 secrets 名称为大写 NPM_TOKEN e561b56

### 🔧 Chore | 日常维护

* **config:** add ESLint ignores and clean TypeScript config 2bb435b
* **deps:** bump dependencies and add pnpm workspace 46e49d5
* **deps:** update dependencies to latest versions 1c736fe
* **package-json:** prefer ESM exports order and update tests 75798ac

## [2.4.0](https://github.com/JxJuly/eslint-config/compare/2.3.0...2.4.0) (2025-08-13)

### 🌟 Features | 新功能

* 支持 css lint 和格式化 ([6217f92](https://github.com/JxJuly/eslint-config/commit/6217f92a8b1f194b6d27edde4afda835f9a8d300))

### 🚀 Tool | 工具升级

* test main ([7d69f88](https://github.com/JxJuly/eslint-config/commit/7d69f88b8bcd7b271108402ba9a3dfa4aec91716))
* 优化构建流程 ([62d3e89](https://github.com/JxJuly/eslint-config/commit/62d3e8914de3ea270871395f231765906bbbc8db))

### 🔧 Chore | 日常维护

* fix unit test ([0c12bde](https://github.com/JxJuly/eslint-config/commit/0c12bde50d4a9df5d738b6a7defa906aa13b0457))
* upgrade some dep version ([62fd0a0](https://github.com/JxJuly/eslint-config/commit/62fd0a07e5374c576a06972f6fa43bd08fdabbe3))
* 使用 ts 重写 ([ebe2d37](https://github.com/JxJuly/eslint-config/commit/ebe2d374208fb9346472492eba3b1e032c98fe78))

## [2.3.0](https://github.com/JxJuly/eslint-config/compare/2.2.0...2.3.0) (2025-03-31)

### 🌟 Features | 新功能

* js 使用最新的稳定与法 & 补充单测 ([c93494c](https://github.com/JxJuly/eslint-config/commit/c93494ce745f7b7cfccf0fb44e28189d2f6b66bf))
* 更新 README ([989f431](https://github.com/JxJuly/eslint-config/commit/989f431fe273f778b66bf58b4a9b659deaee1687))

### 🐛 Bug Fixes | Bug 修复

* 调整了 package 规则中 types\mjs\cjs 的声明顺序 ([0a6370b](https://github.com/JxJuly/eslint-config/commit/0a6370b53763008b40029412ef500d72d16e8106))

## [2.2.0](https://github.com/JxJuly/eslint-config/compare/2.1.0...2.2.0) (2025-03-22)

### 🌟 Features | 新功能

* ts any 降级为 warn ([030595f](https://github.com/JxJuly/eslint-config/commit/030595fc2ccd5522297962603e568bb5464650c7))

## [2.1.0](https://github.com/JxJuly/eslint-config/compare/2.0.0...2.1.0) (2025-03-14)

### 🌟 Features | 新功能

* ts 增加 consistent-type-imports 检测 & 修复 packageJson 约束 ([a6fb6a9](https://github.com/JxJuly/eslint-config/commit/a6fb6a9309dd40efa19fd2600ea43acc4cbd325a))

## [2.0.0](https://github.com/JxJuly/eslint-config/compare/1.0.1...2.0.0) (2025-03-14)

### ⚠ BREAKING CHANGES

* 导出改为了 config.javascript\config.typescript 等。

### 🌟 Features | 新功能

* 使用 eslint-plugin-import 替换了 eslint-plugin-import-x 插件 ([afa1066](https://github.com/JxJuly/eslint-config/commit/afa106661460f5ad8a8a13fc13182a8923eef52c))

### 🐛 Bug Fixes | Bug 修复

* action pnpm version ([d5d869f](https://github.com/JxJuly/eslint-config/commit/d5d869fabe7145240d3b77aebe559e622680f1fd))

### 🚀 Tool | 工具升级

* 使用release-it 自动化 ([deb4565](https://github.com/JxJuly/eslint-config/commit/deb4565867e00f99b6dfdf9dac672e4c8fe0b63b))
