// Logic Module
import { employeeObjs } from './sort-records-data.js'

export function mainSortAndPrint (key) {
  // Sort objects in array dynamic key / values
  const comparisionSelector = (arr, key) => {
    if (key !== 'separationDate') {
      return arr.sort((a, b) => a[key].localeCompare(b[key]))
    } else {
      return arr.sort((a, b) => a[key] - b[key])
    }
  }

  // Create a new array of objects, sorted using comparison function
  const sortedArrOfObjs = comparisionSelector(employeeObjs, key)

  // Log results of sort in a table format
  console.table(sortedArrOfObjs)
}
