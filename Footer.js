import React, { Component } from 'react';
import { MDBCol } from "mdbreact";
import './shared.scss';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import pinterest from '../../assets/icons/pinterest.svg';
import facebook from '../../assets/icons/facebook.svg';

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-main col-12">
                    <MDBCol md="7" xs="12" style={{ height: '100%' }}>
                        <div className="container center-foot">
                            <div className="footer-item">
                                <p>All Rights reserved</p>
                                <p>Privacy Policy</p>
                            </div>
                            <div className="footer-item">
                                <p>Terms of Use</p>
                                <p>Our transparency policy</p>
                            </div>
                            <div className="footer-item">
                                <p>For Data Buyers</p>
                                <p>Advertise</p>
                            </div>
                            <div className="footer-item">
                                <p>Contact</p>
                                <p>About Us</p>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="5" xs="12">
                        <div className="socials-container">
                            <MDBCol size="2">
                                <img className="social-links-footer" src={facebook} alt="facebook" />
                            </MDBCol>
                            <MDBCol size="2">
                                <img className="social-links-footer" src={twitter} alt="twitter" />
                            </MDBCol>
                            <MDBCol size="2">
                                <img className="social-links-footer" src={instagram} alt="instagram" />
                            </MDBCol>
                            <MDBCol size="2">
                                <img className="social-links-footer" src={pinterest} alt="pintrest" />
                            </MDBCol>
                        </div>
                    </MDBCol>
                </div>
            </React.Fragment>
        )
    }
}
