# Configuração inicial no GitHub Pages

## 1. Criar o repositório

Crie um repositório público vazio, sem adicionar README, licença ou `.gitignore`, porque esses arquivos já existem no pacote. Um nome recomendado é `lando`.

## 2. Enviar o ZIP

Extraia o pacote em seu dispositivo, abra o repositório no GitHub, use **Add file → Upload files**, envie o conteúdo extraído e confirme o commit na branch `main`.

Não envie a pasta externa `lando-jekyll`; envie os arquivos que estão dentro dela, de modo que `_config.yml`, `index.html`, `assets` e `.github` fiquem diretamente na raiz do repositório.

## 3. Habilitar o Pages

Abra **Settings → Pages**. Em **Build and deployment**, selecione **GitHub Actions** como fonte. O fluxo já incluído será executado automaticamente quando houver um novo commit na branch `main`.

## 4. Conferir a publicação

Abra **Actions → Publicar Enciclopédia Imperial**. Quando os trabalhos `build` e `deploy` terminarem, o endereço do site será exibido no próprio fluxo e na tela de configuração do Pages.

## 5. Substituir imagens provisórias

Os caminhos estão documentados em `assets/images/README.md`. A substituição pode manter os mesmos nomes, evitando qualquer alteração no código.

## 6. Domínio próprio

O domínio personalizado deve ser configurado apenas depois que a publicação no endereço `github.io` estiver funcionando. A configuração será feita em **Settings → Pages → Custom domain**, seguida dos registros DNS exigidos pelo GitHub.
