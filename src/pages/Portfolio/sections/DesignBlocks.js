// import React, { useState } from "react";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Portfolio page components
import ExampleCard from "pages/Portfolio/components/ExampleCard";

// Data
import data from "pages/Portfolio/sections/data/designBlocksData";
import "./css/index.css";

function DesignBlocks() {
  // const [hoveredItem, setHoveredItem] = useState(null);
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 12 }} key={title}>
      <Grid item xs={12} lg={1.5}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            <h3>{title}</h3>
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <h4> {description} </h4>
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro, text }) => (
            <Grid item xs={12} md={6} sx={{ mb: 2 }} key={name}>
              <Link
                to={pro ? "/" : route}
                // onMouseOver={() => setHoveredItem(name)}
                // onMouseOut={() => setHoveredItem(null)}
              >
                <ExampleCard
                  image={image}
                  count={count}
                  pro={pro}
                  style={{
                    width: "100%",
                    // height: "14rem",
                    // opacity: hoveredItem === name ? 1 : 0.5,
                    transition: "transform 0.3s, opacity 0.3s",
                    // objectFit: "cover",
                  }}
                />
                <h4>{name}</h4>
                <h5>{text}</h5>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            <h2> Project </h2>
            <h5 className="title">— what a made —</h5>
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}
export default DesignBlocks;
