import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Input from "./components/input/Input";
import Output from "./components/output/Output";
import { data, DataContext } from "./context/DataContext";
import theme from "./context/ThemeContext";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.background};
`;

function App() {
  const [userData, setUserData] = useState(data);

  return (
    <DataContext.Provider value={[userData, setUserData]}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Input />
          <Output />
        </Wrapper>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
