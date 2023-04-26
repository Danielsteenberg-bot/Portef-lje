const formular = document.querySelector('.form-index');
const formContainer = document.querySelector('.form-index');
const contactWrapper = document.querySelector('.header-container');
const contactTXT = document.querySelector('.contact-container');
const responseDONE = document.querySelector('.response');
const checkMARK = document.querySelector('.check-icon');


const sendToMail = (e) => {

    e.preventDefault()


    let formInputs = formular.elements;

    console.log(formInputs)



        let formData = {
            'name' : formInputs['name'].value,
            'email' : formInputs['email'].value,
            'message' : formInputs['message'].value
         }

        fetch('https://formspree.io/f/mbjbyjvl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((response) => {
    
            if(response.ok){
                formContainer.classList.add('submitDONE');
                contactTXT.classList.add('hidden');
                contactWrapper.style.display = "none";
                responseDONE.classList.add('responsePLAY');
                checkMARK.classList.add('.check-mark-animation')
            }
        });
    
}

formular.addEventListener("submit", sendToMail)