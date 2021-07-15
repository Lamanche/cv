import styled from "styled-components";
import Input from "./components/input/Input";
import Output from "./components/output/Output";

const Wrapper = styled.div`
  min-height: 100vh;  
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <Input />
      <Output />
    </Wrapper>
  );
}

export default App;
