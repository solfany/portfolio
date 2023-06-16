/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// Routes
import routes from "routes";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/main.png";
import bgImage2 from "assets/images/apple-icon.png";
// import borders from "assets/theme/base/borders";

function Contact() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "default",
        // }}
        transparent
        light
      />

      <MKBox
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              기술 스택
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We&apos;re constantly trying to express ourselves and actualize our dreams. If you
              have the opportunity to play this game
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={5}
            position="relative"
            px={0}
            sx={{
              backgroundImage: ({ palette: { gradients }, functions: { rgba, linearGradient } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage2})`,
              backgroundSize: "cover",
            }}
          >
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                <MKTypography variant="h3" color="white" mb={1}>
                  Contact Information
                </MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                  Fill up the form and our Team will get back to you within 24 hours.
                </MKTypography>
                <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    (+40) 772 100 200
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    hello@creative-tim.com
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    Dyonisie Wolf Bucharest, RO 010458
                  </MKTypography>
                </MKBox>
                <MKBox mt={3}>
                  <MKButton variant="text" color="white" size="large" iconOnly>
                    <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" color="white" size="large" iconOnly>
                    <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" color="white" size="large" iconOnly>
                    <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" color="white" size="large" iconOnly>
                    <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={7}>
            <MKBox component="form" p={2} method="post">
              <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                <MKTypography variant="h2" mb={1}>
                  Say Hi!
                </MKTypography>
                <MKTypography variant="body1" color="text" mb={2}>
                  We&apos;d like to talk with you.
                </MKTypography>
              </MKBox>
              <MKBox pt={0.5} pb={3} px={3}>
                <Grid container>
                  <Grid item xs={12} pr={1} mb={6}>
                    <MKInput
                      variant="standard"
                      label="My name is"
                      placeholder="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} pr={1} mb={6}>
                    <MKInput
                      variant="standard"
                      label="I'm looking for"
                      placeholder="What you love"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} pr={1} mb={6}>
                    <MKInput
                      variant="standard"
                      label="Your message"
                      placeholder="I want to say that..."
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      multiline
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  md={6}
                  justifyContent="flex-end"
                  textAlign="right"
                  ml="auto"
                >
                  <MKButton variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Contact;
