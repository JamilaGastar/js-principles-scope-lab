// Write your solution in this file!
var customerName = 'bob';
console.log(customerName);

function upperCaseCustomerName() {
    console.log(customerName);
    customerName = customerName.toUpperCase()
    return customerName.toUpperCase(); 
}

const leastFavoriteCustomer = 'Karen';
console.log(leastFavoriteCustomer);

function changeLeastFavoriteCustomer() {
    console.log(leastFavoriteCustomer);
    leastFavoriteCustomer = 'George';
    return leastFavoriteCustomer;
}

console.log (changeLeastFavoriteCustomer());




    

