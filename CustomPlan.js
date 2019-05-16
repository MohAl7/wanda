import React, { Component } from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import './customPlan.scss';
import { Select } from 'antd';

const Option = Select.Option;

export default class CustomPlan extends Component {
    render() {
        return (
            <React.Fragment>
                <MDBContainer className="single-plans-container">
                    <MDBRow>
                        <MDBCol lg="6" md="12">
                            <MDBCol size="12">
                                <MDBCol size="12" className="space-inputs">
                                    <Select defaultValue="lucy" id="ap-pl-label1">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <br />
                                    <label className="labels-input-of-pl" htmlFor="ap-pl-label1">I want to know</label>
                                </MDBCol>
                                <MDBCol size="12" className="space-inputs" id="ap-pl-label2">
                                    <Select defaultValue="lucy">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <br />
                                    <label className="labels-input-of-pl" htmlFor="ap-pl-label2">Of user who match these instamces</label>
                                </MDBCol>
                                <MDBCol size="12" className="space-inputs" >
                                    <input className="single-plans-inputs" type="text" id="ap-pl-label3" />
                                    <br />
                                    <label className="labels-input-of-pl" htmlFor="ap-pl-label3">Who travel to</label>
                                </MDBCol>
                                <MDBCol size="12" className="space-inputs" >
                                    <p id="from-to-time-plan">Within this time period</p>
                                    <MDBRow>
                                        <MDBCol size="6">
                                            <input className="single-plans-inputs" type="text" id="ap-pl-label4" />
                                            <br />
                                            <label className="labels-input-of-pl" htmlFor="ap-pl-label4">From</label>
                                        </MDBCol>
                                        <MDBCol size="6">
                                            <input className="single-plans-inputs" type="text" id="ap-pl-label5" />
                                            <br />
                                            <label className="labels-input-of-pl" htmlFor="ap-pl-label5">To</label>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBCol>
                        </MDBCol>
                        <MDBCol lg="6" md="12">
                            <div className="custom-plan-card">
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol size="12">
                                            <p className="result-p">RESULT</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size="12">
                                            <p id="number-r-p">Our results based on data collected <strong id="red-st-bi">from 10,000 </strong>targeted users</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size="12" className="price-col-card">
                                            <p className="result-p">PRICE</p>
                                            <span>1000 USD</span>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size="12" className="pay-card-btn-col">
                                            <button id="pay-btn-card">PAY</button>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}
