# IN PRODUCTION - *Expense-Manager* - IN PRODUCTION

## Purpose of this Project

>**"Expense-Manager"** allows an individual user or company to track personal or business expenses.

### Table of Contents

- [Expense-Manager](#in-production---expense-manager---in-production)
    - [How to Use](#how-to-use)
    - [Deployment](#deployment)
    - [Screenshot of this Project](#screenshot-of-this-project)
    - [Technologies Utilized](#technologies-utilized)
    - [Steps to Deploy Locally](#steps-to-deploy-locally)
    - [License -  MIT](#license---mit)

### How to Use

>Create account/login. Enter expenses on the add expense page. Review, Sort, Filter, Tally, Modify and/or delete expense records in the Dashboard.

### Deployment

 >The **[expense-manager](https://expense-manager3.herokuapp.com/ "expense-manager")** has been deployed to a Heroku Dyno and can be used by following the link. (Note: *Resting Dyno's can often take 10 to 15 seconds to spinup on initial load and are not indicative of a sites true load speed.*)

### Screenshot of this Project

 ![expense-manager](https://raw.github.com/captnwalker/expense-manager/master/screenshots/screenshot1.jpg "expense-manager")

### Technologies Utilized

| Core | Styling/Authentication | Auxillary | Dev Environment/Testing
| :---: | :---: | :---: | :---:
| React | SCSS | AirBnB/React-Dates | Babelrc Compiler
| Express | Google Fonts | Moment.js | WebPack
| NodeJS | Bulma Framework | Numeral.js | Jest Testing Framework
| Redux | Google Login | Yarn | Redux-Devtools-Extension
| Firebase DB | Firebase AuthO | UUID | extract-text-webpack-plugin
| JSX |  | Redux-Thunk | LiveServer
| JavaScript |  | RegEx | Poly-Fill |
| HTML5 |   |   |   |     |

### Steps to Deploy Locally

1. Clone down this repo
2. Restore dependencies by running `yarn install` in the root of your local repo
3. Restore production files by running `yarn run prod:build`
4. Start local server by running `yarn run dev-server`
5. You are now in development mode on localhost:8080

---

### License -  MIT