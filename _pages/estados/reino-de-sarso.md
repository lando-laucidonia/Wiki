---
layout: page
title: Reino de Sarso
description: Estado do norte e noroeste com forte identidade histórica, aristocrática e regional, integrado à União sob a Coroa Imperial.
permalink: /estados/reino-de-sarso/
section: Estados
---
**Capital:** Récie

Estado do norte e noroeste com forte identidade histórica, aristocrática e regional, integrado à União sob a Coroa Imperial.

## Províncias

<div class="province-list">
{% assign provinces = site.provincias | where: 'estado', 'Reino de Sarso' | sort: 'title' %}
{% for province in provinces %}<a class="province-card" href="{{ province.url | relative_url }}"><span>{{ province.sigla }}</span><strong>{{ province.title }}</strong><span>Capital: {{ province.capital }}</span></a>{% endfor %}
</div>
