import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";
import { AiFillGithub } from "react-icons/ai";

function PortfolioCard(props) {
  return (
    <div>
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        {/* <a href={props.ghLink}>
        <AiFillGithub/>
        </a>
        <a href={props.ghLink}>
        <AiFillGithub href={props.liveLink}/>
        </a> */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default PortfolioCard;

// <div
//   className="card"
//   style={{
//     backgroundImage: props.image ? `url(${props.image})` : "none"
//   }}
// >
//   {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
//   <CardBtn
//     style={{ opacity: props.image ? 1 : 0 }}
//     onClick={props.handleBtnClick}
//     data-value="pass"
//   />
//   <CardBtn
//     style={{ opacity: props.image ? 1 : 0 }}
//     onClick={props.handleBtnClick}
//     data-value="pick"
//   />
// </div>