---
layout: archive
permalink: /categories/technology/
title: "Technology"
author_profile: true
sidebar_main: true
search : false
sidebar:
    nav: "docs"
---
{% assign posts = site.categories.technology | sort:"date" | reverse %}

{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}