// Data Module

// Employee class for use in array of employees
class Employee {
  constructor (name, surname, position, separationDate) {
    this.name = name
    this.surname = surname
    this.position = position
    this.separationDate = separationDate
  }
}
// Array of employee objects
export const employeeObjs = [
  new Employee('Bill', 'Smith', 'Manager', new Date('2017-09-20')),
  new Employee('Ted', 'Jones', 'HR Assistant', new Date('2011-06-13')),
  new Employee('John', 'Johnson', 'Sales', new Date('2020-01-20')),
  new Employee('Sally', 'Weber', 'Admin Assistant', new Date('2019-03-10')),
  new Employee('Jodie', 'Ant', 'Sales', new Date('2006-11-10'))
]

export function printTable (employeeObjs) {
  console.table(employeeObjs)
}
