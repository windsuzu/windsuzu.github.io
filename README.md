# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deploy

I use Github Actions to deploy the website to Github Pages. The workflow is defined in `.github/workflows/deploy.yml`. The workflow is triggered on every push to the `master` branch. The workflow builds the website and pushes the build files to the `gh-pages` branch.

For more information, please refer to the [Docusaurus documentation - Triggering deployment with GitHub Actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions).
