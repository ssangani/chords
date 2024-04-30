# template-api-nodejs

Template repo for an Express.js API

## Setup

- Install `Git` and `Node.js`
- Clone the repo
- Run `npm install` from root of repo
- Run `cp .env.sample .env`
- (Optional) Substitute any secrets

## Develop

### Run locally

`npm run app`

### Run tests

`npm run test`

```
curl --location --request GET 'http://localhost:3030/health/live'
```

### Linting

`npm run lint`

### Formatting

`npm run prettify` - to format code
