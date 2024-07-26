# Weather App

Este projeto é uma SPA construída com Angular 16 e Bootstrap, que consome a API do OpenWeatherMap para exibir a previsão do tempo. A aplicação permite a busca de previsões meteorológicas por cidade ou utilizando a localização atual do usuário.

## Funcionalidades

- Pesquisa de Cidade: O usuário pode digitar o nome de uma cidade para obter a previsão do tempo.
- Localização Atual: O usuário pode usar a geolocalização para obter a previsão do tempo para a sua localização atual.
- Dados Meteorológicos: A aplicação exibe o nome da cidade, ícone da previsão, temperatura atual, máxima, mínima e condições meteorológicas.

## Tecnologias Utilizadas

- Angular 16
- Bootstrap 5
- Font Awesome
- OpenWeatherMap API

## Instalação

### Pré-requisitos

- Node.js e npm instalados.
- Angular CLI instalado globalmente.

### Passos para Instalar
```bash
  git clone https://github.com/pafrasson/weather-app.git
  cd weather-app
  npm install
```
### Abra o arquivo src/environments/environment.ts e adicione sua chave da API:
```bash
export const environment = {
  weatherApiKey: 'SUA_API_KEY_AQUI'
};
```
## Executar a aplicação
```bash
ng serve
```
a aplicação irá rodar no localhost:4200

## Estrutura do projeto
```bash
weather-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── weather/
│   │   │   │   ├── weather.component.ts
│   │   │   │   ├── weather.component.html
│   │   │   │   ├── weather.component.css
│   │   │   ├── ...
│   │   ├── services/
│   │   │   ├── weather.service.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   ├── index.html
│   ├── styles.css
├── package.json
└── README.md
```