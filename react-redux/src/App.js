import React from "react";
import styled from "styled-components";

const color = "red";

const Component = styled.div`
  display: ${({ isLoaded }) => (isLoaded ? "block" : "none")};
  color: ${color};
`;

// component 상속 및 새로운 속성 추가
const Wrapper = styled(Component)`
  background-color: gray;
  margin: 20px;
`;

const App = () => {
  return (
    <Wrapper isLoaded>
      <Component isLoaded={true}>complete</Component>
    </Wrapper>
  );
};

export default App;
