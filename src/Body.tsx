import type React from "react";
import styled from "styled-components";

const Body: React.FC<{ theme: string; onStartTimer: () => void }> = props => {
  const Title = styled.h1`
    color: ${props => (props.theme.mode === "dark" ? "#fefefe" : "#666")};
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Button = styled.button`
    background-color: #2196f3;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background-color: #1b8ae1;
    }
  `;
  return (
    <Container>
      <Title>Welcome</Title>
      <Button onClick={props.onStartTimer}>start timer</Button>
    </Container>
  );
};

export default Body;
