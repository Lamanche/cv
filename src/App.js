import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Input from "./components/input/Input";
import Output from "./components/output/Output";
import { data, DataContext } from "./context/DataContext";
import theme from "./context/ThemeContext";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  Fab,
  IconButton,
  makeStyles,
  SvgIcon,
  Tooltip,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import DescriptionIcon from "@material-ui/icons/Description";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import { ReactComponent as DownloadPdf } from "./images/pdf-download.svg";

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

const DownloadBtn = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;

  @media (max-width: 425px) {
    top: 0;
    right: 0;
  }
`;

function App() {
  const [userData, setUserData] = useState(data);

  function printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      // pdf.output('dataurlnewwindow');
      pdf.save("CV.pdf");
    });
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: theme.spacing(8),
      right: theme.spacing(2),
    },
    doc: {
      position: "fixed",
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
        anchor.scrollIntoView({ behavior: "smooth", block: "center" });
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

  function ScrollToDocument(props) {
    const { children } = props;
    const classes = useStyles();

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#divToPrint"
      );
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    return (
      <div onClick={handleClick} role='presentation' className={classes.doc}>
        {children}
      </div>
    );
  }

  ScrollToDocument.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <DataContext.Provider value={[userData, setUserData]}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Input />

          <Output />

          <DownloadBtn>
            <Tooltip title='Lae CV alla'>
              <IconButton onClick={printDocument}>
                <SvgIcon
                  style={{ fontSize: 45 }}
                  component={DownloadPdf}
                  viewBox='0 0 200 200'
                />
              </IconButton>
            </Tooltip>
          </DownloadBtn>

          <ScrollTop>
            <Fab color='secondary' size='small' aria-label='scroll back to top'>
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
          <ScrollToDocument>
            <Fab color='secondary' size='small' aria-label='scroll to document'>
              <DescriptionIcon />
            </Fab>
          </ScrollToDocument>
        </Wrapper>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
