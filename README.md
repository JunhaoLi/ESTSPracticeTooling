# A playground tool for ES and TS practice

This is a practice tool for ES6 and Typescript. I used it for learning ES6 and Typescipt and inspired by [this](https://www.youtube.com/playlist?list=PLC3y8-rFHvwhI0V5mE9Vu6Nm-nap8EcjV) awesome tutorial on Youtube :)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you installed latest node [here](https://nodejs.org/en/).

Visual studio code has a good support typescript and other features. I use it as editor but feel free to pick up your own favoriate editor.

### Installing

1. Install typescript on your machine (your may need admin permission if you are using Mac, click [here](https://support.apple.com/en-us/HT202035) to see how)
```
npm install -g typescript
```

2. Install lite server
```
npm install -g lite-server
```

3. Clone or download this repository to your local (click [here](https://help.github.com/articles/cloning-a-repository/) to see how)

4. Go to your local folder in your console and install npm packages
```
npm install
```

5. Build project in console, it will generate bundle.js under ./dist folder
```
npm run build
```

6. Start local lite server, it will open a browser window automatically.
```
lite-server
```

7. Click F12 to open browser development tool, you will find 'welcome hans li' there if everything goes successfully

8. Now you can go to ./src/index.ts to add more code or create new file under ./src folder. Everytime you made change, please run step 5 and refresh browser to get refreshed results. (I will improve this part to add watcher task here)

## Authors

* **Hans** A beginner of programming world :-)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* A nice playground [tool](https://github.com/a-tarasyuk/webpack-typescript-babel) based on babel and webpack by Alexander T