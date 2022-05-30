const inquirer = require('inquirer');
// const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const storage = [];
const TeamMgr = mgrData => {
    console.clear();
    return inquirer.prompt([
        {
            type: 'text',
            name: 'MgrName',
            message: "Manager Name: "
        },

        {
            type: 'text',
            name: 'MgrId',
            message: "Manager Employee ID: "
        },
        {
            type: "text",
            name: "MgrEmail",
            message: "Manager email: "
        },
        {
            type: "text",
            name: "MgrOfficeNumber",
            message: "Office Number: "
        }

    ])
        .then(mgrData => {
            const mgr = new Manager();
            mgr.id = mgrData.MgrId;
            mgr.name = mgrData.MgrName;
            mgr.email = mgrData.MgrEmail;
            mgr.officeNumber = mgrData.MgrOfficeNumber;
            mgr.role = mgr.getRole();  
            storage.push(mgr);
            return storage;       
        })
      
}

const aEngineer = eData => {
    return inquirer.prompt([

        {
            type: 'text',
            name: 'eName',
            message: "Engineer name: "
        },
        {
            type: "text",
            name: "eID",
            message: "Engineer Employee ID: "
        },

        {
            type: 'text',
            name: 'eEmail',
            message: "Engineer email address:"
        },

        {
            type: 'text',
            name: 'eGitHub',
            message: "Engineer GitHub User Name: "
        }

    ])
        .then(eData => {
            const engineer = new Engineer();
            engineer.name = eData.eName;
            engineer.id = eData.eID;
            engineer.email = eData.eEmail;
            engineer.github = eData.eGitHub;    
            storage.push(engineer);
            return storage;       
        })
      
}

const aIntern = iData => {
    return inquirer.prompt([

        {
            type: 'text',
            name: 'iName',
            message: "Intern's name: "
        },
        {
            type: 'text',
            name: 'iId',
            message: "Intern Employee ID: "
        },
        {
            type: "text",
            name: "iEmail",
            message: "Intern's Email: "
        },

        {
            type: 'text',
            name: 'iSchool',
            message: "Intern School: "
        }

    ])
        .then(iData => {
            const intern = new Intern();
            intern.name = iData.iName;
            intern.id = iData.iId;
            intern.email = iData.iEmail;
            intern.school = iData.iSchool;
            storage.push(intern);
            return storage;
        })
     
}

sendToHTML = (object) => {
    console.log(storage);
}

TeamMgr()
.then(storage =>{
    aEngineer()
    .then(storage =>{
        aIntern()
        .then(storage =>{
            sendToHTML(storage)
        })
    })
})





