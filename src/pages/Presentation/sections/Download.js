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
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h2" mt={6} mb={3}>
              <h2>My Skills</h2>
              <h5 className="title"> — what i know —</h5>
            </MKTypography>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title={<h4>java를 이용한 CRUD 구현이 가능합니다.</h4>}>
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
                      src="https://github.com/solfany/solfany.github.io/assets/123814718/dfff7d21-3f13-406a-b983-b6305e313190"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={<h4>java를 이용한 CRUD 구현이 가능합니다.</h4>}>
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
                      src="https://github.com/solfany/solfany.github.io/assets/123814718/14791da6-32d1-43fa-8520-6058290da3d4"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={<h4>java를 이용한 CRUD 구현이 가능합니다.</h4>}>
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
                      src="https://github.com/solfany/solfany.github.io/assets/123814718/a39b6315-af3f-4caa-b04f-52a92472e3ce"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={<h4>java를 이용한 CRUD 구현이 가능합니다.</h4>}>
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
              <Grid item xs={4} lg={2}>
                <Tooltip title={<h4>java를 이용한 CRUD 구현이 가능합니다.</h4>}>
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
                      src="https://github.com/solfany/solfany.github.io/assets/123814718/bfe5566d-d529-4ed2-9e5f-51caa2f62565"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title={<h4>java를 이용한 CRUD 구현이 가능합니다.</h4>}>
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
                      src="https://github.com/solfany/solfany.github.io/assets/123814718/2643b725-7cf0-4f4e-aa1c-36c12c8ec4aa"
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
