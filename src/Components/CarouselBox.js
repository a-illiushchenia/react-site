import React, { Component } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import fruits from '../accets/fruits.jpg'
import fruitChair from '../accets/fruitChair.jpg'
import plate from '../accets/plate.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img 
            className='d-block w-100'
            src={ fruits }
            alt="fruits"
          />
          <Carousel.Caption>
            <h3>Food image - fruits</h3>
            <p>Hello! It is gastro site for people - fruits</p>
          </Carousel.Caption>  
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className='d-block w-100'
            src={ fruitChair }
            alt="fruitChair"
          />
          <Carousel.Caption>
            <h3>Food image - fruitChair</h3>
            <p>Hello! It is gastro site for people - fruitChair</p>
          </Carousel.Caption>  
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className='d-block w-100'
            src={ plate }
            alt="plate"
          />
          <Carousel.Caption>
            <h3>Food image - plate</h3>
            <p>Hello! It is gastro site for people - plate</p>
          </Carousel.Caption>  
        </Carousel.Item>
      </Carousel>
    )
  }
}
