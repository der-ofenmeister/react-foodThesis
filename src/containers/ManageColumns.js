import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';


class ManageColumns extends React.Component {
    render() {
        return (
            <div>
                <Button>Manage Columns</Button>
            </div>
        )
    }

}
export default connect()(ManageColumns)