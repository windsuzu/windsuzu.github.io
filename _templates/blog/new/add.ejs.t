---
to: blog/<%= new Date().toISOString().split('T')[0] %>-<%=h.inflection.dasherize(h.changeCase.lower(title))%>.mdx
---

---
title: <%=title%>
description: <%=title%>
authors: jay
tags: [tag1, tag2]
keywords: [keyword1, keyword2]
hide_table_of_contents: false
draft: true
---

# <%=title%>

This is a new page.