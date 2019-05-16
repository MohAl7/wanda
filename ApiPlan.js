import React, { Component } from 'react';
import './apiPlan.scss';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import bitCoin from '../../../../assets/icons/Bitcoin.svg';
import balance from '../../../../assets/icons/Balance-1000-USD.svg';
import paypal from '../../../../assets/icons/paypal.svg';
import { Checkbox } from 'antd';

export default class ApiPlan extends Component {
    render() {
        return (
            <React.Fragment>
                <MDBContainer className="single-plans-container">
                    <MDBRow>
                        <MDBCol lg="6" md="12">
                            <MDBCol size="12" className="space-inputs" >
                                <input className="single-plans-inputs" type="text" id="ap-pl-label1" />
                                <br />
                                <label className="labels-input-of-pl" htmlFor="ap-pl-label1">Company name</label>
                            </MDBCol>
                            <MDBCol size="12" className="space-inputs" >
                                <input className="single-plans-inputs" type="text" id="ap-pl-label2" />
                                <br />
                                <label className="labels-input-of-pl" htmlFor="ap-pl-label2">VAT (optional)</label>
                            </MDBCol>
                            <MDBCol size="12" className="space-inputs" >
                                <input className="single-plans-inputs" type="text" id="ap-pl-label3" />
                                <br />
                                <label className="labels-input-of-pl" htmlFor="ap-pl-label3">Registration number</label>
                            </MDBCol>
                            <MDBCol size="12">
                                <div className="send-invoice">
                                    <p>We will send you invoice to your e-mail address</p>
                                </div>
                            </MDBCol>
                        </MDBCol>
                        <MDBCol lg="6" md="12">
                            <div className="custom-plan-card">
                                <div className="card-2">
                                    <MDBRow>
                                        <MDBCol size="12">
                                            <p>Select your payment method</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className="pay-type-btn-holder" md="4" lg="4" sm="12">
                                            <button className="choose-pay-type">
                                                <img src={balance} alt="" />
                                            </button>
                                        </MDBCol>
                                        <MDBCol className="pay-type-btn-holder" md="4" lg="4" sm="12">
                                            <button className="choose-pay-type">
                                                <img src={bitCoin} alt="" />
                                            </button>
                                        </MDBCol>
                                        <MDBCol className="pay-type-btn-holder" md="4" lg="4" sm="12">
                                            <button className="choose-pay-type">
                                                <img src={paypal} alt="" />
                                            </button>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol middle="true">
                                            <button className="pay-now-btn-api-card">PAY NOW</button>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size="12">
                                            <Checkbox>I agree for my data to be processed</Checkbox>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}
