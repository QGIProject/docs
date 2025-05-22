---
title: 如何为一个vitepress项目提交一个PR
author: 天音铃
---
#  如何为一个vitepress项目提交一个PR
本教程假设读者已经对git和github有基本的了解，并且会使用git命令行工具。  
假设你已经创建了一个fork，并且已经将fork的代码库clone到本地。

## 准备工作
* 灵感
* 有可能需要的图片
* 会打字

## frontmattar
[frontmattar](https://vitepress.dev/zh/reference/frontmatter-config)为markdown文件提供了一份配置文件，用户可以通过编写frontmattar来定制markdown文件的元数据,有一份好的frontmattar可以更好的做到SEO优化
### 示例
``` md
---
title: "title" #文章的标题，将会在页面标题和侧边栏中显示
description: "description" #文章的描述
---
```
这样就构成了一个基本的frontmattar配置
