import React ,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import BaseRouter from "./routes";
import CustomGrid from './containers/CustomGrid';
import CustomTable from './containers/CustomTable';
import CustomLayout from './containers/Layout';
import {connect} from 'react-redux'
//import { Layout } from 'antd';
//const { Header, Footer, Content } = Layout;

class App extends Component {
  render(){
  return (
      <Router>
        <CustomLayout {...this.props}>
          <BaseRouter />
      </CustomLayout>
     </Router>
  );
}}


export default connect()(App);
