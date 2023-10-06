// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import personImg from "assets/images/person.png";
import location from "assets/images/location.png";
import email2 from "assets/images/email2.png";
// Images
import bgFront from "assets/images/solfany_portfolio.jpg";
import bgBack from "assets/images/solfany.png";
import "./css/index.css";

function Information() {
  return (
    <MKBox component="section" py={1} my={6}>
      <Container>
        <Grid container item xs={12} spacing={0} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto", order: { xs: 2, md: 1 } }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    <br />
                    <h3>저를 소개합니다.</h3>
                    <br />
                    <br />
                    <br />
                  </>
                }
              />
              <RotatingCardBack image={bgBack} />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ order: { xs: 2, md: 2 } }}>
            <MKTypography
              variant="h2"
              sx={({ breakpoints }) => ({
                [breakpoints.down("md")]: {
                  fontSize: "2rem",
                },
              })}
              className="mainTitle"
            >
              <h2>About Me</h2>
            </MKTypography>
            <h2 className="title"> — who i am —</h2>
            <div className="locationEmail">
              <img src={personImg} alt="Person" className="informationIcon" />
              <span>김솔비</span>
            </div>
            <div className="locationEmail">
              <img src={location} alt="Location" className="informationIcon" />
              <span>경기도 용인시</span>
            </div>
            <div className="locationEmail">
              <img src={email2} alt="Email" className="informationIcon" />
              <a href="mailto:solfany1999@gmail.com">solfany1999@gmail.com</a>
            </div>
            <br />
            <h5>어렵고 힘든 일도 끝까지 시도하는 신입 개발자 김솔비입니다. </h5>
            <h5>부단히 노력해 반드시 성공하는 개발자가 되고 싶습니다. </h5>
            <h5>끝까지 같이 갈 수 있는 개발자로 멋진 파트너가 되어줄 곳을 찾습니다. 📝 </h5>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
