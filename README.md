# Platform vs Full Stack Sliders

[![CI](https://github.com/jujhars13/platform-vs-full-stack-sliders/actions/workflows/test.yml/badge.svg)](https://github.com/jujhars13/platform-vs-full-stack-sliders/actions/workflows/test.yml)

Browser based tool which helps to visualise when you should rely on a platform team vs "build it you run it"

## Local Dev

```bash
# OPTIONAL use the awesome `reload` which auto-refreshes your browser on change using websockets
# `npm install -g webpack webpack-cli reload`

# install dev and app deps
npm install

# run tests
npm test

# in the root of the repo
node_modules/.bin/webpack --watch
(cd docs && reload -e "html|js|css|json|yml")

# browse to http://localhost:8080/
```

## Licence

Fill your boots

[GNU GPL](LICENSE)
