import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { EDUCATION } from '../shared/education';


export default class Education extends Component {

    constructor(props) {
        super(props);

        this.RenderEducation = this.RenderEducation.bind(this);
    }

    RenderEducation() {
        let rows = [];
        
        EDUCATION.forEach(education => {
            let list = [];
            let points = education.description.split(". ");
            points.forEach(point => {
                list.push(
                    <li>{point}</li>
                );
            });

            rows.push(
                <Row className="row-content">
                    <Col md="5" s="12">
                        <h3>{education.school}</h3>
                        <br/>
                        <em>{education.period}</em>
                        <br/>
                        <i className="fa fa-map-marker"></i> {education.location}
                    </Col>
                    <Col>
                        <h4>{education.degree}</h4>
                        <br/>
                        <div className="d-none d-md-block">
                            <ul>
                                {list}
                            </ul>
                        </div>
                    </Col>
                </Row>
            )
        });

        return (
            <Container>
                <Row>
                    <Col align="center">
                        <h2>Education</h2>
                    </Col>
                </Row>
                <hr/>
                {rows}
            </Container>
        )
    }

    render() {
        return (
            <div>
                {this.RenderEducation()}
            </div>
        )
    }
}