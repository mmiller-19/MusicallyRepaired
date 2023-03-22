const { faker } = require('@faker-js/faker');
const db = require('../config/connection');
const Account = require('../models/account');
const Customer = require('../models/customer');
const Instrument = require('../models/instrument');
const Message = require('../models/message');
const Note = require('../models/notes');
const WorkOrder = require('../models/workOrder');
const RepairShop = require('../models/repairShop');
const Technician = require('../models/technician');

// Call Seed Methods
async function seedDb() {
    AccountSeed();
    CustomerSeed();
    InstrumentSeed();
    MessageSeed();
    NoteSeed();
    WorkOrderSeed();
    RepairShopSeed();
    TechnicianSeed();
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
                    phoneNumber: faker.phone.number(),
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
 
function WorkOrderSeed() {
    try {
        db.once('open', async () => {
            await WorkOrder.deleteMany({})

            let workOrderData = [];

            for (let i = 0; i < 10; i++) {
                let newWorkOrder = {
                    repairDate: faker.date.past(),
                    dateCompleted: faker.date.recent(),
                    repairReason: faker.hacker.noun(),
                    repairStatus: faker.datatype.boolean(),
                    customerId: faker.database.mongodbObjectId(),
                    repairShopId: faker.database.mongodbObjectId(),
                    instrumentId: faker.database.mongodbObjectId(),
                    technicianId: faker.database.mongodbObjectId(),
                    messageId: faker.database.mongodbObjectId(),
                    noteId: faker.database.mongodbObjectId(),
                }
                workOrderData.push(newWorkOrder);
            };

            WorkOrder.collection.insertMany(workOrderData);

            console.log("Work order seeded!");
        })
    } 
    catch (error) 
    {
        console.log(error); 
    }
}

function RepairShopSeed() {
    try {
        db.once('open', async () => {
            await RepairShop.deleteMany({});

            let repairShopData = [];

            for (let i = 0; i < 10; i++) {
                let newRepairShop = {
                    shopName: faker.company.name(),
                    address: faker.address.streetAddress(),
                    owner: faker.name.fullName(),
                    primaryContactName: faker.name.fullName(),
                    primaryContactPhone: faker.phone.number(),
                    primaryContactEmail: faker.internet.email(),
                }
                repairShopData.push(newRepairShop);
            };

            RepairShop.collection.insertMany(repairShopData);

            console.log("Repair shop seeded!");
        })
    } 
    catch (error) 
    {
        console.log(error); 
    }
}

function TechnicianSeed() {
    try {
        db.once('open', async () => {
            await Technician.deleteMany({});

            let technicianData = [];

            for (let i = 0; i < 10; i++) {
                let newTechnician = {
                    name: faker.name.fullName(),
                    accountId: faker.database.mongodbObjectId(),
                }
                technicianData.push(newTechnician);
            };

            Technician.collection.insertMany(technicianData);

            console.log("Technician seeded!");
        })
    } 
    catch (error) 
    {
        console.log(error); 
    }
}

seedDb();