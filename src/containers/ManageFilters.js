import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import {FilterOutlined} from '@ant-design/icons';

class ManageFilters extends React.Component {
    render() {
        return (
            <div>
                <Button><FilterOutlined />Manage Filters
                </Button>
            </div>
        )
    }

}
export default connect()(ManageFilters)