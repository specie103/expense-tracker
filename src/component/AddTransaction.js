import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function AddTransaction() {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <div>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name"/>
                        </Col>
                    </Row>
                </Form>
            </div>

        </div>
    )
}

export default AddTransaction
