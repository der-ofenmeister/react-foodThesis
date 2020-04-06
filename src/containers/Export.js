import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import {FileZipOutlined } from '@ant-design/icons';


class Export extends React.Component {
    render() {
        return (
            <div>
                <Button><FileZipOutlined />Export</Button>
            </div>
        )
    }

}
export default connect()(Export)