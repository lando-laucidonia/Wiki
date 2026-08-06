---
layout: page
title: Império da Laucidônia
description: Estado oriental voltado ao Mar Sorene, marcado por tradições marítimas, portuárias, comerciais e culturais próprias.
permalink: /estados/imperio-da-laucidonia/
section: Estados
---
**Capital:** Lune

Estado oriental voltado ao Mar Sorene, marcado por tradições marítimas, portuárias, comerciais e culturais próprias.

## Províncias

<div class="province-list">
{% assign provinces = site.provincias | where: 'estado', 'Império da Laucidônia' | sort: 'title' %}
{% for province in provinces %}<a class="province-card" href="{{ province.url | relative_url }}"><span>{{ province.sigla }}</span><strong>{{ province.title }}</strong><span>Capital: {{ province.capital }}</span></a>{% endfor %}
</div>
