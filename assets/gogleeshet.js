const scriptURL=''

const form = document.forms['contact-forms']

form.addEventListener('submit', e=> {
    e.preventDefault()
    fetch(scriptURL, {method: 'post',body: new FormData(form)})
    .then(response  => alert("Thank you! your form is submitted succesfully."))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error !',error.message))
    
})