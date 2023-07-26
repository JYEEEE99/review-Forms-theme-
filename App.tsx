import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: ${props => props.theme.bgColor}
`;
const H1 = styled.h1`
  color: ${props => props.theme.textColor}
`;
function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}
interface DummyProps {
  text:string;
  active?:boolean;
}
function App() {
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {}
  return (
    <div>
    <Container>
      <Dummy active text="Hello" />
      <form>
      <button onClick={onClick}>Click me</button>
      </form>
     </Container> 
    </div>
  );
}
export default App;
