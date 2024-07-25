# Weather App

Este projeto é uma SPA construída com Angular 16 e Bootstrap, que consome a API do OpenWeatherMap para exibir a previsão do tempo. A aplicação permite a busca de previsões meteorológicas por cidade ou utilizando a localização atual do usuário.

## Funcionalidades

- Buscar a previsão do tempo por cidade.
- Obter a previsão do tempo utilizando a localização atual do usuário.
- Exibir descrições detalhadas de previsão de tempo da cidade pesquisada.

## Tecnologias Utilizadas

- Angular 16
- Bootstrap 5
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