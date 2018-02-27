# Expense-Manager

## Purpose of this Project

>**"Expense-Manager"** allows an individual user or company to track personal or business expenses. Expense-Manager is built in React with SCSS styling which permits each individual element to occupy separate files making the product easily scalable and customizable by swapping components in and out as required for a wide variety of end users. This version of the Expense-Manager has been customized for use in food service and restaurant environments.

### Table of Contents

- [Expense-Manager](#expense-manager)
  - [Purpose of this Project](#purpose-of-this-project)
    - [Table of Contents](#table-of-contents)
    - [How to Use](#how-to-use)
    - [Deployment](#deployment)
    - [Screenshots of this Project](#screenshots-of-this-project)
    - [Technologies Utilized](#technologies-utilized)
    - [Server-side Data Input Validation (Firebase)](#server-side-data-input-validation-firebase)
    - [Steps to Deploy Locally](#steps-to-deploy-locally)
    - [License -  MIT](#license---mit)

### How to Use

>Create account/login. Enter expenses on the add expense page. Review, Sort, Filter, Tally, Modify and/or Delete expense records in the Dashboard.

### Deployment

 >The **[expense-manager](https://expense-manager3.herokuapp.com/ "expense-manager")** has been deployed to a Heroku Dyno and can be used by following the link. (Note: *Resting Dyno's can often take 10 to 15 seconds to spinup on initial load and are not indicative of a sites true load speed.*)

### Screenshots of this Project

![expense-manager](https://raw.github.com/captnwalker/expense-manager/master/screenshots/screenshot1.png "expense-manager")

![expense-manager](https://raw.github.com/captnwalker/expense-manager/master/screenshots/screenshot2.gif "expense-manager")

### Technologies Utilized

| Core | Styling/Authentication | Dependencies | Dev Environment/Testing
| :---: | :---: | :---: | :---: |
| React | SCSS | AirBnB/React-Dates | Babelrc Compiler
| Express | Google Fonts | Moment.js | WebPack
| NodeJS | normalize.css | Numeral.js | Jest Testing Framework
| Redux | Google Login | Yarn | Redux-Devtools-Extension
| Firebase DB | Firebase AuthO | UUID | extract-text-webpack-plugin
| JSX | Validator | Redux-Thunk | Babel Poly-Fill
| JavaScript | CSS3 | RegEx | LiveServer |
| HTML5 | dotenv | CSS Loader | History |

### Server-side Data Input Validation (Firebase)

```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
        "expenses": {
          "$expense_id": {
            ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
              "description": {
                ".validate": "newData.isString() && newData.val().length > 0"
              },
              "note": {
                ".validate": "newData.isString()"
              },
              "createdAt": {
                ".validate": "newData.isNumber()"
              },
              "amount": {
                ".validate": "newData.isNumber()"
              },
              "$other": {
            	".validate": false
          	}
          }
        },
          "$other": {
            ".validate": false
        }
      }
    }
  }
}
```

### Steps to Deploy Locally

1. Clone down this repo
2. Restore dependencies by running `yarn install` in the root of your local repo
3. Restore production files by running `yarn run prod:build`
4. Start local server by running `yarn run dev-server`
5. You are now in development mode on localhost:8080

---

### License -  MIT