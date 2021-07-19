import { useState } from "react";
import styled from "styled-components";
import Input from "./components/input/Input";
import Output from "./components/output/Output";
import { data, DataContext } from "./context/DataContext";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
`;

function App() {
  const [userData, setUserData] = useState(data);

  return (
    <DataContext.Provider value={[userData, setUserData]}>
      <Wrapper>
        <Input />
        <Output />
      </Wrapper>
    </DataContext.Provider>
  );
}

export default App;
