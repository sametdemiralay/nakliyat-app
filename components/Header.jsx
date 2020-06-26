import React from "react";
import { Jumbotron, Image } from "react-bootstrap";

export default function Header({ headText }) {
 return (
   <Jumbotron>
    <h1 className="text-center text-uppercase">{headText}</h1>
   </Jumbotron>
 );
}
