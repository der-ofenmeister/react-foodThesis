import { Modal, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { ShareAltOutlined } from '@ant-design/icons';


class ManageRelationships extends React.Component {
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
                <Button onClick={this.showModal}><ShareAltOutlined />Manage Relationships</Button>
                <Modal
                    title="Manage Relationships"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="Apply Changes"
                >

                </Modal>
            </div>
        )
    }

}
export default connect()(ManageRelationships)