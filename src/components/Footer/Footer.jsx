import React from 'react'
import { Link } from 'react-router-dom'
import { DeveloperContact } from '../'
import { Container, Row, Col } from 'reactstrap'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="4" md="12">
            <div className="colcontainerb d-flex align-items-center">
              <span className="brand-name">
                <span> Lib</span>Inv
              </span>
            </div>
          </Col>
          <Col lg="4" md="12">
            <p>
              Library inventory systems is a simple react app with firebase
              aspernatur vel, ex, inventore nostrum impedit, harum doloremque
              nihil non voluptate quibusdam eligendi!
            </p>
          </Col>
          <Col lg="4" md="12">
            <div className="colcontainer d-flex align-items-center">
              <DeveloperContact />
            </div>
          </Col>
        </Row>
        <Row className="py-3 flex-lg-row flex-column-reverse">
          <Col md="12" lg="6">
            <div className="colcontainer d-flex align-items-center justify-content-center">
              <p> &copy; 2023 LibInv - Library Inventory systems</p>
            </div>
          </Col>
          <Col md="12" lg="6" className="b1">
            <div className="footer-bottom">
              <ul className="justify-content-center">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/">RECORDS CENTER</Link>
                </li>
                <li>
                  <Link to="/">BOOKSHIVE</Link>
                </li>
                <li>
                  <Link to="/">TERMS</Link>
                </li>
                <li>
                  <Link to="/">PRIVACY POLICY</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
