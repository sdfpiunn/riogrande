/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaSnapchatGhost, FaLinkedin, FaKaggle,FaQq,FaStackOverflow } from "react-icons/fa";

import Member1 from "assets/team/member-1.png";
import Member2 from "assets/team/member-2.png";
import Member3 from "assets/team/member-3.png";
import Member4 from "assets/team/member-4.png";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Alberto Gaucín",
    title: "Alberto Gaucín",
    designation: "",
    socialProfile: [
      {
        id: 1,
        name: "linkedin",
        path: "https://www.linkedin.com/in/alberto-gaucin-276413227",
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: "github",
        path: "#",
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Erika Rebollo Díaz",
    title: "Erika Rebollo Díaz",
    designation: "",
    socialProfile: [
      {
        id: 1,
        name: "linkedin",
        path: "https://www.linkedin.com/in/erika-rebollo-diaz",
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: "github",
        path: "#",
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: "Ayomide Ayowole-Obi",
    title: "Ayomide Ayowole-Obi",
    designation: "",
    socialProfile: [
      {
        id: 1,
        name: "linkedin",
        path: "https://www.linkedin.com/in/ayomide-ayowole-obi-77b9b31ba",
        icon: <FaLinkedinIn />,
      },
      {
        id: 2,
        name: "github",
        path: "#",
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: "Robby Dai",
    title: "Robby Dai",
    designation: "",
    socialProfile: [
      {
        id: 1,
        name: "QQ",
        path: "#",
        icon: <FaQq />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        // icon: <FaTwitter />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
      <section id="team" sx={{ variant: "section.team" }}>
      <Container><br/><br/><br/>
        <SectionHeader
          slogan="Our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
