import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import Avatar from '@components/avatar'

function App() {

  useEffect(() => {
    //When user clicks new contact in menu
    window.ipcRenderer.on('new-contact', (e, msg) => {
      alert(msg)
    })
    

  }, [])
  return (
    <div className="App">
      <Container fluid>

        <Table striped hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Avatar fName='Tyler' lName='Kitchens' /> Tyler Kitchens
              </td>
              <td>
                <a href="mailto:tylerktichens23@gmail.com">tylerkitchens23@gmail.com</a>
              </td>
              <td>
                <a href="tel:+17703375352">7703375352</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>

    </div>
  );
}

export default App;
