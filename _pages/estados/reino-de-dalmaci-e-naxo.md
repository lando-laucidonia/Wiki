---
layout: page
title: Reino de Dalmaci e Naxo
description: Estado do sudoeste e do centro-sul, cuja organização reúne as regiões históricas de Dalmaci, Naxo e Tarastina.
permalink: /estados/reino-de-dalmaci-e-naxo/
section: Estados
---
**Capital:** Cidade do Naxo

Estado do sudoeste e do centro-sul, cuja organização reúne as regiões históricas de Dalmaci, Naxo e Tarastina.

## Províncias

<div class="province-list">
{% assign provinces = site.provincias | where: 'estado', 'Reino de Dalmaci e Naxo' | sort: 'title' %}
{% for province in provinces %}<a class="province-card" href="{{ province.url | relative_url }}"><span>{{ province.sigla }}</span><strong>{{ province.title }}</strong><span>Capital: {{ province.capital }}</span></a>{% endfor %}
</div>
