---
title: 小工具
permalink: /tools/
layout: default
---

<section class="content-panel markdown-body">

## 小工具

这里收录博客里的实用工具，后续会持续补充。

### 喂养工具
- [婴儿奶量计算器 🍼]({{ '/pages/milk-calculator.html' | relative_url }})：按月龄与体重估算每日和单次奶量。

## 开放平台工具

<div class="platform-grid">
  <article class="platform-card">
    <h3>一言（Hitokoto API）</h3>
    <p>调用公开接口获取一句随机短句，用于灵感和写作开场。</p>
    <div class="tool-actions">
      <button type="button" data-load-quote>换一句</button>
      <a href="https://developer.hitokoto.cn/" target="_blank" rel="noopener noreferrer">接口文档</a>
    </div>
    <div class="tool-result" data-quote-output>点击按钮加载内容...</div>
  </article>

  <article class="platform-card">
    <h3>博客公开待办（GitHub Issues）</h3>
    <p>直接读取仓库 Issue，公开展示当前准备中的功能项。</p>
    <div class="tool-actions">
      <button type="button" data-load-issues data-repo-owner="CaroNiu" data-repo-name="CaroNiu.github.io">刷新待办</button>
      <a href="https://docs.github.com/issues" target="_blank" rel="noopener noreferrer">使用说明</a>
    </div>
    <div class="tool-result" data-issues-output>点击按钮加载 Issue 列表...</div>
  </article>
</div>

</section>
