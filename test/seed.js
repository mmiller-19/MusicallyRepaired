const { faker } = require('@faker-js/faker');
const db = require('../config/connection');
const Account = require('../models/account');
const Customer = require('../models/customer');
const WorkOrder = require('../models/workOrder');
const RepairShop = require('../models/repairShop');

async function seedDb() {
    AccountSeed();
    CustomerSeed();
    WorkOrderSeed();
    RepairShopSeed();
}

function AccountSeed() {
    try {
        db.once('open', async () => {
            Account.deleteMany({});
            
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
            Customer.deleteMany({});
            
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

function WorkOrderSeed() {
    try {
        db.once('open', async () => {
            WorkOrder.deleteMany({})

            let workOrderData = [];

            for (let i = 0; i < 10; i++) {
                let newWorkOrder = {
                    repairDate: faker.date.past(),
                    dateCompleted: faker.date.recent(),
                    repairReason: faker.hacker.noun(),
                    repairStatus: faker.datatype.boolean(),
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
            RepairShop.deleteMany({});

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

seedDb();