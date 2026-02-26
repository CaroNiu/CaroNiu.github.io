---
title: 分类
permalink: /categories/
layout: default
---

<section class="content-panel markdown-body">

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

</section>
