
export  const ContactUtil = {
    
    contactToString(contact){
        return contact.fName.toLowerCase() + contact.lName.toLowerCase() + contact.email.toLowerCase() + contact.phone.toLowerCase()
    }
}