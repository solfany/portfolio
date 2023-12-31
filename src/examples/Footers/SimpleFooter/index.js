// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

function SimpleFooter({ company, light }) {
  const { href, name } = company;
  const { size } = typography;

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color="white"
          fontSize={size.sm}
        >
          &copy; {new Date().getFullYear()}, made with
          <MKBox fontSize={size.md} color={light ? "white" : "white"} mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </MKBox>
          by
          <Link href={href} target="_blank">
            <MKTypography variant="button" fontWeight="medium" color={light ? "white" : "white"}>
              &nbsp;{name}&nbsp;
            </MKTypography>
          </Link>
          for a better portfolio 📝
        </MKBox>
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 0,
            mb: 0,
            p: 5,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        ></MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  company: { href: "https://github.com/solfany", name: "solfany" },
  light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  light: PropTypes.bool,
};

export default SimpleFooter;
