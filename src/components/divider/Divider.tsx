import styled from "styled-components";

export const Divider: JSX.Element = styled.div`
  position: relative;
  width: "75%";
  margin: 3rem auto;
  height: 1px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 2px;
    background-image: linear-gradient(
      to right,
      transparent,
      #9a9fa6,
      transparent
    );
  }
`;
