import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { ReactComponent as FbLogo } from './assets/icons8-facebook.svg';
import { ReactComponent as InstaLogo } from './assets/icons8-instagram-logo.svg';
import { ReactComponent as LinkLogo } from './assets/icons8-linkedin.svg';
import { ReactComponent as TwitLogo } from './assets/icons8-twitter.svg';
import image from './photos/photo.png'
const Main = () => {
  const [value, setValue] = useState(false)
  const [textColor, setTextColor] = useState('red')
  var arr = [
    {
      photoUrl: './photos/photo.png',
      heading: 'Designing DashBoards',
      date: '2020',
      about: 'DashBoard',
      lowerContent:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      photoUrl: './photos/photo.png',
      heading: 'Vibrant Portraits of 2020',
      date: '2018',
      about: 'Illustration',
      lowerContent:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      photoUrl: './photos/photo.png',
      heading: 'Designing DashBoards',
      date: '2018',
      about: 'Typography',
      lowerContent:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      photoUrl: './photos/photo.png',
      heading: 'Components, Design',
      date: '2018',
      about: 'DashBoard',
      lowerContent:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]
  return (
    <>
    <div className="container-fluid">
      <div className="conatiner">
        <Navbar expand="lg">
          <Container
            className="justify-content-end"
            style={{ background: 'white' }}
          >
            <div className="justify-content-end">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                        style={{fontSize:30}}
                    onClick={() => {
                      setValue(true);setTextColor('black')
                    }}
                  >
                    <strong>Blog</strong>
                  </Nav.Link>
                  <Nav.Link
                        style={{fontSize:30,color:textColor}}
                    onClick={() => {
                      setValue(false);setTextColor('red')
                    }}
                  >
                    <strong>Work</strong>
                  </Nav.Link>
                  <Nav.Link
                  style={{fontSize:30}}
                    onClick={() => {
                      setValue(true);setTextColor('black')
                    }}
                  >
                    <strong>About</strong>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
      <div  className="container" style={{padding:50}} >
        <div style={{ height: 70 }}></div>
        {value === false && (
          <div align="center">
          <h1 style={{marginRight:"72%",marginBottom: 50, fontSize: 50 }}>
            <strong>Work</strong>
          </h1>
          </div>
        )}
             
        {value === false &&
          arr.map((x) => (
            <div className="row" style={{justifyContent:'center'}}>
              <div className="col-md-4">
                <img
                  src={image}
                  style={{ width: '100%',height:"95%",borderRadius:20}}
                  alt="this is image"
                />
              </div>
              <div className="col-md-6">
                <h1><strong>{x.heading}</strong></h1>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 40,
                      borderRadius: 20,
                      background: '#003399',
                      textAlign: 'center',
                    }}
                  >
                    <h4 style={{ color: 'white', fontSize: 23, marginTop: 5 }}>
                      {x.date}
                    </h4>
                  </div>
                  <h4 style={{ marginLeft:50, opacity: 0.5, fontSize: 30 }}>
                    {x.about}
                  </h4>
                </div>
                <p style={{ fontSize:23,marginTop:30 }}>{x.lowerContent}</p>
              </div>
              <div
                style={{
                  height: 1,
                  background: 'black',
                  width: '80%',
                  marginBottom: 50,
                  marginTop: 45,
                  opacity: 0.4
                }}
              ></div>
            </div>
          ))}
      </div>
      {value===false && 
      <div align="center" style={{marginBottom:20}}>
      <div style={{width:350}}>
          <FbLogo style={{margin:10}}/>
          <InstaLogo style={{margin:10}}/>
          <LinkLogo style={{margin:10}}/>
          <TwitLogo style={{margin:10}}/>
      </div>
      <h5 style={{textAlign:'center'}}>Copyright ©2020 All rights reserved </h5>
      </div>
      }
       </div>
    </>
  )
}
export default Main
