// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// // Material Kit 2 React components
// import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

// const date = new Date().getFullYear();

export default {
  brand: {
    name: "연락 수단 ",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Github",
      items: [{ name: "about us", href: "https://www.creative-tim.com/presentation" }],
    },
    {
      name: "Email",
      items: [{ name: "illustrations", href: "https://iradesign.io/" }],
    },
    {
      name: "help & support",
      items: [{ name: "contact us", href: "https://www.creative-tim.com/contact-us" }],
    },
    {
      name: "legal",
      items: [{ name: "terms & conditions", href: "https://www.creative-tim.com/terms" }],
    },
  ],
  // copyright: (
  //   <MKTypography variant="button" fontWeight="regular">
  //     All rights reserved. Copyright &copy; {date} Material Kit by{" "}
  //     <MKTypography
  //       component="a"
  //       href="https://www.creative-tim.com"
  //       target="_blank"
  //       rel="noreferrer"
  //       variant="button"
  //       fontWeight="regular"
  //     >
  //       Creative Tim
  //     </MKTypography>
  //     .
  //   </MKTypography>
  // ),
};
