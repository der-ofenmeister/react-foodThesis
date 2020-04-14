import React from 'react';
//import ReactDOM from 'react-dom';
import { fetchData } from "../redux-store/actions/table";

import { Table } from 'antd';
//import axios from 'axios';
import { connect } from "react-redux";
//import { Link } from 'react-router-dom';



const sortData = (data) => {
    // Call slice to create a new Array and prevent mutating it if it's stored in state
    return data.slice().sort((a, b) => a.myKey - b.myKey);
 }

class CustomTable extends React.Component {


    componentDidMount() {
        this.props.fetchData()
    }
    
    render() {
        return (
            <Table
               pagination= { {position:'top'}}
                columns={this.props.columnHeaders}
                
                dataSource={sortData(this.props.results)}
                title={() => ''}
            />
        )
    }
}

const mapStateToProps = state => ({
    results: state.results,
    columnHeaders: state.columnHeaders,
})

export default connect(mapStateToProps, { fetchData })(CustomTable)













