---
layout: page
title: Guia do cânone
description: Regras terminológicas e decisões fundamentais que orientam todo o conteúdo do projeto.
permalink: /guia-do-canon/
section: Projeto
---
Este registro reúne as decisões que devem prevalecer sobre versões anteriores, rascunhos ou documentos ainda não revisados.

<table>
<thead><tr><th>Regra</th><th>Forma canônica</th></tr></thead>
<tbody>
{% for item in site.data.canon %}<tr><td>{{ item.term }}</td><td>{{ item.value }}</td></tr>{% endfor %}
</tbody>
</table>

## Situações editoriais

**Canônico** identifica informações estabelecidas e vigentes. **Em desenvolvimento** indica que o conceito já integra o universo, embora ainda precise de detalhamento. **Provisório** identifica decisões que podem ser alteradas. **Em revisão** é usado para documentos antigos, extensos ou internamente contraditórios que ainda precisam ser reconciliados com o cânone atual.
