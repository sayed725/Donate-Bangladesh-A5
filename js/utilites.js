function GetInputFieldValueById(id) {
    const inputNumber = parseFloat(document.getElementById(id).value);
    return inputNumber;
}




function GetTextFieldValueById(id) {
    const textNumber = parseFloat(document.getElementById(id).value);
    return textNumber;
}


















function showSectionById(id) {

    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}



function showButtonById(id) {

    document.getElementById('show-donate-section').classList.remove('bg-lime-300')
    document.getElementById('show-history-section').classList.remove('bg-lime-300')

    document.getElementById(id).classList.add('bg-lime-300')
}