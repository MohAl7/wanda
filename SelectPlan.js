import React, { Component } from 'react';
import { MDBCol, MDBContainer } from 'mdbreact';
import './selectPlan.scss';
import { NavLink } from 'react-router-dom';

export default class SelectPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planSelect: 0
    }
  }

  handleChange = (x) => {
    // this.props.pageRoute(x)
    this.setState({
      planSelect: x
    })
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer className="select-plan-container">
          <p>SELECT YOUR PAYMENT PLAN</p>
          <MDBCol size="12">
            <NavLink to="/balance/api">
              <button onClick={() => this.handleChange(1)} className={this.state.planSelect === 1 ? 'active-plan-btn-api' : 'not-selected-plan'} id="api-btn">Api</button>
            </NavLink>
            <br />
            <label className="plan-labels" htmlFor="api-btn">500$ / 1000 calls</label>
          </MDBCol>
          <MDBCol size="12">
            <NavLink to="/balance">
              <button onClick={() => this.handleChange(0)} className={this.state.planSelect === 0 ? 'active-plan-btn-custome' : 'not-selected-plan'} id="custom-r-btn">Custom Report</button>
            </NavLink>
            <br />
            <label className="plan-labels" htmlFor="custom-r-btn">0.10 per user</label>
          </MDBCol>
        </MDBContainer>
      </React.Fragment>
    )
  }
}
