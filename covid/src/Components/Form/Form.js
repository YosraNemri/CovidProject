import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import "./Form.css";

const Form1 = ({ setAnswer1, setAnswer2, setAnswer3, setAnswer4, CalRisk }) => {
    return (
        <div className="body">
            <Container>
                <Row>
                    <strong>Do you always wear a mask?</strong>

                    <Form.Check
                        type="radio"
                        name="answer1"
                        label="Yes"
                        value="Yes"
                        OnClick={(e) => setAnswer1(e.target.value)}
                    />

                    <Form.Check
                        type="radio"
                        name="answer1"
                        label="No"
                        value="No"
                        OnClick={(e) => setAnswer1(e.target.value)}
                    />
                </Row>
            </Container>
            <Container>
                <Row>
                    <strong>Are you vaccinated ?</strong>

                    <Form.Check
                        type="radio"
                        name="answer2"
                        label="Yes"
                        value="Yes"
                        OnClick={(e) => setAnswer2(e.target.value)}
                    />

                    <Form.Check
                        type="radio"
                        name="answer2"
                        label="No"
                        value="No"
                        OnClick={(e) => setAnswer2(e.target.value)}
                    />
                </Row>
            </Container>
            <Container>
                <Row>
                    <strong>
                        Did you have an intimate contact with a covid patient?
                    </strong>

                    <Form.Check
                        type="radio"
                        name="answer3"
                        label="Yes"
                        value="Yes"
                        OnClick={(e) => setAnswer3(e.target.value)}
                    />

                    <Form.Check
                        type="radio"
                        name="answer3"
                        label="No"
                        value="No"
                        OnClick={(e) => setAnswer3(e.target.value)}
                    />
                </Row>
            </Container>
            <Container>
                <Row>
                    <strong>
                        Are you under any immunosuppressant treatment?
                    </strong>

                    <Form.Check
                        type="radio"
                        name="answer4"
                        label="Yes"
                        value="Yes"
                        OnClick={(e) => setAnswer4(e.target.value)}
                    />

                    <Form.Check
                        type="radio"
                        name="answer4"
                        label="No"
                        value="No"
                        OnClick={(e) => setAnswer4(e.target.value)}
                    />
                </Row>
            </Container>
            <Button
                variant="primary"
                size="lg"
                block
                onClick={() => alert("You may be exposed to catch the virus")}
            >
                Calculate
            </Button>
        </div>
    );
};

export default Form1;
