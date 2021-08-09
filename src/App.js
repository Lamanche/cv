import { createRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Input from "./components/input/Input";
import Output from "./components/output/Output";
import { data, DataContext } from "./context/DataContext";
import theme from "./context/ThemeContext";
import ReactToPdf from "react-to-pdf";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }
`;

function App() {
  const [userData, setUserData] = useState(data);
  const pdf = createRef();

  return (
    <DataContext.Provider value={[userData, setUserData]}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Input />
          <Output innerRef={pdf} />

          <ReactToPdf targetRef={pdf} filename='div-blue.pdf'>
            {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
          </ReactToPdf>
          
        </Wrapper>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
