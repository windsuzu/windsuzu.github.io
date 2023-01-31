---
to: docs/<%= new Date().toISOString().split('T')[0] %>-<%= h.inflection.dasherize(h.changeCase.lower(title)) %>.mdx
---

---
id: <%= h.inflection.dasherize(h.changeCase.lower(title)) %>
title: <%= title %>
description: <%= title %>
sidebar_label: <%= title %>
hide_title: true
hide_table_of_contents: false
tags: [tag1, tag2]
draft: false
last_updated: <%= new Date().toISOString().split('T')[0] %>
---

<profile
  title="<%= title %>"
  url=""
  author=""
  level=""
  category={[""]}
/>
