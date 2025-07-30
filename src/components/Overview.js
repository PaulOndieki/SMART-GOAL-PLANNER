import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card, Col, Row } from "react-bootstrap";

const Overview = () => {
  const { goals } = useContext(AppContext);

  const totalSaved = goals.reduce(
    (sum, goal) => sum + (parseFloat(goal.currentAmount) || 0),
    0
  );

  const totalTarget = goals.reduce(
    (sum, goal) => sum + (parseFloat(goal.targetAmount) || 0),
    0
  );

  const progressPercent =
    totalTarget > 0 ? ((totalSaved / totalTarget) * 100).toFixed(1) : 0;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col>
            <h5>Total Saved</h5>
            <p>KES {totalSaved.toLocaleString()}</p>
          </Col>
          <Col>
            <h5>Total Target</h5>
            <p>KES {totalTarget.toLocaleString()}</p>
          </Col>
          <Col>
            <h5>Progress</h5>
            <p>{progressPercent}%</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Overview;
