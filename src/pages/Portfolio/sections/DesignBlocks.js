import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Portfolio/components/ExampleCard";
import data from "pages/Portfolio/sections/data/designBlocksData";
import { styled } from "@mui/system";
import "./css/index.css";
const InstagramButton = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(45deg, rgba(245, 133, 41, 0.1), rgba(221, 42, 123, 0.1), rgba(129, 52, 175, 0.1), rgba(81, 91, 212, 0.1))",
  borderRadius: "6px",
  width: "70%", // 수정된 부분
  height: "60%", // 수정된 부분
  color: "rgba(255, 255, 255, 0.7)",
  border: "none",
  padding: theme.spacing(1, 3),
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.1)",
  textTransform: "none",
  fontWeight: "bold",
  position: "relative", // 추가

  // ::before pseudo-element 추가
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    background:
      "linear-gradient(45deg, rgba(245, 133, 41, 0.1), rgba(221, 42, 123, 0.1), rgba(129, 52, 175, 0.1), rgba(81, 91, 212, 0.1))",
    filter: "blur(2px)", // 블러 적용
  },
  "&:hover": {
    background:
      "linear-gradient(45deg, rgba(221, 42, 123, 0.2), rgba(129, 52, 175, 0.2), rgba(81, 91, 212, 0.2), rgba(245, 133, 41, 0.1))",
    boxShadow: "0 3px 6px 2px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-2px)",
  },
  transition: "0.10s",
}));

function DesignBlocks() {
  const renderData = data.map(({ title, description, items, button }) => (
    <Grid container spacing={3} sx={{ mb: 12 }} key={title}>
      <Grid item xs={12} lg={1.5}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, text, route }) => (
            <Grid item xs={12} md={6} sx={{ mb: 2 }} key={name}>
              <Link to={route}>
                <ExampleCard
                  image={image}
                  style={{
                    width: "100%",
                    transition: "transform 0.3s",
                  }}
                />
                <h4>{name}</h4>
                <h5>{text}</h5>
              </Link>
            </Grid>
          ))}
          <Grid container spacing={1} item xs={6}>
            {button?.slice(0, 6).map((btn, index) => (
              <Grid item xs={4} md={4} key={index}>
                <InstagramButton
                  variant="contained"
                  component="a"
                  href={btn.button1}
                  style={{
                    // width: "100%",
                    // height: "100%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={btn.btnimage}
                    alt={`Button ${index + 1}`}
                    style={{
                      objectFit: "cover",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </InstagramButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={12} py={12}>
      <Container>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Grid
              container
              item
              xs={12}
              lg={6}
              direction="column"
              alignItems="center"
              sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
            >
              <MKTypography variant="h2" fontWeight="bold">
                <h2>Project</h2>
                <h5 className="title">— what I made —</h5>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
