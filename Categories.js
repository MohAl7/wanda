import React, { Component } from 'react';
import './categories.scss';
import { MDBCol, MDBRow } from 'mdbreact';
import firebase from 'firebase';
import { Checkbox } from 'antd';
import back from '../../../../assets/icons/back.svg';
import { NavLink } from 'react-router-dom';
import Loading from '../../../shared/loading/Loading';
import { Spin, Icon } from 'antd';


const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
var selected = [];
export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_name: undefined,
            trip_list: [],
            userId: localStorage.getItem('id'),
            selected_points: false,
            loading: false,
            categories: null
        }
    }



    loading_status = (status) => {
        this.setState({
            loading: status
        })
    }


    handle_select_change_category = (e) => {
        console.log(e)
        const db = firebase.firestore();
        var category_filtered = [];
        e.forEach(aaaa => {
            console.log(aaaa)
            db.collection('data/' + this.state.userId + '/trips').get().then((response) => {
                response.forEach(trips => {
                    db.collection('data/' + this.state.userId + '/trips').doc(trips.id).collection('trip_points').where('trip_point.category', '==', aaaa)
                        .get().then((res) => {
                            if (res.empty) {
                                console.log('empty')
                            }
                            res.forEach(points => {
                                category_filtered.push({ points: points.data() })
                                this.setState({
                                    categories: category_filtered
                                })
                            })
                        })
                })
            })
        })
    }

    set_selected_points = (e, points) => {
        if (e.target.checked === true) {
            selected.push(points.points.trip_point);
        } else if (e.target.checked === false) {
            selected = selected.filter(function (el) { return el.point_name !== points.points.trip_point.point_name });
        }
        this.set_state_of_add();
    }

    set_state_of_add = () => {
        if (selected.length !== 0) {
            this.setState({
                selected_points: true
            })
        } else {
            this.setState({
                selected_points: false
            })
        }
    }

    show_add_btn = () => {
        if (this.state.selected_points === true && this.state.loading === false) {
            return (
                <div className="add-point-to-trip">
                    <button onClick={this.save_selected_points}>Create New Trip With Selected points</button>
                </div>
            )
        } else if (this.state.loading === true) {
            return (
                <div className="add-point-to-trip">
                    <Loading />
                </div>
            )
        }
        else if (this.state.loading === false) {
            return (
                <p id="hint-po-to-tr">You can create a new trip with selected points</p>
            )
        }
    }

    save_selected_points = () => {
        this.loading_status(true);
        const dbRef = firebase.firestore();
        dbRef.collection('data/').doc(this.state.userId).set({
            selected
        }).then(() => {
            this.loading_status(false);
            document.getElementById('go-to-point-with-trip').click();
        })
    }

    render() {
        const data = this.props.data.map((data, index) => {
            return (
                <React.Fragment key={index}>
                    <MDBRow className="category-filter-row">
                        <MDBCol size="10" style={{ marginBottom: "20px" }} className="category-card">
                            <MDBCol size="6">trip: <strong>{data.trip}</strong></MDBCol>
                            <MDBCol size="6">point:  <strong>{data.points.trip_point.point_name}</strong></MDBCol>
                        </MDBCol>
                        <MDBCol size="2" middle>
                            <Checkbox onClick={(e) => this.set_selected_points(e, data)}></Checkbox>
                        </MDBCol>
                    </MDBRow>
                </React.Fragment>
            )
        })
        return (
            <React.Fragment>
                <Spin spinning={this.props.loading} indicator={antIcon}>
                    <div className="categories-holder-ft">
                        {data}
                    </div>
                    {
                        this.show_add_btn()
                    }
                </Spin>
                <MDBCol className="back-categories-filter" size="6">
                    <button onClick={() => this.props.change_page(0)} className="back-btn-filters">
                        <span><img src={back} alt="back-icon" /></span>BACK</button>
                </MDBCol>
                <NavLink id="go-to-point-with-trip" to='/trip/new-with-point'></NavLink>
            </React.Fragment>
        )
    }
}
