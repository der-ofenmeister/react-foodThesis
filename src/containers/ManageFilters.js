import { Modal, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { FilterOutlined } from '@ant-design/icons';

class ManageFilters extends React.Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div>
                <Button onClick={this.showModal}><FilterOutlined />Manage Filters
                </Button>
                <Modal
                    title="Active Filters"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="Define a new filter"
                >

                </Modal>
            </div>
        )
    }

}
export default connect()(ManageFilters)