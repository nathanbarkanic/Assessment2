///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((acc, cur) => {
    return acc + cur.price;
}, 0);
console.log(summedPrice)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    const cartTotalTax = cartTotal + (cartTotal * tax);
    const finalPrice = cartTotalTax - couponValue;
    return finalPrice;
}
console.log(calcFinalPrice(26.97, 10.00, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    
My customer object with have the following properties:

firstName : This property will store the first name of the customer. 
It is a string. I chose a string value due to being made up by alphabetical characters. 
It is neceassary for order information and processing and payment.

lastName: This property will store the last name of the customer. 
This property is also a string value because it holds alphabetical characters.
Like the first name this will give me needed information about the customer for order processing and payment.

cardNum: This property will store the debit or credit card of the customer.
This is a string property since it will contain both numbers and symbols such as a dash.
This is necassary to process the payment information while used in conjunction with the above two properties.

cusTicket: This property stores the balance of the customer ticket final price, after tax.
This datatype of this property is a number with a decimal point, so that it can acurately show the customer balance.
This step processess payment information for the customer transaction.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    firstName: "Nathan",
    lastName: "Barkanic",
    cardNum: "111-2222-333-444",
    custTicket: 18.58
}
console.log(customer)