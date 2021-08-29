import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Input from "./components/input/Input";
import Output from "./components/output/Output";
import { data, DataContext } from "./context/DataContext";
import theme from "./context/ThemeContext";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { Fab, makeStyles } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 1175px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }
`;

function App() {
  const [userData, setUserData] = useState(data);

  function printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("CV.pdf");
    });
  }

  // scroll start

  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

  function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );

      if (anchor) {
        anchor.scrollIntoView({ top: 0, behavior: "smooth", block: "center" });
      }
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role='presentation' className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
  };

  // scroll end

  return (
    <DataContext.Provider value={[userData, setUserData]}>
      <ThemeProvider theme={theme}>
        <Wrapper id="back-to-top-anchor">
          <Input />
          <Output />
          <button onClick={printDocument}>Print PDF</button>

          <ScrollTop>
            <Fab color='secondary' size='small' aria-label='scroll back to top'>
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Wrapper>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
