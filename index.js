const email=document.getElementById("email");
const Name=document.getElementById("name");
const messages=document.getElementById("text");
const submit=document.getElementById("submit");
submit.addEventListener("click",function(e){
e.preventDefault();


const emailValue=email.value ;
const NameValue=Name.value;
const messagesValue=messages.value;
const templateParams = {
    Name: NameValue,
    email: emailValue,
    messages:messagesValue,
};


if(NameValue && emailValue && messagesValue){
    emailjs.send("service_test", "template_8666ncx", templateParams, "YKYWwUoP1MIOBtGUo");
}
console.log(emailValue,subjectValue,messagesValue);
})
