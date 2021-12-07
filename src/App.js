import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import Avatar from '@components/avatar'
function App() {
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
                tylerktichens23@Gmail.com
              </td>
              <td>
                7703375352
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>

    </div>
  );
}

export default App;
