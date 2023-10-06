// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Portfolio page sections
// ---- 수치----------
// import Counters from "pages/Portfolio/sections/Counters";
import Information from "pages/Portfolio/sections/Information";
import DesignBlocks from "pages/Portfolio/sections/DesignBlocks";

// import Pages from "pages/Portfolio/sections/Pages";
// import Testimonials from "pages/Portfolio/sections/Testimonials";
import Download from "pages/Portfolio/sections/Download";
import MKButton from "components/MKButton";

// Portfolio page components
// import BuiltByDevelopers from "pages/Portfolio/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/8.png";
import "./sections/css/index.css";

// import MKButton from "components/MKButton";
// import Link from "@mui/material/Link";

// import Profile from "./Profile";
// Sections components
// import View from "layouts/sections/components/View";

// Modals page components
// import SimpleModal from "layouts/sections/attention-catchers/modals/components/SimpleModal";

// Modals page components code
// import simpleModalCode from "layouts/sections/attention-catchers/modals/components/SimpleModal/code";
// author 자기소개 페이지
import TypeAsyncComponent from "./sections/TypeAsyncComponent";
import "./index.css";

function handleButtonClick() {
  const confirmation = window.confirm("김솔비의 github 로 이동하시겠습니까? 🫠");
  if (confirmation) {
    window.location.href = "https://github.com/solfany";
  }
  // 아니오를 클릭했을 때 아무런 작업도 수행하지 않습니다.
}

function Portfolio() {
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
      {/* -------- */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          position: "relative", // 추가
          "::before": {
            // 추가
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "rgba(50, 50, 50, 0.6)", // 회색 오버레이
            pointerEvents: "none",
          },
        }}
      >
        {/* ---- */}

        <Container className="mainTitle">
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", alignItems: "baseline", textAlign: "left", marginLeft: "-1px" }}
            className="mainTitle"
          >
            <MKTypography
              variant="h1"
              opacity={0.9}
              color="white"
              sx={({ breakpoints }) => ({
                [breakpoints.down("md")]: {
                  fontSize: "2.5rem",
                },
              })}
              className="mainTitle"
            >
              <h2>김솔비</h2>
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.9}
              mt={1}
              mb={3}
              sx={{
                fontSize: "2rem", // 직접 크기 설정
              }}
            >
              <h4>의 포트폴리오를 방문해주셔서 감사합니다.</h4>
            </MKTypography>
            <MKTypography className="mampel-container" color="white" opacity={0.9}>
              <TypeAsyncComponent /> {/* Add this line to include your component */}
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
            {/* <MKTypography variant="h6" color="white" mt={8} mb={1}>
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
            </MKBox> */}
          </Grid>
        </Container>
      </MKBox>
      {/* <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: "white", // 수정된 부분
          // border: 3,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* 자기소개 카드 */}
        <Information />
        <Download />

        {/* 프로젝트 */}
        <DesignBlocks />
        {/* 게시판 입니당 */}
        {/* <Counters /> */}

        {/* 기술 블로그 */}
        <MKTypography variant="h2" fontWeight="bold" className="BlogTitle">
          <h2>Blog</h2>
          <h5>— What did you study? —</h5>
        </MKTypography>
        <MKBox component="section" py={10}>
          <Container>
            <iframe
              src="https://solfany.github.io/"
              style={{ width: "100%", height: "500px", border: "none" }}
              title="solfany-blog"
            />
          </Container>
        </MKBox>
        <MKTypography variant="h2" fontWeight="bold" className="BlogTitle">
          <MKButton onClick={handleButtonClick} size="large" color="dark">
            Github 바로가기
            <img
              src="https://github.com/solfany/Spring-board-project/assets/123814718/a8324170-e54a-4651-8516-c45fd50802e2"
              alt="Github Icon"
              style={{ height: "1.2em", marginLeft: "8px" }}
            />
          </MKButton>
        </MKTypography>
        <MKBox component="section" py={3}></MKBox>
        {/* 모달입니다 */}

        {/* <Container> */}
        {/* <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container> */}
        {/* <Testimonials /> */}
        {/* <MKBox pt={18} pb={6}> */}
        {/* <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container> */}
        {/* </MKBox> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Portfolio;
