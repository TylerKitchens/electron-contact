import './index.css'
import { Col, Row } from 'react-bootstrap'
import { AVATAR_COLORS } from '@constants/avatarColors'
export default function Avatar(props) {

  const _setBgColor = () => {
    var color = AVATAR_COLORS[props.index % AVATAR_COLORS.length]
    return { backgroundColor: color }
  }

  return (
    <Row className="align-items-center justify-content-center">
      <Col md={2} >
        <div style={_setBgColor()} className='circle text-white text-center align-self-center p-2 m-2'>{props.fName.charAt(0)}{props.lName.charAt(0)}</div>
      </Col>
      <Col md={4} className='justify-content-center align-items-center ms-2'>
        <span>{props.fName} {props.lName}</span>
      </Col>
    </Row>

  )
}