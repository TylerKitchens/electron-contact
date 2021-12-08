const dbModels = require('../models')

//Retrieve All Contact Records
exports.getAllContacts = async () => {
    const contacts =  await dbModels.Contact.find({}) 
    return JSON.stringify(contacts)
}

//Find contact and update it 
exports.updateContact = async contact => {
    const updatedContact = await dbModels.Contact.findByIdAndUpdate(contact._id, contact)
    console.log(updatedContact)
    return JSON.stringify(updatedContact)
}

exports.createContact = async contact => {
    const newContact = new dbModels.Contact(contact).save() 
    return JSON.stringify(newContact)
}

exports.deleteContact = async contact => {
    const deleteContact = dbModels.Contact.findByIdAndDelete(contact._id)
    return JSON.stringify(deleteContact)
}