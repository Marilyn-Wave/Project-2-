const body = document.body
const formElement = document.createElement('.forma')
const outMess = document.createElement('.err')

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const nume = formData.get('first_name');
    const prenume = formData.get('last_name');
    const parola = formData.get('pass');
    if(nume.length >16 && nume.length < 4){
        outMess.textContent = 'Eroare!! Numele trebuie sa contina intre 4 si 16 caractere '
    }else if(prenume.length >16 && prenume.length < 4){
        outMess.textContent = 'Eroare!! Prenumele trebuie sa contina intre 4 si 16 caractere '
    }else if(parola.length >16 && parola.length < 4){
        outMess.textContent = 'Eroare!! Numele trebuie sa contina intre 4 si 16 caractere '
    }else{
        outMess.textContent = 'Registration successful'
    }
});