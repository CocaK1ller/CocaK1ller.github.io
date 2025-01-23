---
title: hexo 部署中遇到的一个坑
date: 2025/1/23
tag: 前端
excerpt: (CSDN前段时间新增的AI文本摘要体验效果挺好的，后面考虑接入LLM API来达到这个效果)
         这篇文章主要记录在配置hexo的字体格式时遇到的坑
---

Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

### 写作语法

#### 大号提示块

```
{% notel [颜色] [可选: 自定义图标] [标题] %}
内容
支持换行
{% endnotel %}
```

| 参数 | 说明 | 可选值 |
| --- | --- | --- |
| 样式/颜色 | 提示块的样式或颜色 | `blue` `red` `cyan` `purple` `orange` `yellow` `green`等颜色 |
| 自定义图标 | 自定义图标，选填 | [Fontawsome ](https://fontawesome.com/search) 的图标名称后半部分，比如 fa-image


效果：

{% notel red 自定义标题 %}
换行测试
换行测试
换行测试
{% endnotel %}

#### 小号提示块

```
{% note [样式/颜色] [可选: 自定义图标] %}
笔记内容
{% endnote %}
```

| 参数 | 说明 | 可选值 |
| --- | --- | --- |
| 样式/颜色 | 提示块的样式或颜色 | `success` `default` `primary` `info` `warning` `danger` `tip` `question` 以及 `blue` `red` `cyan` `purple` `orange` `yellow` `green`等颜色 |
| 自定义图标 | 自定义图标，选填 | [Fontawsome ](https://fontawesome.com/search) 的图标名称后半部分，比如 fa-image

效果：
{% note %} 默认 提示块标签 {% endnote %}
{% note default %} default 提示块标签 {% endnote %}
{% note primary %} primary 提示块标签 {% endnote %}

#### 折叠

```
{% folding [颜色]::[标题] %}
 
需要写的内容
 
{% endfolding %}
```

{% folding blue::Folding 测试： 点击查看更多 %}
 
啊啊啊啊啊
 
{% note danger  %}
danger 提示块标签
{% endnote %}
 
{% note tip  %}
tip 提示块标签
{% endnote %}
 
{% endfolding %}

#### 按钮

```
{% btn [可选大小]::[名称]::[url]::[可选图标] %}
```

不设置任何参数的 {% btn 按钮:: / %} 适合融入段落中。
 
regular 按钮适合独立于段落之外：
 
{% btn regular::示例博客::https://www.ohevan.com::fa-solid fa-play-circle %}
 
{% btn regular::示例博客::https://www.ohevan.com::fa-solid fa-play-circle %}
 
large 按钮更具有强调作用，建议搭配 center 使用：
 
{% btn center large::开始使用::https://redefine-docs.ohevan.com::fa-solid fa-download %}

#### 选项卡

```
{% tabs 页面内不重复的ID %}
 
<!-- tab 栏目1名称 -->
 
内容
 
<!-- endtab -->
<!-- tab 栏目2名称 -->
 
内容
 
<!-- endtab -->
 
{% endtabs %}
```

{% tabs First unique name %}
 
<!-- tab First Tab-->
 
**This is Tab 1.**
 
<!-- endtab -->
 
<!-- tab Second Tab-->
 
**This is Tab 2.**
 
<!-- endtab -->
 
<!-- tab Third Tab-->
 
**This is Tab 3.**
 
<!-- endtab -->
 
{% endtabs %}

### Html Color Codes

{% note info %}

现代浏览器支持140种已命名的颜色，如下所列。根据名称、Hex代码或RGB值将其用于您的HTML和CSS。

{% endnote %}


[Html Color Codes](https://htmlcolorcodes.com/zh/yanse-ming/)

