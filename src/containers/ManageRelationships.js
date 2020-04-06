import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import {ShareAltOutlined} from '@ant-design/icons';


class ManageRelationships extends React.Component {
    render() {
        return (
            <div>
                <Button><ShareAltOutlined />Manage Relationships</Button>
            </div>
        )
    }

}
export default connect()(ManageRelationships)