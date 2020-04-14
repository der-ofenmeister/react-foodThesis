import { Modal, Button, Tabs } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import Icon from '@ant-design/icons';
import './ManageColumns.css';

const { TabPane } = Tabs;


class ManageColumns extends React.Component {
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
                <Button onClick={this.showModal}>Manage Columns</Button>
                <Modal
                    title="Manage Columns"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="Apply Changes"
                >
                    <Tabs type="card">
                        <TabPane tab="Selected Columns" key="1">
                            {<div>
                                <h3>_ Column Selected</h3>
                                <p> Re-arrange or remove columns by dragging, or by using the buttons</p>
                            </div>
                            }
                        </TabPane>
                        <TabPane tab="Sort Order" key="2">
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }

}
export default connect()(ManageColumns)