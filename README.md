# Expense-Manager  :moneybag: :chart_with_upwards_trend:

## Purpose of this Project

>**"Expense-Manager"** allows an individual user or company to track personal or business expenses. Expense-Manager is built in React with SCSS styling which permits each individual element to occupy separate files making the product easily scalable and customizable by swapping components in and out as required for a wide variety of end users. The app is fully responsive for a seamless mobile user experience. This version of the Expense-Manager has been customized for use in food service and restaurant environments. As an added feature, if a restaurant manager finds themselves in the back office entering invoices when a call for a reservation comes in, they can click the "Reservation" link and be taken to our **[Reservationist-2](https://github.com/captnwalker/reservationist-2 "Reservationist-2")** product, saving them a trip to the host desk to enter the reservation.

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
    - [Companion Versions of the App](#companion-versions-of-the-app)
    - [License -  MIT](#license---mit)

### How to Use

>Login with your Google account. Click Add Expense to Enter expenses. Review, Sort, Filter, and Tally expense records in the Dashboard. Click any record in the Dashboard to read Notes, Modify and/or Delete it on the Edit's Page.

### Deployment

 >The **[expense-manager](https://expense-manager3.herokuapp.com/ "expense-manager")** has been deployed to a Heroku Dyno and can be used by following the link. (Note: *Resting Dyno's can often take 10 to 15 seconds to spin up on initial load and are not indicative of a sites true load speed.*)

### Screenshots of this Project

![expense-manager](https://raw.github.com/captnwalker/expense-manager/master/screenshots/screenshot1.png "expense-manager")

![expense-manager](https://raw.github.com/captnwalker/expense-manager/master/screenshots/screenshot2.gif "expense-manager")

![expense-manager](https://raw.github.com/captnwalker/expense-manager/master/screenshots/screenshot5.jpg "expense-manager")

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
3. Restore production files by running `yarn run build:prod`
4. Start local server by running `yarn run dev-server`
5. You are now in development mode on localhost:8080
6. Deploy to host of your choice: ex.; Heroku
7. Connect to a database and setup authentication of your choice: ex.; Firebase
8. Create Firebase DB and authentication per Firebase documentation
9. Add *your* API keys to *your* local project
10. Set Firebase API keys in Heroku from command line: `heroku config:set <list all 6 keys copied from your .env file and separated by a space>`
11. You should now be able to login to your deployed site

***Note:*** *If you encounter a `FIREBASE FATAL ERROR` when you attempt to launch your app, please refer to the repo [Firebase-Fatal-Error-Heroku-Deploy-Solved](https://github.com/captnwalker/Firebase-Fatal-Error-Heroku-Deploy-Solved "Firebase-Fatal-Error-Heroku-Deploy-Solved") for a possible solution.*

### Companion Versions of the App

This app was built in React to be easily scalable. Other versions of this app can be found on the following repo's.

* [Expense-Manager](https://github.com/captnwalker/expense-manager "Expense-Manager")
* [Personal-Expense-Manager](https://github.com/captnwalker/personal-expense-manager "Personal-Expense-Manager")
* [Reservationist-2](https://github.com/captnwalker/reservationist-2 "Reservationist-2")
* [General-Ledger](https://github.com/captnwalker/general-ledger "General-Ledger")

---

#### License -  MIT