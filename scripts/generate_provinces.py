#!/usr/bin/env python3
from pathlib import Path
import csv, json, re, unicodedata
ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / '_data' / 'provincias.csv'
OUT = ROOT / 'conteudo' / '_provincias'
OUT.mkdir(parents=True, exist_ok=True)
for old in OUT.glob('*.md'):
    old.unlink()
def slugify(value):
    s = unicodedata.normalize('NFKD', value).encode('ascii','ignore').decode('ascii').lower()
    return re.sub(r'[^a-z0-9]+','-',s).strip('-')
def q(value):
    return json.dumps(str(value), ensure_ascii=False)
with SRC.open(encoding='utf-8-sig', newline='') as f:
    rows = list(csv.DictReader(f))
for row in rows:
    name = row['Nome']
    data = {
      'title': name,
      'description': f"Dados territoriais, demográficos e econômicos da província de {name}.",
      'status': 'canônico',
      'province_id': row['ID'], 'sigla': row['Sigla'], 'capital': row['Capital'],
      'estado': row['Estado'], 'regiao': row['Região'], 'populacao': row['População Total'],
      'pop_metropolitana': row['População da Região Metropolitana da Capital'],
      'area': row['Área Total (km²)'], 'densidade': row['Densidade Populacional (habitantes/km²)'],
      'municipios': row['Número de municípios'], 'freguesias': row['Número de Freguesias'],
      'limites': row['Limites (DIREÇÃO)'], 'setor_primario': row['Primeiro Setor no PIB Províncial (%)'],
      'setor_secundario': row['Segundo Setor no PIB Províncial (%)'], 'setor_terciario': row['Terceiro Setor no PIB Províncial (%)'],
      'desemprego': row['Desemprego'], 'atividade': row['Principal atividade econômica de destaque'],
      'infraestrutura': row['Qualidade de Infraestrutura (%)'], 'idh': row['IDH'],
      'educacao': row['Nota de educação'], 'pd_per_capita': row['Gastos em P&D per capita (mil US$, 2019)'],
      'updated': '6 de agosto de 2026'
    }
    lines=['---']+[f'{k}: {q(v)}' for k,v in data.items()]+['---','']
    (OUT/f'{slugify(name)}.md').write_text('\n'.join(lines), encoding='utf-8')
print(f'Geradas {len(rows)} páginas provinciais em {OUT}.')
