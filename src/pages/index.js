import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { Container, Typography, Paper } from "@material-ui/core";


export default function IndexPage() {

  return (
    <Layout>
    <SEO title="Home" />
    <div
      style={{
        height: "500px",
        boxSizing: "border-box",
        padding: "50px",
      }}
    >
      <Typography variant="h1">Open Lake</Typography>

      <Typography paragraph>
        Connecting Students to the World of Open Source Development.
      </Typography>
    </div>

    <Paper elevation="0">
      <Container maxWidth="lg" style={{ padding: "3rem" }}>
        <Typography variant="h4" gutterBottom>
          What is OpenLake
        </Typography>

        <Typography paragraph >
          As the world is moving towards a connected society. The communities
          driving the development of open source technologies are becoming more
          prominent. Numerous software giants like Google and Microsoft are
          embracing the idea of Open Source Software. With Microsoft's Campaign:
          “ Microsoft ❤️ Open Source ”, the importance of open source is visible
          to the world.
        </Typography>

        <Typography paragraph>
          For example, Tensorflow and Pytorch are 2 very important Machine
          learning libraries that heavily govern the advancements in Artificial
          Intelligence today, both of these are driven and developed by open
          source communities in collaboration with corporate firms.
        </Typography>

        <Typography paragraph>
        With the importance of Open Source made crystal clear. There is one problem that needs to be addressed: Connecting people with Open Source Communities. The idea of OpenLake is to act as a bridge between Students and the World of Open Source Development.
        </Typography>

        <div style={{ display: "flex", flexFlow: "row nowrap" }}>
          {/* <Typography paragraph>
            
          </Typography> */}
          {/* 
          <Typography paragraph></Typography> */}
        </div>
      </Container>
    </Paper>

    <div
      className="explore-projects"
      style={{
        textAlign: "center",
        padding: "3rem",
      }}
    >
      <Typography variant="h3" gutterBottom>
        2,000 Projects and counting
      </Typography>
      <Typography paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores
        sint ad nesciunt tempora cumque itaque sed reprehenderit libero id,
        repellendus laborum?
      </Typography>
    </div>
  </Layout>

  )
}


