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
    link:"https://docs.google.com/document/d/e/2PACX-1vQO3liuUAq0T9MlmXD9pw__beJ_YeDJiLtUp0-yHgEvLDH7SU0_u51MgfgFWvirn94VT72yHAOocgO6/pub"
    },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Use Cases",
    title: "Use Cases",
    text:
      "",
    link:"https://docs.google.com/document/d/e/2PACX-1vSTvxCdoQVnzVF8na7W444X9rnIgfUvpMn31UiulpXCq_fNYChHmSJNYciLuhQYfXI5vw9M9Ro3XGtR/pub"
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Glossary",
    title: "Glossary",
    text:
      "",
    link:"https://docs.google.com/document/d/e/2PACX-1vQZkNw7Q9A1QHM8FXAtS_R5O-O1W7imIyPsWuXwgiqzHnHftSQuoFPSBM5cDj0Wo_xzoCu5fueYVWck/pub"
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "WARs",
    title: "WARs",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
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
