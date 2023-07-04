const { styled } = require("styled-components");

export const ProgressBar = styled.div`
  position: relative;
  width: 80%;
  height: 50px;
  border-radius: 50px;
  background-color: #ccc;
  margin: auto;
  margin-top: 90px;
`;

export const Progress = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  background-image: linear-gradient(to bottom, #00c5ff, #004d63);
  border-radius: 50px;
  width: 0;
  transition: width 1s ease;
`;

export const AlmostYours = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  top: -15px;
  left: -15px;
  color: white;
  font-weight: bold;
  background-image: linear-gradient(45deg, #9c27b0, #3f51b5);
  border: 5px solid #eee;
  border-radius: 100%;
  outline: 1px solid lightseagreen;
  box-shadow: 0 0 3px 1px black;
  z-index: 40;
`;

export const StepNumber = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  top: -4px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  border: 7px solid #eee;
  border-radius: 100%;
  outline: 1px solid lightseagreen;
  text-shadow: 0 0 3px black;
  box-shadow: 0 0 3px 1px black;
  z-index: 40;
`;
