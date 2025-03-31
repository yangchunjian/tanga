# 视频教学网站

这是一个基于 VuePress 2.0 构建的视频教学网站。

## 开发环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 安装

```bash
pnpm install
```

## 开发

```bash
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

## 预览构建结果

```bash
pnpm docs:preview
```

## 项目结构

```
docs/
├── .vuepress/        # VuePress 配置
├── README.md         # 首页
└── videos/          # 视频课程内容
    ├── README.md    # 课程列表
    ├── course1.md   # 课程一
    └── course2.md   # 课程二
``` 