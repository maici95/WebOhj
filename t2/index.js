

/*

Tee puhelinluettelo.
Puhelinluetteloon lisäät taulukkoon objekteja (eli henkilöitä joilla nimi ja puhelinnumero).
Käyttäjältä kysytään henkilön nimi ja puhelinnumero.
Henkilön poisto -toimintoa ei tarvitse tässä versiossa olla.

Tee hakutoiminto jossa haet nimen perusteella puhelinnumeron.

Tee puhelinnumeron haku funktioksi.
Funktion parametrina on taulukko josta haetaan ja henkilön nimi.
Funktio palauttaa puhelinnumeron.
Kutsu funktiota.

Käyttöliittymän voit tehdä millaiseksi haluat (komentokehoite -pohjainen kuitenkin)

*/

const readline = require('readline-sync');

// Phonebook class
class Phonebook {
    constructor() {
        // Test data
        this.contacts = [
            {name:'maici', phone:'24332'},
            {name:'sepi', phone:'111'},
        ];
    }

    // Add new contact
    // Ask contact's name and phonenumber -> Create new contact and push it to contacts array
    // No error handling
    add() {
        const name = readline.question('type person\'s name.\n');
        const phone = readline.question('type person\'s phonenumber\n');
        const contact = new Contact(name, phone);
        this.contacts.push(contact);
        console.log('person contact details added.');
    }

    // List contacts
    show() {
        console.log('# Phonebook contacts #');
        for (let contact of this.contacts) {
            console.log(contact.name +' ... '+ contact.phone);
        }
    }

    // Find phonenumber by name
    getPhoneByName(name) {
        const found = this.contacts.find(item => item.name === name);

        if (found) {
            console.log('phonenumber: ' + found.phone);
        } else {
            console.log('no contact found');
        }
    }
}

// Contact class
class Contact {
    constructor(name, phone) {
        this.name = name || 'no name';
        this.phone = phone || 'no phone';
    }
}


function main() {
    action = '';
    const phonebook = new Phonebook();

    while (action !== 'exit') {
        console.log('-------');

        action = readline.question('what would you like to do?\n');
        if (action === 'exit') break;

        console.log('-------');

        switch (action) {
            case 'add':
                phonebook.add();
                break;
            case 'show':
                phonebook.show();
                break;
            case 'find':
                const name = readline.question('type name of contact...\n');
                phonebook.getPhoneByName(name);
                break;
            case 'help':
                console.log('add : add new contact');
                console.log('show: show phonebook contacts');
                console.log('help: show commands');
                console.log('find: find number by name');
                console.log('exit: exit application');
                break;
            default:
                break;
        }
    }
}

main();

