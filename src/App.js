import React ,{Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomGrid from './containers/CustomGrid';
import CustomTable from './containers/CustomTable';
import {connect} from 'react-redux'
//import { Layout } from 'antd';
//const { Header, Footer, Content } = Layout;

class App extends Component {
  render(){
  return (
    <div>
     <CustomGrid>
       <CustomTable/>
     </CustomGrid>
    </div>
  );
}}


export default connect()(App);
