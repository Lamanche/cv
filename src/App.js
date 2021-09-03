import { lazy, Suspense, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { data, DataContext } from "./context/DataContext";
import theme from "./context/ThemeContext";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  CircularProgress,
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
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-206695651-1";
ReactGA.initialize(TRACKING_ID);

const Input = lazy(() => import("./components/input/Input"));
const Output = lazy(() => import("./components/output/Output"));

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 1rem 3rem;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.background};

  @media (max-width: 425px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1175px) {
    flex-direction: column;
    align-items: center;
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

const Spinner = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    padding: 12px;
    color: rgba(0, 0, 0, 0.54);
  }
`;

function App() {
  const [userData, setUserData] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  function printDocument() {
    setLoading(true);
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 298);
      pdf.save("CV.pdf");
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
          <Header />
          <ContentWrapper>
            <Suspense fallback={<Spinner />}>
              <Input />
            </Suspense>
            <Suspense fallback={<Spinner />}>
              <Output />
            </Suspense>
          </ContentWrapper>
          <Footer />

          <DownloadBtn>
            {loading === true ? (
              <Spinner />
            ) : (
              <Tooltip title='Lae CV alla'>
                <IconButton onClick={printDocument}>
                  <SvgIcon
                    style={{ fontSize: 45 }}
                    component={DownloadPdf}
                    viewBox='0 0 200 200'
                  />
                </IconButton>
              </Tooltip>
            )}
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
