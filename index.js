const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const HTML = require('./lib/html');

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
            _mgr = {
                mgr_id: mgr.id,
                mgr_name: mgr.name,
                mgr_email: mgr.email,
                mgr_officeNumber: mgr.officeNumber,
                mgr_role: mgr.role
            }
            storage.push(_mgr);
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
            engineer.role = engineer.getRole();
            _eng = {
                eng_name: engineer.name,
                eng_id: engineer.id,
                eng_email: engineer.email,
                eng_github: engineer.github,
                eng_role:engineer.role
            }
            storage.push(_eng);
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
            intern.role = intern.getRole();
            _int = {
                int_name: intern.name,
                int_id:intern.id,
                int_email:intern.email,
                int_school: intern.school,
                int_role:intern.role
            }
            storage.push(_int);
            return storage;
        })

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


