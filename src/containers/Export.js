import { Button, Modal, Tabs } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { FileZipOutlined } from '@ant-design/icons';
import './ManageColumns.css';

const { TabPane } = Tabs;


class Export extends React.Component {
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
                <Button onClick={this.showModal}><FileZipOutlined />Export</Button>
                <Modal
                    title="Download results for query"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="Download File"
                    cancelText="Close"
                >
                    <Tabs type="card" tabPosition="left">
                        <TabPane tab="Download TSV file" key="1">
                            {/* <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p> */}
                        </TabPane>
                        <TabPane tab="All Columns" key="2">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        <TabPane tab="All Rows" key="3">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        <TabPane tab="No compression" key="4">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        <TabPane tab="No Column Headers" key="5">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        <TabPane tab="Preview" key="6">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        
                    </Tabs>
                </Modal>
            </div>
        )
    }

}
export default connect()(Export)