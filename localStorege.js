// DOM Elements
const form = document.getElementById("contactForm");
// const nameInput = document.querySelector('.inputName').value;
// const emailInput = document.querySelector('.inputEmail').value;
// const messageInput = document.querySelector('.inputMessage').value;
const sendBtn = document.getElementById('send')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  //Set Value And LocalStorage

  
  name = name.value;
  localStorage.setItem('name', name);

  email = email.value;
  localStorage.setItem('email', email);

  message = message.value;
  localStorage.setItem('message', message);

  
    alert('your message sent successful')
  
    //Set Value
  
});

function saveMessage (){
  
}





// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let namm= nameInput;
//   let email= emailInput;
//   let message=messageInput
//  localStorage.setItem('name', namm);

//    localStorage.setItem('email', email);

//     localStorage.setItem('message', message);


// });

//Now Start SendBtn
// sendBtn.addEventListener('click', (e) => {
 
//   //Set Value And LocalStorage
  
//   let inputName = localStorage.setItem('name', nameInput);
 


//   let inputEmail = localStorage.setItem('email', emailInput);

//   let inputMessage = localStorage.setItem('message', messageInput);

// });










// /* 
// {
//   name: '',
//   age: number,
//   roll: number
// }
// */

// const masseges = JSON.parse(localStorage.getItem("messages")) || [];

// const addmassege = (name, email, massege) => {
//   masseges.push({
//     name,
//     email,
//     massege,
//   });

//   localStorage.setItem("masseges", JSON.stringify(masseges));

//   return { name, email, massege };
// };

// const createContactElement = ({ name, email, massege }) => {
//   // Create elements
//   const contactDiv = document.createElement("div");
//   const contactName = document.createElement("h2");
//   const contactEmail = document.createElement("p");
//   const contactMessage = document.createElement("p");

//   // Fill the content
//   contactName.innerText =  name;
//   contactEmail.innerText =  email;
//   contactMessage.innerText = massege;

//   // Add to the DOM
//   contactDiv.append(contactName, contactEmail, contactMessage);
//   contactContainer.appendChild(contactDiv);

// //   contactContainer.style.display = masseges.length === 0 ? "none" : "flex";
// };

// // contactContainer.style.display = masseges.length === 0 ? "none" : "flex";

// masseges.forEach(createContactElement);

// contactForm.onsubmit = e => {
//   e.preventDefault();

//   const newmassage = addmassege(
//     nameInput.value,
//     emailInput.value,
//     massegeInput.value
//   );

//   createContactElement(newmassage);

//   nameInput.value = "";
//   emailInput.value = "";
//   massegeInput.value = "";
// };