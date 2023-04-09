---
to: docs/<%= h.inflection.dasherize(h.changeCase.lower(title)) %>.mdx
---

---
id: <%= h.inflection.dasherize(h.changeCase.lower(title)) %>
title: <%= title %>
sidebar_label: <%= title %>
hide_title: false
hide_table_of_contents: false
description: This is a description of the page.
tags: [tag1, tag2]
keywords: [keyword1, keyword2]
draft: false
last_update:
  date: <%= new Date().toISOString().split('T')[0] %>
---

# <%= title %>

This is a new page.