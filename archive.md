---
title: 归档
permalink: /archive/
---

<nav>
  <a href="{{ '/' | relative_url }}">首页</a> ·
  <a href="{{ '/about/' | relative_url }}">关于</a> ·
  <a href="{{ '/archive/' | relative_url }}">归档</a> ·
  <a href="{{ '/categories/' | relative_url }}">分类</a> ·
  <a href="{{ '/pages/milk-calculator.html' | relative_url }}">奶量计算器</a>
</nav>

## 文章归档

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
### {{ year.name }}
{% for post in year.items %}
- {{ post.date | date: "%m-%d" }} · [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
暂无文章归档内容。
{% endfor %}
