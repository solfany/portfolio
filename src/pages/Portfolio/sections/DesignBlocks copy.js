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
  background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)", // Instagram gradient
  borderRadius: "10px",
  width: "70%",
  height: "60%",
  color: "white",
  border: "none",
  padding: theme.spacing(1, 3),
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.1)",
  textTransform: "none",
  fontWeight: "bold",
  "&:hover": {
    background: "linear-gradient(45deg, #dd2a7b, #8134af, #515bd4, #f58529)", // Slightly shift the gradient on hover
    boxShadow: "0 3px 6px 2px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-2px)",
  },
  transition: "0.3s",
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
                <InstagramButton variant="contained" component="a" href="#">
                  <img src="#" alt={`Button ${index + 1}`} width="100%" height="100%" />
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
                Project
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
