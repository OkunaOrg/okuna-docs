<img alt="Open book logo" src="https://snag.gy/yWbLr1.jpg" width="200">

This repository contains the source for the Openbook API documentation page - https://docs.openbook.social.

## Table of Contents

- [Requirements](#requirements)
- [Project Overview](#project-overview)
- [Contributing](#contributing)
    + [Code of Conduct](#code-of-conduct)
    + [License](#license)
    + [Other issues](#other-issues)
    + [Git commit message conventions](#git-commit-message-conventions)
- [Getting Started](#getting-started)

## Requirements

Git, Node (8.x or higher), and Yarn.

## Project Overview

The website is a static site generated using [Vuepress](https://vuepress.vuejs.org).

Other relevant technologies:

 * [SCSS](https://sass-lang.com/) for stylesheets
 * [Pug](https://pugjs.org) for Vue templating

## Contributing

There are many different ways to contribute to the website development, just find the one that best fits with your skills and open an issue/pull request in the repository.

Examples of contributions we love include:

- **Documentation fixes**
- **Code patches**
- **Bug reports**
- **Patch reviews**
- **Translations**
- **UI enhancements**

#### Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/OpenBookOrg/openbook-docs/blob/master/CODE_OF_CONDUCT.md).

#### License

Every contribution accepted is licensed under [AGPL v3.0](http://www.gnu.org/licenses/agpl-3.0.html) or any later version. 
You must be careful to not include any code that can not be licensed under this license.

Please read carefully [our license](https://github.com/OpenBookOrg/openbook-docs/blob/master/LICENSE.txt) and ask us if you have any questions.

#### Responsible disclosure

Cyber-hero? Check out our [Vulnerability Disclosure page](https://www.open-book.org/en/vulnerability-report).

#### Other issues

We're available almost 24/7 in the Openbook slack channel. [Join us!](https://join.slack.com/t/openbookorg/shared_invite/enQtNDI2NjI3MDM0MzA2LTYwM2E1Y2NhYWRmNTMzZjFhYWZlYmM2YTQ0MWEwYjYyMzcxMGI0MTFhNTIwYjU2ZDI1YjllYzlhOWZjZDc4ZWY)

#### Git commit message conventions

Help us keep the repository history consistent 🙏!

We use [gitmoji](https://gitmoji.carloscuesta.me/) as our git message convention.

If you're using git in your command line, you can download the handy tool [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli).

## Getting Started

Clone the repository:

```sh
git clone git@github.com:openbookorg/openbook-docs.git
cd openbook-docs
```

Install the dependencies using Yarn:

```sh
npm i -g yarn
yarn
```

### Directory Structure

The `source` directory contains the raw Markdown source of the articles, as well as a special `.vuepress` directory, which holds all the configuration (settings, theme, assets, etc.) of the Vuepress instance. The pages will be generated in the `source/.vuepress/dist` directory. This directory is elemental for the `gh-pages` branch.

### Configuration

You can change navigation menu items, languages, and other settings in the `source/.vuepress/config.js` file. For more information on how to use the config file, please refer to the [Vuepress Config Reference](https://vuepress.vuejs.org/config/).

### Development

For development purposes, it is recommended that you run `yarn dev` in a designated terminal tab/window. Vuepress supports hot reloading, so all your changes will be automatically applied and reloaded in your browser so long as `yarn dev` is running.

### Linting

We like clean code, so before you commit, we would appreciate it if you've ran your changes through the linter! If you have done changes to the source code, you can use the following command to start linting:

```sh
yarn lint
```

and to automatically fix most issues:

```sh
yarn lint:fix
```

### Building and Deployment

To build the production assets, you need to run the following command:

```sh
yarn build
```

Once the build has finished, you can stage your changes and commit them to the master branch. Only then you can deploy your changes to GitHub Pages by running the following command:

```sh
yarn deploy
```

or the slightly longer, but often more reliable variant:

```sh
git subtree push --prefix source/.vuepress/dist origin gh-pages
```

## Questions/stuck?

[Join our Slack channel](https://join.slack.com/t/openbookorg/shared_invite/enQtNDI2NjI3MDM0MzA2LTYwM2E1Y2NhYWRmNTMzZjFhYWZlYmM2YTQ0MWEwYjYyMzcxMGI0MTFhNTIwYjU2ZDI1YjllYzlhOWZjZDc4ZWY), we're happy to help you troubleshoot your issue.
