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
- Postgres 10

## Development

> Clone each of the related projects into your project folder. Then follow the installation instructions below and for each repo. 

### Installing Dependencies

- Ensure have both mongoDB and Postgres installed. 

- Follow each repo's read me or package.json scripts to:
  - seed each database
  - run webpack to configure bundle.js
  - run each server

From within the root directory:
```sh
npm install -g webpack
npm install
```

To start runing your app run:

``` sh
npm start
```
__In a browser navigate to localhost:4000 or the directory you specified in the .env file__
