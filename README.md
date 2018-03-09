# ef-proxy

> Erin's Proxy repo.
> This project is designed to serve up moc airbnb app. There were four services that were created for this project.

## Related Projects

  - https://github.com/Fossa-bnb/reservation-service
  - https://github.com/Fossa-bnb/information
  - https://github.com/Fossa-bnb/reviews
  - https://github.com/Fossa-bnb/photogallery

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Launch Fossa-airbnb app.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MongoDB 3.6.2
- Postgres

## Development

### Installing Dependencies

> From within the root directory:

```sh
npm install -g webpack
npm install
```

> Ensure have both mongoDB and Postgres installed. And seed database according to each service's package.json scripts.

> In each service root directory:
```sh
npm install
npm test
npm run build
npm start
```
> In a browser navigate to localhost:4000
