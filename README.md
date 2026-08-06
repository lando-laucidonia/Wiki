# Enciclopédia Imperial do Lando

Site oficial de desenvolvimento do universo ficcional do **Império do Lando e Laucidônia**, construído com Jekyll e preparado para publicação automática no GitHub Pages.

## Publicação no GitHub

1. Crie um repositório vazio no GitHub, preferencialmente chamado `lando` ou `enciclopedia-imperial-do-lando`.
2. Extraia o conteúdo deste ZIP e envie todos os arquivos para a raiz do repositório.
3. Confirme que a branch principal se chama `main`.
4. Abra **Settings → Pages** e, em **Build and deployment → Source**, escolha **GitHub Actions**.
5. Abra a aba **Actions** e acompanhe o fluxo `Publicar Enciclopédia Imperial`.
6. Depois da primeira publicação, o endereço aparecerá em **Settings → Pages**.

O fluxo usa as ações oficiais atualmente recomendadas para o GitHub Pages, gera as páginas provinciais a partir do CSV e executa o Jekyll automaticamente.

## Teste local

Com Ruby e Bundler instalados:

```bash
bundle install
python3 scripts/generate_provinces.py
bundle exec jekyll serve
```

O site ficará disponível normalmente em `http://localhost:4000`.

## Estrutura editorial

- `_data`: dados estruturados, navegação, Estados, regras canônicas e províncias.
- `conteudo/_historia`: artigos históricos.
- `conteudo/_instituicoes`: política, direitos, defesa e instituições.
- `conteudo/_territorios`: geografia e organização territorial.
- `conteudo/_provincias`: páginas geradas automaticamente pelo script.
- `conteudo/_cidades`, `_religiao`, `_cultura` e `_personagens`: coleções temáticas.
- `conteudo/_acervo`: textos-base preservados como fontes de desenvolvimento.
- `assets/images`: imagens e marcadores provisórios.

## Atualização das províncias

Edite `_data/provincias.csv` e execute:

```bash
python3 scripts/generate_provinces.py
```

O GitHub Actions também executa esse script antes de cada publicação.

## Imagens que devem ser substituídas

Consulte `assets/images/README.md`. Os marcadores SVG já funcionam, portanto o site não apresentará imagens quebradas enquanto o material oficial não estiver pronto.

## Configuração do endereço

O arquivo `_config.yml` começa com `url` e `baseurl` vazios. O `actions/configure-pages` fornece os valores adequados durante a publicação, inclusive quando o site estiver em um repositório de projeto. Um domínio personalizado poderá ser configurado posteriormente em **Settings → Pages**.

## Observação canônica

A forma oficial é **Império do Lando e Laucidônia**. Usa-se **do Lando**, nunca “de Lando”, e o Lando é um império, não um reino.
