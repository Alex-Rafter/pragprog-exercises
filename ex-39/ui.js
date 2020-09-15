// Import Modules
import {
  employeeObjs,
  printTable,
  mainSortAndPrint
} from './sort-records-data.js'
import inquirer from 'inquirer'

// Initial text to console, with table and instructions to user
printTable(employeeObjs)

inquirer
  .prompt([
    {
      type: 'list',
      choices: ['separationDate', 'name', 'surname', 'position'],
      name: 'sortVal',
      message: `      
        -------------------------------------------------------------------

        Above is a table of employees. 
        You can sort the table. 

                      Select an option below and press enter.

        -------------------------------------------------------------------

        `
    }
  ])
  // Table sorted by user choice, or error printed to console
  .then((answers) => {
    mainSortAndPrint(answers.sortVal)
  })
// Inquirer :END
