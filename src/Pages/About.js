import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Linraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey="first">
                  <img src='data:image/jpeg;base64,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'/>
                  <p>Hello! It is image in first pane</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src='https://s3-alpha.figma.com/hub/file/1395814253/17f1d66e-f7d2-409b-9723-40213cf3e9ef-cover.png'/>
                  <p>Hello! It is image in second pane</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUUbEOnU3c--EZRkcxUsokmqfZPm87lazwQ&usqp=CAU'/>
                  <p>Hello! It is image in third pane</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr63CiT2Oe8xFSFkyAQWk5otx3uwzcaSIfbA&usqp=CAU'/>
                  <p>Hello! It is image in fourth pane</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvq6FF59ViVBTOzA88Bt3uh9Sn1U0hcmh-zA&usqp=CAU'/>
                  <p>Hello! It is image in fifth pane</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
