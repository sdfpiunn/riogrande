/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Button } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Vision Document",
    title: "Vision Document",
    text:
      "",
    link:"https://na-la.vercel.app/"
    },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Use Cases",
    title: "Use Cases",
    text:
      "",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Glossary",
    title: "Glossary",
    text:
      "",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "WARs",
    title: "WARs",
    text:
      "",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "deliverables" }} id="deliverables">
      <Container>
        <SectionHeader
          slogan="Deliverables"
          title="Documentations"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <><FeatureCardColumn

              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
               />
              <a href={item.link}><Button>View</Button></a>
              </>
            
          ))}
          
        </Grid>
        
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
