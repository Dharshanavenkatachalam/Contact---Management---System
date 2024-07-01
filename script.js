

let contacts = [];


function openForm() {
  document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
  document.getElementById("contactForm").style.display = "none";
}

function saveContact() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const phonePattern = /^\d{10}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!name){
    alert("Please enter a name.");
    return;
  }
  if(!phonePattern.test(number)){
    phoneError.textContent = "Please enter a valid phone nnumber.";
    return;
  }else{
    phoneError.textContent = "";
  }
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    return;
  } else {
    emailError.textContent = "";
  }

    const contact = { name, number,email};
    contacts.push(contact);
    displayContacts();
    clearForm();
    closeForm();
  } 


function displayContacts() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";
  
    contacts.forEach((contact, index) => {
      const contactItem = document.createElement("div");
      contactItem.className = "contact-item saved-contact"; // Add the "saved-contact" class
      contactItem.innerHTML = `<strong>${contact.name}</strong> - ${contact.number} - ${contact.email}
                                <button onclick="editContact(${index})">Edit</button>
                                <button onclick="deleteContact(${index})">Delete</button>`;
      contactList.appendChild(contactItem);
    });
  }

  
function editContact(index) {
  const contact = contacts[index];
  document.getElementById("name").value = contact.name;
  document.getElementById("number").value = contact.number;
  document.getElementById("email").value = contact.email;
  contacts.splice(index, 1);
  displayContacts();
  openForm();
}

function deleteContact(index) {
  contacts.splice(index, 1);
  displayContacts();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("email").value = "";
}

// Initial display
displayContacts();