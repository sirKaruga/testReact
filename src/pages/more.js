import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Ip from '../pictures/fig1.jpg';
import naturePic from '../pictures/nature1.png';
import { Card, Row, Col } from 'react-bootstrap';

const More= ()=>{
  return(
    <div style={{background:"rgba(0,0,0,0.8)"}}>
  <Row>
    <Col>
      <Card>
      <Carousel >
        <Carousel.Item interval={1000}>
          <img style={{height:"30vh"}}
            className="d-block w-100"
            src={Ip}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fast connectivity</h3>
            <p>Simple and easy to connect</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img style={{height:"30vh"}}
            className="d-block w-100"
            src={Ip}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Super UI</h3>
            <p>With Simplicity, quality evolves</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"30vh"}}
            className="d-block w-100"
            src={Ip}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Bootstrap in use</h3>
            <p>This is a test app</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Card>
    </Col>
  </Row>
{/* end of carousel*/ }
<br/>
<Row style={{background:"rgba(0,0,0,0.8)"}}>
  <Col md="6" sm="6" >
    <img style={{maxWidth:"50vw", minWidth:"50vw"}} alt="nature item"  className="d-block" src={naturePic}/>
  </Col>
  <Col md="6" sm="6">
    <Card style={{background:"wheat", height:"inherit"}}>
      <Card.Title style={{background:"rgba(0,0,0,0.8)", color:"#fff"}}>
        Awsomeness of Nature
      </Card.Title>
      <Card.Body>
        Nature is Natural
      </Card.Body>
      <Card.Body style={{background:"rgba(0,0,0,0.8)", color:"#fff"}}>
        Awsomeness of Nature
      </Card.Body>
      <Card.Body style={{background:"rgba(0,0,0,0.9)", color:"#fff"}}>
        <div>the destructive nature of nature is non-existent</div>
        <div>bares the life for both living and nonliving</div>
        <div>bares the life for both living and nonliving</div>
      </Card.Body>
      <Card.Body style={{background:"rgba(0,0,0,0.8)", color:"#fff"}}>
        Awsomeness of Nature
        <div>bares the life for both living and nonliving</div>
        <div>bares the life for both living and nonliving</div>
      </Card.Body>
    </Card>
  </Col>
</Row>
<br/>
{/* end of moddle section*/ }



  <Row  style={{background:"rgba(0,0,0,0.6)"}}>
    <Col md="4" sm="6">
      <Card style={{background:"rgba(0,0,0,0.8)", color:"white"}}>

        <Card.Body>
          <Card.Title>
            <p>A good title</p>
          </Card.Title>
          <Card.Text>
          This is a sample item. <br/>description of something goes here
          This is a sample item. <br/>description of something goes here
          </Card.Text>
        </Card.Body>

      </Card>
    </Col>

    <Col md="4" sm="6">
      <Card style={{background:"rgba(0,0,0,0.8)", color:"white"}}>
        <Card.Body>
          <Card.Title>
            <p>A good title</p>
          </Card.Title>
          <Card.Text>
          This is a sample item. <br/>description of something goes here
          This is a sample item. <br/>description of something goes here
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col md="4" sm="6">
      <Card style={{background:"rgba(0,0,0,0.8)", color:"white"}}>
        <Card.Body>
          <Card.Title>
            <p>A good title</p>
          </Card.Title>
          <Card.Text>
          This is a sample item. <br/>description of something goes here. This is a sample item. <br/>description of something goes here
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row><br/>

    </div>
  );
}

export default More;
