import React, { Component } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
          <Row xs={3} md={3} className="g-4">
            <Col>
              <Card bg='warning'>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                   Developers text
                  </Card.Text>
                  <Button variant='primary'>About team</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card  border='warning'>
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                   Developers text
                  </Card.Text>
                  <Button variant='primary'>About team</Button>
                </Card.Body>
                <Card.Img variant="bottom" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </Card>
            </Col>
            <Col>
              <Card text='primary'>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                   Developers text
                  </Card.Text>
                  <Button variant='primary'>About team</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
            <Row xs={3} md={3} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>
                  <Card.Title>Card title21</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
