const { faker } = require('@faker-js/faker');
const db = require('../config/connection');
const Account = require('../models/account');
const Customer = require('../models/customer');
const WorkOrder = require('../models/workOrder');
const RepairShop = require('../models/repairShop');
const Technician = require('../models/technician');

async function seedDb() {
    AccountSeed();
    CustomerSeed();
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
            await WorkOrder.deleteMany({})

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