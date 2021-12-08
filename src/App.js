import { useEffect, useState } from 'react';

import './App.css';
import { Container, Table, Modal, Button, Spinner } from 'react-bootstrap'

import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import Avatar from '@components/avatar'
import Header from '@components/header'
import ContactForm from '@components/contactform'

import { ContactUtil } from './utils/contactUtil';
import { API } from './services/api'

function App() {

  const [editIndex, setEditIndex] = useState(-1)
  const [shownData, setShownData] = useState([])
  const [initialData, setInitialData] = useState([])
  const [loading, setLoading] = useState(true)

  const [showModal, setShowModal] = useState(false)
  const [selectedContact, setSelectedContact] = useState(null)
  useEffect(() => {
    //When user clicks new contact in menu
    window.ipcRenderer.on('new-contact', (e, msg) => {
      alert(msg)
    })

    _getData()


  }, [])

  const _getData = async () => {
    setLoading(true)
    const tempData = await API.getContacts()
    tempData.sort((a, b) => a.lName > b.lName ? 1 : -1)
    setInitialData(tempData)
    setShownData(tempData)
    setLoading(false)

  }





  const _searchSubmit = (filterStr) => {
    var tempData = [...initialData]
    tempData = initialData.filter(contact => {
      return (ContactUtil.contactToString(contact).indexOf(filterStr.toLowerCase()) !== -1)
    })
    setShownData(tempData)
  }

  const _toggleShowPencil = (index) => {
    setEditIndex(index)
  }

  const _handleEditClick = (contact) => {
    setSelectedContact(contact)
    setShowModal(true)
  }

  const _handleSubmitEdit = async (contact) => {
    await API.updateContact(contact)
    _getData()
    setShowModal(false)
    //
  }

  const _handleDeleteClick = (contact) => {
    if (window.confirm(`Are you sure you want to delete ${contact.fName} ${contact.lName}'s contact ?`)) {
      //TODO: handle API delete
    }
  }

  return (
    <div className="App">
      <Container fluid>

        <Header searchSubmit={_searchSubmit} />

        <Table striped hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>   </th>
            </tr>
          </thead>

          {!loading && <tbody>
            {shownData.map((item, index) => {
              return (
                <tr key={index} onMouseEnter={() => _toggleShowPencil(index)} onMouseLeave={() => setEditIndex(index)}>

                  <td className='text-start'>
                    <Avatar index={index} fName={item.fName} lName={item.lName} />
                  </td>

                  <td className='align-middle'>
                    <a className='align-middle' href={`mailto:${item.email}`}>{item.email}</a>
                  </td>

                  <td className='align-middle'>
                    <a href={`tel:+1${item.phone}`}>{item.phone}</a>
                  </td>

                  <td className='align-middle'>
                    {editIndex === index &&
                      <>
                        <button onClick={() => _handleEditClick(item)} className='btn p-0 m-0 me-4'>
                          <FaPencilAlt />
                        </button>
                        <button onClick={() => _handleDeleteClick(item)} className='btn p-0 m-0'>
                          <FaTrash />
                        </button>
                      </>
                    }
                    {loading && <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                  </td>
                </tr>
              )
            })}
          </tbody>}

        </Table>
        <p className="text-center">{shownData.length} Results</p>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm contact={selectedContact} submit={_handleSubmitEdit}/>
          </Modal.Body>
        </Modal>

      </Container>

    </div>
  );
}

export default App;
