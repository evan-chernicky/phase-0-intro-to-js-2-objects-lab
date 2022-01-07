// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress : "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }

  const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Bob");

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  
    return obj;
  }

  const test = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Bob");

  function deleteFromEmployeeByKey(obj, key) {
    return {
        ...obj[key]
    }
  }

  const completelyNewEmployee = deleteFromEmployeeByKey(employee, "name",);

  function destructivelyDeleteFromEmployeeByKey(obj, key) {

    delete obj[key];

    return obj

  }

 destructivelyDeleteFromEmployeeByKey(employee, "name");