
import { useEffect, useState } from 'react'
import { InputGroup, Container, FormControl, Form, Button } from 'react-bootstrap'
export default function ContactForm(props) {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    useEffect(() => {
        if(props.contact){
            setFirstName(props.contact.fName)
            setLastName(props.contact.lName)
            setEmail(props.contact.email)
            setPhone(props.contact.phone)
        }
    }, [props.contact])

    const _buildContactAndSubmit = () => {
        var contact = {
            fName : firstName,
            lName : lastName,
            email : email,
            phone : phone,
            _id : props.contact._id
        }
        props.submit(contact)
    }

    return (
        <Container>

            <Form.Label>First Name</Form.Label>
            <InputGroup className='mb-3'>
                <FormControl
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    placeHolder='First Name'
                    aria-label='First Name'
                />
            </InputGroup>

            <Form.Label>Last Name</Form.Label>
            <InputGroup className='mb-3'>
                <FormControl
                    value={lastName}
                    placeHolder='Last Name'
                    aria-label='Last Name'
                    aria-describedby='lastNameLbl'
                />
            </InputGroup>

            <Form.Label>Email</Form.Label>
            <InputGroup className='mb-3'>
                <FormControl
                    value={email}
                    placeHolder='example@exampl.com'
                    aria-label='Email'
                    aria-describedby='emailLbl'
                />
            </InputGroup>

            <Form.Label>Phone Number</Form.Label>
            <InputGroup className='mb-3'>
                <FormControl
                    value={phone}
                    placeHolder='xxx-xxx-xxxx'
                    aria-label='Phone Number'
                    aria-describedby='phoneLbl'
                />
            </InputGroup>
            <Button variant="primary" onClick={_buildContactAndSubmit}>Submit</Button>
        </Container>
    )
}