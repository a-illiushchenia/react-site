import React, { Component } from 'react'
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row xs={2} md={2}>
          <Col md="9">
            <Card>
              <img
                width={150}
                height={150}
                className="mr-3"
                variant='left'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
              />
              <Card.Body>
                <h5>Blog post</h5>
                <p>
                  Blog text
                </p>
              </Card.Body>
            </Card>
            <Card>
              <img
                width={150}
                height={150}
                className="mr-3"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
              />
              <Card.Body>
                <h5>Blog post</h5>
                <p>
                  Blog text
                </p>
              </Card.Body>
            </Card>
            <Card>
              <img
                width={150}
                height={150}
                className="mr-3"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
              />
              <Card.Body>
                <h5>Blog post</h5>
                <p>
                  Blog text
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <h5>Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mt-3'bg='light'>
              <Card.Body>
                <Card.Title>
                  Site widget
                </Card.Title>
                <Card.Text>Card.Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
