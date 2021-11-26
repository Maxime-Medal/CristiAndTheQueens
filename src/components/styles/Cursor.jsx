import styled from "styled-components";

const Cursor = styled.div`

input[type=range] {
  height: 43px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 25px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #50555C;
  background: #E3DBDB;
  border-radius: 14px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 2px #000000;
  border: 0px solid #000000;
  height: 36px;
  width: 40px;
  border-radius: 12px;
  background: #827191;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #E3DBDB;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 25px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #50555C;
  background: #E3DBDB;
  border-radius: 14px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 2px #000000;
  border: 0px solid #000000;
  height: 36px;
  width: 40px;
  border-radius: 12px;
  background: #827191;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 25px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #E3DBDB;
  border: 0px solid #000000;
  border-radius: 28px;
  box-shadow: 1px 1px 1px #50555C;
}
input[type=range]::-ms-fill-upper {
  background: #E3DBDB;
  border: 0px solid #000000;
  border-radius: 28px;
  box-shadow: 1px 1px 1px #50555C;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 2px #000000;
  border: 0px solid #000000;
  height: 36px;
  width: 40px;
  border-radius: 12px;
  background: #827191;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #E3DBDB;
}
input[type=range]:focus::-ms-fill-upper {
  background: #E3DBDB;
}

`;

export default Cursor;