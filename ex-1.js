// Exercise #1: For Each Function

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];
function forEach(array,operation){
  for(let i = 0 ; i < array.length ; i++){
    operation(array[i],i);
  }
}
function operation(item , index){
  //  [index] = item + 5000;
   return newEmployeeSalaries[index] = item + 5000;
}
// Using `forEach` function here
forEach(employeeSalaries,operation);

console.log(newEmployeeSalaries); 
// [25005, 45000, 37000, 19500, 349000]
