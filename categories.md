---
title: 分类
permalink: /categories/
layout: default
---

<section class="content-panel markdown-body">

## 分类浏览

{% assign sorted_categories = site.categories | sort %}

{% if sorted_categories and sorted_categories.size > 0 %}
<nav class="doc-jump-nav" aria-label="分类跳转">
  {% for category in sorted_categories %}
  {% assign category_name = category[0] %}
  <a href="#cat-{{ category_name | slugify }}">{{ category_name }}</a>
  {% endfor %}
</nav>

{% for category in sorted_categories %}
{% assign category_name = category[0] %}
{% assign posts_in_category = category[1] %}
### <span id="cat-{{ category_name | slugify }}">{{ category_name }}</span>
{% for post in posts_in_category %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% endfor %}
{% else %}
暂无分类内容。
{% endif %}

</section>
