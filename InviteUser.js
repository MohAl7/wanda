import React, { Component } from 'react';
import './inviteUser.scss';
import { MDBContainer, MDBRow, MDBCol , MDBInput } from 'mdbreact';
import inviteUser from '../../../../assets/icons/invite-user-color.svg';
import back from '../../../../assets/icons/back.svg'
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import Loading from '../../../shared/loading/Loading';
import { Skeleton } from 'antd';

export default class InviteUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isLoading2: false,
            trip_id: this.props.match.params.id,
            invite_user: [],
            invited_user_list: [],
            userId: localStorage.getItem('id'),
            userAccess: 0
        }
    }

    componentWillMount() {
        this.is_loading2(true);
        let invited_user = [];
        const dbRef = firebase.firestore();
        dbRef.collection('trips').doc(this.state.trip_id).collection('users').get().then((response) => {
            this.is_loading2(false);
            response.forEach(userInvited => {
                invited_user.push({ id: userInvited.id, data: userInvited.data() })
                this.setState({
                    invited_user_list: invited_user
                })
            })
        })
    }

    is_loading = (status) => {
        this.setState({
            isLoading: status
        })
    }

    is_loading2 = (status) => {
        this.setState({
            isLoading2: status
        })
    }

    showLoding() {
        if (this.state.isLoading === true) {
            return (
                <button className="add-filters">
                    <Loading />
                </button>
            )
        } else {
            return (
                <button type="submit" className="add-filters">ADD</button>
            )
        }
    }

    add_new_user = (user) => {
        this.is_loading(true);
        const db = firebase.firestore();
        db.collection('data/' + this.state.userId + '/trips').doc(this.state.trip_id).collection('users').add({
            users: user
        }).then(
            () => {
                this.is_loading(false);
                this.props.history.push('/trip/list');
            }
        )
    }

    handle_change = (e) => {
        this.setState({
            invite_user: e.target.value
        })
    }
    handle_submit = (e) => {
        e.preventDefault();
        var user = { detail_of_user: this.state.invite_user , access: this.state.userAccess };
        this.add_new_user(user);
    }

    showUser = () => {
        if (this.state.invited_user_list.length === 0) {
            return (
                <strong>No user invited to this trip</strong>
            )
        } else {
            return(
                this.state.invited_user_list.map((data, index) => {
                    console.log(data.data.users.detail_of_user , index)
                    return (
                        <strong>{data.data.users.detail_of_user}</strong>
                    )
                })
            )
        }
    }

    invited_user_accecibility = (type) => {
        this.setState({
            userAccess: type
        })
    }

    render() {
        return (
            <React.Fragment>
                <form className="h-100" ref="form" onSubmit={this.handle_submit}>
                    <MDBContainer className="holder-invite-user">
                        <MDBRow className="w-100">

                            <MDBCol size="12">
                                <div className="trip-name">
                                    <p><span><img src={inviteUser} alt="add-trip" /></span>INVITE USER</p>
                                </div>
                                <div className="trip-name-input">
                                    <MDBInput required={true} id="invite-user" label="Email or Username" onChange={this.handle_change} type="text" />
                                </div>
                            </MDBCol>
                            <MDBCol size="12">
                                <div className="user-permission-card">
                                    <MDBRow>
                                        <MDBCol md="5">
                                            <p>User Permissions:</p>
                                        </MDBCol>
                                        <MDBCol md="7" className="edit-invite-user-per">
                                            <MDBCol md="6">
                                                <button type='button' onClick={() => this.invited_user_accecibility(0)} className={this.state.userAccess === 0 ? 'active_border user-per-btn' : 'user-per-btn no-border'}>
                                                    View Only
                                                </button>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <button type='button' onClick={() => this.invited_user_accecibility(1)} className={this.state.userAccess === 1 ? 'active_border edit-user-per-btn' : 'edit-user-per-btn no-border'}>
                                                    Can Edit
                                                </button>
                                            </MDBCol>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                            </MDBCol>
                            <Skeleton paragraph={false} loading={this.state.isLoading2} active>
                                <MDBCol size="12">
                                    <div className="warning-col">
                                        <p>Users already added: {this.showUser()}</p>
                                    </div>
                                </MDBCol>
                            </Skeleton>
                        </MDBRow>
                    </MDBContainer>
                    <MDBCol size="12">
                        <MDBRow id="btn-rows-invite-user">
                            <MDBCol style={{ textAlign: 'center' }} size="6">
                                <NavLink to="/trip/list">
                                    <button className="back-btn-filters">
                                        <span><img src={back} alt="back-icon" /></span>BACK</button>
                                </NavLink>
                            </MDBCol>
                            <MDBCol size="6" id="centerize-div">
                                {
                                    this.showLoding()
                                }
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </form>
            </React.Fragment>
        )
    }
}
