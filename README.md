# api-template

Template repo for an Express.js API

## Setup

- Install `Git` and `Node.js`
- Clone the repo
- Run `npm install` from root of repo
- Run `cp .env.sample .env`
- (Optional) Substitute any secrets

## Running Tests

`npm run test`

## Running Application

`npm run app`

```
curl --location --request GET 'http://localhost:3030/health/live'
```

### Code formatting

`npm run lint` - to lint code
`npm run prettify` - to format code
