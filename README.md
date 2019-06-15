# Is it up? [![Build Status](https://travis-ci.org/nicholasadamou/isitup.svg?branch=master)](https://travis-ci.org/nicholasadamou/isitup)

![project preview](isitup.png)

![license](https://img.shields.io/apm/l/vim-mode.svg)
[![DevDependencies](https://img.shields.io/david/dev/nicholasadamou/isitup.svg?style=flat-square)](https://david-dm.org/nicholasadamou/isitup#info=devDependencies)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=nicholasadamou/isitup)](https://dependabot.com)
[![Say Thanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/NicholasAdamou)

[About](#about) / [Requirements](#requirements) / [Installation](#installation) / [Credits](#credits) / [License](#license)

## About

`isitup` is a simple web application to check whether a site is 🆙 or broken.

## Requirements

-   [Node.js](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com/en/docs/install)
-   [Gulp](http://gulpjs.com)
-   [localtunnel](https://github.com/localtunnel/localtunnel)

```bash
$ npm install -g yarn bower gulp localtunnel
```

**Note**: **(`Windows` Users)** In order for **`localtunnel`** to work properly, please configure `Windows Firewall` to _allow_ `port 3000, 3001` to _allow_ **in-bound** and **out-bound** connections (`port 3000, 3001` is **Browsersync**'s default port allocation). For _Security_ reasons, only _allow_ **in-bound** and **out-bound** connections on `port 3000, 3001` on your home network.

## Installation

Clone the repository and install all dependencies by running:

```
$ git clone https://github.com/nicholasadamou/isitup
$ cd isitup/
$ yarn install
```

Subsequently, create a `.env` file and declare a variable called `SECRET` (for session security purposes):

```
$ echo "SECRET=[your-secret-goes-here]" > .env
```

Finally, build the project by running:

```
$ yarn start
```

You can then access the service by navigating to [`localhost:3000`](http://localhost:3000/).

## Credits

-   `isitup` is basically a remake of [isitup.org](https://github.com/sjparkinson/isitup.org) & [downforeveryoneorjustme.com](http://downforeveryoneorjustme.com) in Node.js, using Express.

## License

Copyright (c) 2018 by Nicholas Adamou. Some rights reserved.

`isitup` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).
