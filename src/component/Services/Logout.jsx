import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Style from "./Ser_style";

class Logout extends Component {

  constructor(){
    super();
    this.state={
      solw:true
    }
  }
    alert() {
          alert("your account was Log out")
    
    }
    render() {
    return (
      <>
        <Style />

        <div className="container">
          <Card className="text-center" style={card}>
            <Card.Header>Log Out</Card.Header>
            <Card.Body>
              <Card.Title>Logout of my Account on my Android phone.</Card.Title>
              <Card.Text>
                You may have to click your profile picture or username to reveal
                this option. Look for one of these options near the top-left or
                top-right section of the browser window or drop-down menu.
                Clicking that option logs you out of the online account.
              </Card.Text>
              <Button variant="primary" onClick={this.alert}>Log out</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
const card = {
  margin: "40px 0",
};

export default Logout;
