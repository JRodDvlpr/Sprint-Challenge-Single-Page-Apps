import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  border: 5px solid black;
  border-radius: 5px;
  margin: 20px 0;
  text-align: center;
  width: 400px;
  background: black;
  color: #fff;
  font-size: 15px;
`

export default function CharacterCard(props) {
  return (
    <Card>
    <img src={props.image}/>
    <h2>{props.name}</h2>
    <p>Status:{props.status}</p>
    <p>Species: {props.species}</p>
    </Card>
  ) 
  
}
