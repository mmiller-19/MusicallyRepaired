const { faker } = require('@faker-js/faker');
const db = require('../config/connection');
const Account = require('../models/account');
const Customer = require('../models/customer');
const Instrument = require('../models/instrument');
const Message = require('../models/message');
const Note = require('../models/notes');

async function seedDb() {
    AccountSeed();
    CustomerSeed();
    InstrumentSeed();
    MessageSeed();
    NoteSeed();
}

function AccountSeed() {
    try {
        db.once('open', async () => {
            await Account.deleteMany({});
            
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
            await Customer.deleteMany({});
            
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
            await Instrument.deleteMany({});
            
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

function MessageSeed() {
    try {
        db.once('open', async () => {
            await Message.deleteMany({});
            
            let messageData = [];
        
            for (let i = 0; i < 10; i++) {
                let newMessage = {
                    creationDate: faker.date.past(),
                    direction: faker.address.direction(),
                    content: faker.lorem.paragraph(),
                    senderId: faker.database.mongodbObjectId()
                }
                messageData.push(newMessage);
            };
        
            Message.collection.insertMany(messageData);
        
            console.log("Message seeded!");
        });
    } 
    catch (error) 
    {
        console.log(error);    
    }
}

function NoteSeed() {
    try {
        db.once('open', async () => {
            await Note.deleteMany({});
            
            let noteData = [];
        
            for (let i = 0; i < 10; i++) {
                let newNote = {
                    creationDate: faker.date.past(),
                    creatorId: faker.database.mongodbObjectId(),
                    content: faker.lorem.paragraph(),
                }
                noteData.push(newNote);
            };
        
            Note.collection.insertMany(noteData);
        
            console.log("Note seeded!");
        });
    } 
    catch (error) 
    {
        console.log(error);    
    }
}

seedDb();