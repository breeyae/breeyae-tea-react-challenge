# breeyae-tea-react-challenge

## How to run the code locally

### Clone the project 
```bash
git clone https://github.com/breeyae/breeyae-tea-react-challenge.git
```

### Run the Node server
Because the Twitter API does not support CORS, I built an Express server to call the Twitter API and pass the data back to the React app.

The Twitter API also requires a developer account and access tokens to call the APIs. Follow [these instructions](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api) to generate a Bearer token. Add the token (without the word Bearer, just the token that starts with AAAA) as an environment variable AUTHORIZATION.

```bash
cd breeyae-tea-react-challenge
npm install
AUTHORIZATION=AAAAAA... npm start
```

### Run the UI
```bash
cd breeyae-tea-react-challenge
cd react-ui
npm install
npm start
```

The web page should open automatically at localhost:3000

### Run the unit tests
```bash
cd breeyae-tea-react-challenge
cd react-ui
npm run test
```