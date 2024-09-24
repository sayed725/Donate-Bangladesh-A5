// Donate card -1 
document.getElementById('donate-now-1').addEventListener('click', function () {
    const myBalance = GetTextFieldValueById('my-balance')
    const donation = GetTextFieldValueById('donation-1')
    const myDonation = GetInputFieldValueById('my-donation-1')
    console.log(myBalance, donation, myDonation)


    if (isNaN(myDonation) || (myDonation <= 0) || myDonation > myBalance || myDonation === '') {
        alert('Invalid Amount')
        return
    }

    const totalDonation = donation + myDonation
    document.getElementById('donation-1').innerText = totalDonation.toFixed(2);

    const myNewBalance = myBalance - myDonation
    document.getElementById('my-balance').innerText = myNewBalance.toFixed(2);

    document.getElementById('my_modal_1').showModal();


    const historySection = document.createElement('div');
    historySection.className = 'text-start px-10 py-6 border-2 border-slate-200 rounded-lg mt-5'
    historySection.innerHTML = `

<h5 class="title font-bold mb-4">${myDonation} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h5>
 <p class="normal bg-slate-100 px-1 py-1">${new Date().toDateString()} ${new Date().toTimeString()} </p>
`

    document.getElementById('history-section').appendChild(historySection);
})

// Donate card -2 
document.getElementById('donate-now-2').addEventListener('click', function () {
    const myBalance = GetTextFieldValueById('my-balance')
    const donation = GetTextFieldValueById('donation-2')
    const myDonation = GetInputFieldValueById('my-donation-2')
    console.log(myBalance, donation, myDonation)


    if (isNaN(myDonation) || (myDonation <= 0) || myDonation > myBalance || myDonation === '') {
        alert('Invalid Amount')
        return
    }

    const totalDonation = donation + myDonation
    document.getElementById('donation-2').innerText = totalDonation.toFixed(2);

    const myNewBalance = myBalance - myDonation
    document.getElementById('my-balance').innerText = myNewBalance.toFixed(2);

    document.getElementById('my_modal_2').showModal();


    const historySection = document.createElement('div');
    historySection.className = 'text-start px-10 py-6 border-2 border-slate-200 rounded-lg mt-5'
    historySection.innerHTML = `

<h5 class="title font-bold mb-4">${myDonation} Taka is Donated for Flood Relief in Feni, Bangladesh</h5>
 <p class="normal bg-slate-100 px-1 py-1">${new Date().toDateString()} ${new Date().toTimeString()} </p>
`

    document.getElementById('history-section').appendChild(historySection);
})

// Donate card -3 
document.getElementById('donate-now-3').addEventListener('click', function () {
    const myBalance = GetTextFieldValueById('my-balance')
    const donation = GetTextFieldValueById('donation-3')
    const myDonation = GetInputFieldValueById('my-donation-3')
    console.log(myBalance, donation, myDonation)


    if (isNaN(myDonation) || (myDonation <= 0) || myDonation > myBalance || myDonation === '') {
        alert('Invalid Amount')
        return
    }

    const totalDonation = donation + myDonation
    document.getElementById('donation-3').innerText = totalDonation.toFixed(2);

    const myNewBalance = myBalance - myDonation
    document.getElementById('my-balance').innerText = myNewBalance.toFixed(2);

    document.getElementById('my_modal_3').showModal();


    const historySection = document.createElement('div');
    historySection.className = 'text-start px-10 py-6 border-2 border-slate-200 rounded-lg mt-5'
    historySection.innerHTML = `

<h5 class="title font-bold mb-4">${myDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h5>
 <p class="normal bg-slate-100 px-1 py-1">${new Date().toDateString()} ${new Date().toTimeString()} </p>
`

    document.getElementById('history-section').appendChild(historySection);
})
