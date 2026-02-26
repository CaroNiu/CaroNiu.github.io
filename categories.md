---
title: 分类
permalink: /categories/
---

<nav>
  <a href="{{ '/' | relative_url }}">首页</a> ·
  <a href="{{ '/about/' | relative_url }}">关于</a> ·
  <a href="{{ '/archive/' | relative_url }}">归档</a> ·
  <a href="{{ '/categories/' | relative_url }}">分类</a> ·
  <a href="{{ '/pages/milk-calculator.html' | relative_url }}">奶量计算器</a>
</nav>

## 分类浏览

{% assign category_names = site.categories | map: 'first' | sort %}
{% for category_name in category_names %}
### {{ category_name }}
{% assign posts_in_category = site.categories[category_name] %}
{% for post in posts_in_category %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
暂无分类内容。
{% endfor %}
