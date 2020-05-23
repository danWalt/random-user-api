(function(){

const url = 'https://randomuser.me/api/'
const generate_button = document.getElementById('btn')
const first = document.getElementById('first');
const last = document.getElementById('last');
const street = document.getElementById('street');
const phone_id = document.getElementById('phone');
const email_id = document.getElementById('email');

generate_button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let person = xhr.response.results[0];
            let firstName = person.name.first;
            let lastName = person.name.last;
            let location = person.location.street.name;
            let city = person.location.city;
            let country = person.location.country;
            let phone = person.phone;
            let email = person.email;
            first.innerHTML = firstName;
            last.innerHTML = lastName;
            street.innerHTML = `${location} ${city}, ${country}`;
            phone_id.innerHTML = phone;
            email_id.innerHTML = email;

        }
    }

    xhr.open('GET', url);
    xhr.send();
})
})();
