import React from "react";
import styled from "styled-components";
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Unsplace = ({ url, key }) => {
  return (
    <div className="imgtag">
      <div className="img">
        <Img src={url} key={key} alt="" />{" "}
      </div>
    </div>
  );
};
export default Unsplace;
