import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
function Section(props) {
  // console.log(props)
  return (
    <Idk BgImg={props.backgroundImage}>
      <Fade bottom>
        <Item>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </Item>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGrp>
            <Leftbtn>{props.LeftBtnText}</Leftbtn>
            {props.RightBtnText && <RightBtn>{props.RightBtnText}</RightBtn>}
          </ButtonGrp>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
        {/* /images/down-arrow.svg */}
      </Buttons>
    </Idk>
  );
}

export default Section;

// import images from "../../public/images/mode-x.jpg"

const Idk = styled.div`
  height: 100%;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.BgImg}")`};
  display: flex;
  flex-direction: column;

  justify-content: space-between; //If flex direction is column justify content will adjust the container like aling items
  align-items: center;
`;
const Item = styled.div`
  padding-top: 10vh;
  text-align: center;
`;

const ButtonGrp = styled.div`
  display: flex;
  // align-items:center;
  margin-bottom: 30px;
  flex-direction: column;
`;

const Leftbtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 30px;
  width: 200px;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  opacity: 0.87;
  text-transform: uppercase;
  font-size: 12px;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
`;

const RightBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 30px;
  width: 200px;
  color: black;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  opacity: 0.65;
  text-transform: uppercase;
  font-size: 12px;
  padding: 10px;
  maring: 4px;
  cursor: pointer;
`;
const DownArrow = styled.img`
  // margin-top:20px;
  height: 40px;
  animation: animateDown infinite 1.3s;
  
`;

const Buttons = styled.div``;

