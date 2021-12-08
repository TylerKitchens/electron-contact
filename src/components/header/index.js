import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '@images/phalanx_logo.webp'
import { useState } from 'react'
export default function Headers(props) {
    const [query, setQuery] = useState('')

    return (
        <Row className='p-4 my-auto' >
            <Col sm={3}>
                <img alt='phalanx logo' src={logo} className='img-fluid' />

            </Col>
            <Col sm={6} className='my-auto'>
                <h1 className='align-middle text-center font-weight-bold'>Contact Management System</h1>
            </Col>
            <Col sm={3} className='my-auto' >
                <Row>
                    <Col sm='8' className='p-0'>
                        <input onChange={e => setQuery(e.target.value)} className='form-control m-0' placeholder='Search...' />
                    </Col>
                    <Col sm='2' className=''>
                        <button onClick={() => props.searchSubmit(query)} className='btn btn-secondary m-0 text-white'>Submit</button>
                    </Col>

                </Row>
            </Col>

        </Row>
    )
}