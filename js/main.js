const myBalance = GetTextFieldValueById('my-balance')
const donation = GetTextFieldValueById('donation')
const myDonation = GetInputFieldValueById('my-donation')



document.getElementById('donate-now').addEventListener('click',function(){
    const myBalance = GetTextFieldValueById('my-balance')
    const donation = GetTextFieldValueById('donation')
    const myDonation = GetInputFieldValueById('my-donation')
    console.log(myBalance,donation,myDonation)


if (isNaN(myDonation) || (myDonation <= 0) || myDonation > myBalance || myDonation ===''){
    alert('Invalid Amount')
    return
}

const totalDonation = donation + myDonation
document.getElementById('donation').innerText = totalDonation.toFixed(2);

const myNewBalance = myBalance - myDonation
document.getElementById('my-balance').innerText = myNewBalance.toFixed(2); 

document.getElementById('my_modal_1').showModal();



})