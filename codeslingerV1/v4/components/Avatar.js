import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://i.ibb.co/PCc0b7R/avatar-default.jpg",
  };

  componentDidCatch() {
    fetch("https://api.github.com/users/defunkt/avatar_url").then((response) =>
      response.json().then((response) => {
        this.setState({
          photo: response.photo,
        });
      })
    );
  }
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

/*
<Avatar source={require("./assets/avatar.jpg")}></Avatar>

  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
*/
