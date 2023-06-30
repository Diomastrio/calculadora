import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const ScientificCalculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    const handleClear = () => {
        setResult('');
    };

    const handleCalculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const handleSquareRoot = () => {
        try {
            setResult(Math.sqrt(parseFloat(result)).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Calculadora cientifica</h2>
            <Row className="justify-content-center">
                <Col xs={6} className="calculator p-4">
                    <input type="text" value={result} className="form-control mb-3" readOnly />
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <Button variant="outline-secondary" onClick={handleSquareRoot}>√</Button>
                                </td>
                                <td>
                                    <Button variant="outline-secondary" name="(" onClick={handleClick}>(</Button>
                                </td>
                                <td>
                                    <Button variant="outline-secondary" name=")" onClick={handleClick}>)</Button>
                                </td>
                                <td>
                                    <Button variant="outline-secondary" name="%" onClick={handleClick}>%</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="primary" name="7" onClick={handleClick}>7</Button>
                                </td>
                                <td>
                                    <Button variant="primary" name="8" onClick={handleClick}>8</Button>
                                </td>
                                <td>
                                    <Button variant="primary" name="9" onClick={handleClick}>9</Button>
                                </td>
                                <td>
                                    <Button variant="warning" name="/" onClick={handleClick}>/</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="primary" name="4" onClick={handleClick}>4</Button>
                                </td>
                                <td>
                                    <Button variant="primary" name="5" onClick={handleClick}>5</Button>
                                </td>
                                <td>
                                    <Button variant="primary" name="6" onClick={handleClick}>6</Button>
                                </td>
                                <td>
                                    <Button variant="warning" name="*" onClick={handleClick}>*</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="primary" name="1" onClick={handleClick}>1</Button>
                                </td>
                                <td>
                                    <Button variant="primary" name="2" onClick={handleClick}>2</Button>
                                </td>
                                <td>
                                    <Button variant="primary" name="3" onClick={handleClick}>3</Button>
                                </td>
                                <td>
                                    <Button variant="warning" name="-" onClick={handleClick}>-</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="primary" name="0" onClick={handleClick}>0</Button>
                                </td>
                                <td>
                                    <Button variant="primary" name="." onClick={handleClick}>.</Button>
                                </td>
                                <td>
                                    <Button variant="success" name="=" onClick={handleCalculate}>=</Button>
                                </td>
                                <td>
                                    <Button variant="warning" name="+" onClick={handleClick}>+</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button variant="danger" onClick={handleClear} className="mt-3">Clear</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ScientificCalculator;
