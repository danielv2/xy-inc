# XY-INC 

XY-INC - É uma aplicação para auxiliar pessoas na localização de ponto de interesse (POIs).

  - CRUD para novos pontos de interesse.
  - Listagem de pontos de interesse por proximidade (x, y)

#### Tech

XY-INC utiliza as seguintes ferramentas:

* [AngularJS] - HTML aprimorado para aplicativos web!
* [MaterialDesign] - UI boilerplate para aplicações web modernas.
* [node.js] - I/O para utilização backend.
* [Express] - node.js network app framework
* [Grunt] - Automatizador de tarefas.
* [MongoDB] - Banco de dados não relacional.

O XY-INC é um código aberto com um repositório publico no GitHub.

### Instalação

XY-INC precisa do [Node.js](https://nodejs.org/) para rodar.

Instalando as dependencias, devDependencias e inicializando o servidor.

```sh
$ cd xy-inc
$ npm install
$ bower install
$ node server/app.js ou grunt serve 
```
O servidor estará ativo em "localhost:9000"

### Rotas
- localhost:9000 - front end simples.
- GET - localhost:9000/api/pois - lista todos os pontos de interrese.
- GET - localhost:9000/api/pois/:id - lista ponto de interesse por ID.
- POST - localhost:9000/api/pois - Insere novo ponto de interesse.
    - JSON : { "nome" : "new poi",  "x" : 10,  "y"  : 10}
- PUT - localhost:9000/api/pois/:id - Atualiza ponto de interesse por ID.
- DELETE - localhost:9000/api/pois/:id - Deleta ponto de interesse por ID.
- POST - localhost:9000/api/pois/proximidade - Lista os pontos de interesse com base nos parâmetros.
     - JSON : { "x" : 20,  "y"  : 10, "metros" : 10}


#### Testes

Para os testes no backend são necessários as seguintes ações:
* [Mocha] - Framework para testes em node.js.

```sh
$ cd xy-inc
$ npm install -g mocha
$ mocha server/api/poi/poi.spec.js
```

### Autor

 - Daniel Vitor Vieira
 - daniel-v2@hotmail.com

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [MongoDB]: <https://www.mongodb.com/>
   [node.js]: <http://nodejs.org>
   [Mocha]: <https://mochajs.org/>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Grunt]: <https://gruntjs.com/>
   [MaterialDesign]: <https://material.angularjs.org/latest/>
   

