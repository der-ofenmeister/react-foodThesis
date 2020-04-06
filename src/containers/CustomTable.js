import React from 'react';
//import ReactDOM from 'react-dom';
import { fetchData } from "../redux-store/actions/table";

import { Table } from 'antd';
//import axios from 'axios';
import { connect } from "react-redux";
//import { Link } from 'react-router-dom';



class CustomTable extends React.Component {


    componentDidMount() {
        this.props.fetchData()
    }
   
    render() {
        return (
            <Table
                dataSource={this.props.results}
                columns={this.props.columnHeaders}
            
            />
        )
    }
}

const mapStateToProps = state => ({
    results: state.results,
    columnHeaders: state.columnHeaders,
})

export default connect(mapStateToProps, { fetchData })(CustomTable)













