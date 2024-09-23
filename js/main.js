const myBalance = GetTextFieldValueById('my-balance')
const donation = GetTextFieldValueById('donation')
const myDonation = GetInputFieldValueById('my-donation')



document.getElementById('donate-now').addEventListener('click',function(){
    const myBalance = GetTextFieldValueById('my-balance')
    const donation = GetTextFieldValueById('donation')
    const myDonation = GetInputFieldValueById('my-donation')
    console.log(myBalance,donation,myDonation)


if (isNaN(myDonation) || (myDonation < 0) || myDonation > myBalance){
    alert('Invalid Amount')
}




})