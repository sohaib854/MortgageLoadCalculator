//function for computing payment for every month
function calculateLoan(){

    //gets the value of input field in html file with id 'amount' and store in local variable also named as 'amount'
    let amount = document.getElementById('amount').value;

    //gets the value of input field in html file with id 'interest_rate' and store in local variable also named as 'interest_rate'
    let interest_rate = document.getElementById('interest_rate').value;

    //gets the value of input field in html file with id 'months' and store in local variable also named as 'months'
    let months = document.getElementById('months').value;

    //Calculating interest and payment per month
    //.toFixed is method for only showing 3 digits after decimal point
    let interest = (amount * (interest_rate * .01)) / months ;
    let payment = ((amount / months) + interest).toFixed(3);
    
    //Sends the value of payment to input field in html file with id 'payment'
    document.getElementById('payment').innerHTML="Monthly payment = $"+payment;

}