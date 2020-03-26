import React ,{Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
//import CustomTable from './containers/CustomTable';
//import TableView from './components/TableView';
import CustomTable from './containers/CustomTable';
import {connect} from 'react-redux'
class App extends Component {
  render(){
  return (
    <div>
      < CustomTable/>
    </div>
  );
}}

// mapStateToProps = state =>{
//   return{
//     data
//   }
// }

export default connect()(App);
