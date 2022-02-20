
<p align="center">
  <img src="https://www.cortex-intelligence.com/hs-fs/hubfs/raw_assets/public/cortex-intelligence/images/logo-cortex.png?width=130&height=22&name=logo-cortex.png" alt="Sublime's custom image"/>
</p>

# Cortex Intelligence | Web Components Lib

Uma biblioteca de componentes simples, para dar suporte ao desenvolvimento front-end 
do site e outros appsWeb da Cortex.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/aureliocampos/cortex-web-components.git
```

Entre no diretório do projeto

```bash
  cd cortex-web-components
```

Instale as dependências

```bash
  npm install 
  #ou
  yarn install
```

Inicie o servidor

```bash
  npm run start 
  #ou 
  yarn start
```

## Scripts

- `start` executa seu aplicativo para desenvolvimento, recarregando em alterações de arquivo
- `start:build` executa seu aplicativo depois de compilado usando o comando build
- `build` constrói seu aplicativo e o gera em seu diretório `dist`
- `test` executa seu conjunto de testes com o Web Test Runner
- `lint` executa o linter para o seu projeto
- `storybook` executa o Storybook para desenvolvimento, recarregando em alterações de arquivo

## Configurações

Para a maioria das ferramentas, a configuração está no `package.json` para reduzir a quantidade de arquivos em seu projeto.

Se você personalizar muito a configuração, considere movê-los para arquivos individuais.