# Is it up? [![Build Status](https://travis-ci.org/nicholasadamou/isitup.svg?branch=master)](https://travis-ci.org/nicholasadamou/isitup)

![project preview](isitup.png)

![license](https://img.shields.io/apm/l/vim-mode.svg)
[![DevDependencies](https://img.shields.io/david/dev/nicholasadamou/isitup.svg?style=flat-square)](https://david-dm.org/nicholasadamou/isitup#info=devDependencies)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=nicholasadamou/isitup)](https://dependabot.com)
[![Say Thanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/NicholasAdamou)

[About](#about) / [Installation](#installation) / [Credits](#credits) / [License](#license)

## About

`isitup` is a simple web application to check whether a site is 🆙 or broken.

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

Copyright (c) by Nicholas Adamou. Some rights reserved.

`isitup` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).
