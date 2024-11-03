import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { Container, Row, Col } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Row className="text-center">
                <Col>
                    <h1 className="display-1 text-danger">404</h1>
                    <h2 className="mb-4">Page Not Found</h2>
                    <p>Sorry, the page you are looking for does not exist.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;