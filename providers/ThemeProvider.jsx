import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      main: "#e5e7eb",
      dark: "#263355",
      light: "#009bd2",
    },
    secondary: {
      main: "#ec4899",
    },
    background: "#1f2937",
  },
  font: {
    body: {
      regular: '"Inter", "Arial", "Helvetica", "sans-serif"',
      medium: '"Inter", "Arial", "Helvetica", "sans-serif"',
      light: '"Inter", "Arial", "Helvetica", "sans-serif"',
      bold: '"Inter", "Arial", "Helvetica", "sans-serif"',
    },
    title: {
      bold: '"Gilroy Bold", "Arial", "Helvetica", "sans-serif"',
      extrabold: '"Gilroy Extra Bold", "Arial", "Helvetica", "sans-serif"',
      light: '"Gilroy light", "Arial", "Helvetica", "sans-serif"',
      regular: '"Gilroy regular", "Arial", "Helvetica", "sans-serif"',
      semibold: '"Gilroy semi bold", "Arial", "Helvetica", "sans-serif"',
    },
  },
  sectionPadding: `
    padding: 6rem 2.5rem;
    @media (max-width: 1920px){
      padding: 5rem 2rem;
    };
    @media (max-width: 1316px){
      padding: 4rem 14rem;
    };
    @media (max-width: 1050px){
      padding: 3.5rem 4rem;
    };
    @media (max-width: 600px){
      padding: 3rem 3rem;
    };
    @media (max-width: 480px){
      padding: 2.5rem 1.5rem;
    };
    `,
  elevation: {
    sm: "box-shadow: 0px 4px 10px -7px rgba(0,0,0,0.5);",
    md: "box-shadow: 0px 4px 10px -5px rgba(0,0,0,0.5);",
    lg: "box-shadow: 0px 20px 20px -15px rgba(0,0,0,0.5);",
  },
  breakpoint: {
    xs: "(max-width: 480px)",
    sm: "(max-width: 600px)",
    md: "(max-width: 1050px)",
    lg: "(max-width: 1316px)",
    xl: "(max-width: 1920px)",
  },
  borderRadius: "border-radius: 0.25rem;",
  scrollbar: `::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #4d6bff;
    }
    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }`,
};

const ThemeProviderWithTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default ThemeProviderWithTheme;
