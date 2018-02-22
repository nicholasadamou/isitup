# Is it up? [![Build Status](https://travis-ci.org/nicholasadamou/isitup.svg?branch=master)](https://travis-ci.org/nicholasadamou/isitup)

![project preview](isitup.png)

![license](https://img.shields.io/apm/l/vim-mode.svg)
[![Say Thanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/NicholasAdamou)

[About](#about) / [Requirements](#requirements) / [Installation](#installation) / [Credits](#credits) / [License](#license)

## About
'Is it up?' is a simple web application to check whether a site is 🆙 or broken.

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [localtunnel](https://github.com/localtunnel/localtunnel)

```bash
$ npm install -g yarn bower gulp localtunnel
```

**Note**: **(`Windows` Users)** In order for **`localtunnel`** to work properly, please configure `Windows Firewall` to *allow* `port 3000, 3001` to *allow* **in-bound** and **out-bound** connections (`port 3000, 3001` is **Browsersync**'s default port allocation). For *Security* reasons, only *allow* **in-bound** and **out-bound** connections on `port 3000, 3001` on your home network.


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
- isitup is basically a remake of [isitup.org](https://github.com/sjparkinson/isitup.org) & [downforeveryoneorjustme.com](http://downforeveryoneorjustme.com) in Node.js, using Express. 

## License

Copyright (c) 2018 by Nicholas Adamou. Some rights reserved.

`isitup` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).
