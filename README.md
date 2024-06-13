# chords

Template API repo

## Stack

- Built on [Node.js](https://nodejs.org/docs/latest/api/)
- Using [Express](https://expressjs.com/) framework
- Can code using [Typescript](https://typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/). Recommend installing prettier plugin such as [VSCode Prettier Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Using [husky](https://github.com/typicode/husky) extensions to format code on commits
- Testing with [Jest](https://jestjs.io/docs/getting-started)
- CI/CD using [Github Actions](https://docs.github.com/en/actions)

## Setup

- Install `Git` and `Node.js`
- Clone the repo
- Run `npm install` from root of repo
- Run `cp .env.sample .env`
- (Optional) Substitute any secrets

## Develop

### Run locally

```sh
npm run dev
```

```sh
curl --location --request GET 'http://localhost:3030/health/live'
```

### Run tests

```sh
npm run test
```

### Linting

```sh
npm run lint
```

### Formatting

```sh
npm run format
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.
