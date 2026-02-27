---
title: 分类
permalink: /categories/
layout: default
---

<section class="content-panel markdown-body">

## 分类浏览

<nav class="doc-jump-nav" aria-label="分类跳转">
  {% assign category_names = site.categories | map: 'first' | sort %}
  {% for category_name in category_names %}
  <a href="#cat-{{ category_name | slugify }}">{{ category_name }}</a>
  {% endfor %}
</nav>

{% for category_name in category_names %}
### <span id="cat-{{ category_name | slugify }}">{{ category_name }}</span>
{% assign posts_in_category = site.categories[category_name] %}
{% for post in posts_in_category %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
暂无分类内容。
{% endfor %}

</section>
