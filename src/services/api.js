
export const API = {

    async getContacts(){
        const contacts = await window.ipcRenderer.invoke('getContacts', 'test')
        return JSON.parse(contacts)
    },

    async updateContact(contact){
        const updatedContact = await window.ipcRenderer.invoke('updateContact', JSON.stringify(contact))
        return JSON.parse(updatedContact)
    },
    async createContact(contact){
        const createdContact = await window.ipcRenderer.invoke('createContact', JSON.stringify(contact))
        return JSON.parse(createdContact)
    },
    async deleteContact(contact){
        const deletedContact = await window.ipcRenderer.invoke('deleteContact', JSON.stringify(contact))
        return JSON.parse(deletedContact)
    },
}