# edit-profile-api

Node API Scaffold.

## Available scrips:
```
"scripts": {
    "prebuild": "rimraf dist",
    "build": "babel src -d dist",
    "start": "node ./dist/app",
    "start:live": "nodemon ./src/app.js --exec babel-node -- --presets=es2015"
}
```
For any of the scrits run 

```
npm run [script]
```

App runs on port 500
