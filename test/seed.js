const { faker } = require('@faker-js/faker');
const db = require('../config/connection');
const Account = require('../models/account');
const Customer = require('../models/customer');
const Instrument = require('../models/instrument');

async function seedDb() {
    AccountSeed();
    CustomerSeed();
    InstrumentSeed();
}

function AccountSeed() {
    try {
        db.once('open', async () => {
            Account.collection.drop();
            
            let accountData = [];
        
            for (let i = 0; i < 10; i++) {
                let newAccount = {
                    type: faker.lorem.word(),
                    email: faker.internet.email(),
                    password: faker.internet.password()
                }
                accountData.push(newAccount);
            };
        
            Account.collection.insertMany(accountData);
        
            console.log("Account seeded!");
        });
    } 
    catch (error)
    {
        console.log(error)
    }
}

function CustomerSeed() {
    try {
        db.once('open', async () => {
            Customer.collection.drop();
            
            let customerData = [];
        
            for (let i = 0; i < 10; i++) {
                let newCustomer = {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    phoneNumber: faker.phone.number()
                }
                customerData.push(newCustomer);
            };
        
            Customer.collection.insertMany(customerData);
        
            console.log("Customer seeded!");
        });
    } 
    catch (error) 
    {
        console.log(error);    
    }
}

function InstrumentSeed() {
    try {
        db.once('open', async () => {
            Instrument.collection.drop();
            
            let instrumentData = [];
        
            for (let i = 0; i < 10; i++) {
                let newInstrument = {
                    type: faker.word.adjective(),
                    make: faker.word.noun(),
                    model: faker.word.noun()
                }
                instrumentData.push(newInstrument);
            };
        
            Instrument.collection.insertMany(instrumentData);
        
            console.log("Instrument seeded!");
        });
    } 
    catch (error) 
    {
        console.log(error);    
    }
}

seedDb();