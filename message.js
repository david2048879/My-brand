const retrive = document.getElementById('masseges');



let name = localStorage.getItem('name');
let email = localStorage.getItem('email');
let message= localStorage.getItem('message');

console.log(name);
console.log(email);
console.log(message);

  const msg = document.createElement('div')
  msg.className='msg'
  retrive.appendChild(msg)

  const contactName = document.createElement("h1");
  const contactEmail = document.createElement("h1");
  const contactMessage = document.createElement("h1");

  // Fill the content
  contactName.innerText = 'Name: ' +  name;
  contactEmail.innerText = 'Email: ' + email;
  contactMessage.innerText = 'Message: ' + message;

  // Add to the DOM
msg.appendChild(contactName);
msg.appendChild(contactEmail);
msg.appendChild(contactMessage);
  