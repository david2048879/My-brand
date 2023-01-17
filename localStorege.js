
//get Element

const contactForm = document.getElementById("contactForm");
const nameInput = contactForm["name"];
const emailInput = contactForm["email"];
const messageInput = contactForm["message"];



const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const addContact = (name, email, message) => {
  contacts.push({
    name,
    email,
    message,
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));

  return { name, email, message };
};


contactForm.onsubmit = e => {
  e.preventDefault();

  const newContact = addContact(
    nameInput.value,
    emailInput.value,
    messageInput.value
  );

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
};
