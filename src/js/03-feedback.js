
const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const data = {};

const savedData = JSON.parse(localStorage.getItem("feedback-form-state")); 

email.value = savedData == null ? '' : savedData.email;
message.value = savedData == null ? '' : savedData.message;

form.addEventListener("input", () => {
    data.email = email.value;
    data.message = message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
});

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    data.email = email.value;
    data.message = message.value;
    email.value="";
    message.value="";
    console.log(data);
    localStorage.clear("feedback-form-state");
})



