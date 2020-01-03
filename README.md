Click [Demo](https://monzter50.github.io/staticfile-deploy/)
# staticfile-deploy 

Little project for test Github pages deploy

## Manual Setup

Install init your project:

`npm install --save-dev gh-pages`

and add a script to your package.json like this:

`"homepage": "https://username.github.io/name-project",`
`"scripts": {
  // ...
  "deploy": "gh-pages -d folder_name"
}`

and run project.

`npm run deploy`

## TODO:

- Deploy files static
- Hosting files statics
