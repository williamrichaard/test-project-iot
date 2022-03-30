> Status do Projeto: :warning: (em desenvolvimento)

## Descrição do projeto 

<p align="justify">
  Projeto referente a disciplina de Internet das Coisas da faculdade UNDB.
</p>

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

## Como rodar a aplicação

No terminal, clone o projeto: 

```
git clone https://github.com/williamrichaard/test-project-iot
```
Acesse a pasta do projeto no terminal/cmd:

```
cd test-project-iot
```

Instale as dependecias:

```
npm install
```

## Como rodar os testes

Executar o teste da aplicação:

```
npm run cy:open
```

Gerar o html report dos testes:

```
npm run cy:report
```

Limpar o html report dos testes:

```
npm run cy:clear
```

## Linguagens, dependencias e libs utilizadas

- [Javascript](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [pure-gen](https://www.npmjs.com/package/pure-gen)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [jsonschema](https://www.npmjs.com/package/jsonschema)
- [rimraf](https://www.npmjs.com/package/rimraf)
- [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
- [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)

## Desenvolvedores/Contribuidores

| [<img src="https://avatars.githubusercontent.com/u/55960615?v=4" width=115><br><sub>William Richard</sub>](https://github.com/williamrichaard)
| :---: |

## Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`