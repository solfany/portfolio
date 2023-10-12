import React, { useState } from "react";
// 나의 기술 스택
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import "./css/index.css";

// Images
// import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  const [hoverId, setHoverId] = useState(null);

  const handleMouseOver = (id) => {
    setHoverId(id);
  };

  const handleMouseOut = () => {
    setHoverId(null);
  };

  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      {/* 기술스택 */}
      <Container>
        <Grid container item xs={7} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h2" mt={6} mb={3}>
              <h2>My Skills</h2>
              <h5 className="title"> — what i know —</h5>
            </MKTypography>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={4} lg={1.7}>
                <Tooltip title={<h4>JavaScript 기반의 컴포넌트 설계를 좋아합니다. </h4>}>
                  <MKBox
                    opacity={hoverId === 1 ? 1 : 0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    onMouseOver={() => handleMouseOver(1)}
                    onMouseOut={handleMouseOut}
                    style={{
                      transition: "transform 0.3s, opacity 0.3s", // 큰따옴표로 변경
                    }}
                  >
                    <MKBox
                      component="img"
                      src="https://github.com/solfany/portfolio/assets/123814718/58d41ad5-6c30-401e-acf0-b4df63639e9c"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={1.7}>
                <Tooltip title={<h4>React를 활용한 SPA를 구축할 수 있습니다.</h4>}>
                  <MKBox
                    opacity={hoverId === 2 ? 1 : 0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    onMouseOver={() => handleMouseOver(2)}
                    onMouseOut={handleMouseOut}
                    style={{
                      transition: "transform 0.3s, opacity 0.3s",
                    }}
                  >
                    <MKBox
                      component="img"
                      src="https://github.com/solfany/portfolio/assets/123814718/69a355dc-41de-4d1c-abdb-f76f9483f78d"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={1.7}>
                <Tooltip title={<h4>Java를 활용한 CRUD 구현에 익숙합니다</h4>}>
                  <MKBox
                    opacity={hoverId === 3 ? 1 : 0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    onMouseOver={() => handleMouseOver(3)}
                    onMouseOut={handleMouseOut}
                    style={{
                      transition: "transform 0.3s, opacity 0.3s",
                    }}
                  >
                    <MKBox
                      component="img"
                      src="https://github.com/solfany/portfolio/assets/123814718/6652bd30-dd65-4a25-92c6-30181fbb7ada"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={1.7}>
                <Tooltip
                  title={
                    <h4>Spring 프레임워크를 이용한 클라이언트 통신 경험을 보유하고 있습니다.</h4>
                  }
                >
                  <MKBox
                    opacity={hoverId === 4 ? 1 : 0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    onMouseOver={() => handleMouseOver(4)}
                    onMouseOut={handleMouseOut}
                    style={{
                      transition: "transform 0.3s, opacity 0.3s",
                    }}
                  >
                    <MKBox
                      component="img"
                      src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmJKEh%2FbtqH2ea5K9D%2F8NpyE8MoHMTGDUMC55gYf0%2Fimg.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={1.7}>
                <Tooltip title={<h4>MySQL을 활용하여 데이터를 관리할 수 있습니다.</h4>}>
                  <MKBox
                    opacity={hoverId === 5 ? 1 : 0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    onMouseOver={() => handleMouseOver(5)}
                    onMouseOut={handleMouseOut}
                    style={{
                      transition: "transform 0.3s, opacity 0.3s",
                    }}
                  >
                    <MKBox
                      component="img"
                      src="https://github.com/solfany/portfolio/assets/123814718/19814849-bb03-4eb2-8b14-d093789b369a"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={1.7}>
                <Tooltip
                  title={
                    <h4>헤로쿠를 이용한 서버 배포 경험을 보유하며, AWS 교육을 이수하였습니다.</h4>
                  }
                >
                  <MKBox
                    opacity={hoverId === 6 ? 1 : 0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    onMouseOver={() => handleMouseOver(6)}
                    onMouseOut={handleMouseOut}
                    style={{
                      transition: "transform 0.3s, opacity 0.3s",
                    }}
                  >
                    <MKBox
                      component="img"
                      src="https://github.com/solfany/portfolio/assets/123814718/8420ae88-77c3-4bfb-9151-d38a4f065973"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={1.7}>
                <Tooltip title={<h4>Git Bash와 GitKraken을 활용한 팀 협업에 능숙합니다.</h4>}>
                  <MKBox
                    opacity={hoverId === 7 ? 1 : 0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    onMouseOver={() => handleMouseOver(7)}
                    onMouseOut={handleMouseOut}
                    style={{
                      transition: "transform 0.3s, opacity 0.3s",
                    }}
                  >
                    <MKBox
                      component="img"
                      src="https://github.com/solfany/portfolio/assets/123814718/b1db07df-d845-4ef6-8225-9bd3a09ff481"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Download;
