# Is it up?

![project preview](isitup.png)

[About](#about) / [Installation](#installation) / [Credits](#credits) / [License](#license)

## About

`isitup` is a simple web application to check whether a site is 🆙 or broken.

## Installation

Clone the repository and install all dependencies by running:

```
git clone https://github.com/nicholasadamou/isitup
cd isitup/
yarn install
```

Subsequently, create a `.env` file and declare a variable called `SECRET` (for session security purposes):

```
echo "SECRET=[your-secret-goes-here]" > .env
```

Finally, build the project by running:

```
yarn start
```

If you want to use [`docker`](https://docker.com) instead then you can do the following:

```
# Make sure you have docker installed before running the below commands.
# See https://docs.docker.com/get-docker/

make # Will build the docker image using the dockerfile.
docker-compose up
```

You can then access the service by navigating to [`localhost:3000`](http://localhost:3000/).

## Credits

- `isitup` is basically a remake of [isitup.org](https://github.com/sjparkinson/isitup.org) & [downforeveryoneorjustme.com](http://downforeveryoneorjustme.com) in Node.js, using Express.

## License

Copyright (c) by Nicholas Adamou. Some rights reserved.

`isitup` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).
