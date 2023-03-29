---
layout: archive
permalink: /categories/weekly/
title: "Weekly"
author_profile: true
sidebar_main: true
search : false
sidebar:
    nav: "docs"
---
{% assign posts = site.categories.weekly | sort:"date" | reverse %}

{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}