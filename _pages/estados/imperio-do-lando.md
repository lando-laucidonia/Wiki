---
layout: page
title: Império do Lando
description: Núcleo histórico e civilizacional do país, onde se desenvolveram as instituições imperiais, a tradição religiosa e parte essencial da identidade landesa.
permalink: /estados/imperio-do-lando/
section: Estados
---
**Capital:** Cidade do Lando

Núcleo histórico e civilizacional do país, onde se desenvolveram as instituições imperiais, a tradição religiosa e parte essencial da identidade landesa.

## Províncias

<div class="province-list">
{% assign provinces = site.provincias | where: 'estado', 'Império do Lando' | sort: 'title' %}
{% for province in provinces %}<a class="province-card" href="{{ province.url | relative_url }}"><span>{{ province.sigla }}</span><strong>{{ province.title }}</strong><span>Capital: {{ province.capital }}</span></a>{% endfor %}
</div>
