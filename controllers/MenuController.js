const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: 'list',
                name: 'mainMenuChoice',
                message: 'Please choose from an option below: ',
                choices: ['Add new contact', 'Exit', 'Get Date', 'Remind Me']
            }
        ];
        this.contacts = [];
    }

    main() {
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice) {
                case "Add new contact":
                    this.addContact();
                    break;
                case "Exit":
                    this.exit();
                case "Get Date":
                    this.getDate();
                    break;
                case "Remind Me":
                    this.remindMe();
                    break;
                default:
                    console.log("Invalid Input");
                    this.main();
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    clear() {
        console.log('\x1Bc');
    }

    addContact() {
        this.clear();
        console.log('addContact called');
        this.main();
    }

    getDate(){
        this.clear();
        var current = new Date();
        var today = current.getDate();
        var month = current.getMonth() + 1;
        var year = current.getFullYear();
        console.log(month + "/" + today + "/" + year);
        this.main();
    }

    getContactCount() {
        return this.contacts.length;
    }

    remindMe() {
        var quote = "Learning is a life-long pursuit";
        console.log(quote);
        return quote;

    }

    exit() {
        console.log('Thanks for using AddressBloc!');
        process.exit();
    }
}
