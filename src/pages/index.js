import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { Container, Typography } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="hero"
      style={{
        backgroundColor: "#4c4c4c",
        color: "white",
        display: "flex",
        height: "500px",
        boxSizing: "border-box",
        padding: "50px",
      }}
    >
      <Typography variant="h2">Welcome to Open Lake</Typography>
    </div>

    <Container maxWidth="lg" style={{ padding: "3rem" }}>
      <Typography variant="h3" gutterBottom>
        Everyone Benefits
      </Typography>

      <Typography paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ex
        unde veniam fugiat deleniti iusto, perferendis voluptatibus laborum
        optio totam ad? Minima architecto reprehenderit rerum autem fugiat unde
        eum dicta!
      </Typography>

      <div style={{ display: "flex", flexFlow: "row nowrap" }}>
        <Typography paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores
          sint ad nesciunt tempora cumque itaque sed reprehenderit libero id,
          repellendus laborum?
        </Typography>

        <Typography paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores
          sint ad nesciunt tempora cumque itaque sed reprehenderit libero id,
          repellendus laborum?
        </Typography>
        <Typography paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores
          sint ad nesciunt tempora cumque itaque sed reprehenderit libero id,
          repellendus laborum?
        </Typography>
      </div>
    </Container>

    <div
      className="explore-projects"
      style={{
        textAlign: "center",
        backgroundColor: "#f2f2f2",
        padding: "3rem",
        color: "#444",
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
);

export default IndexPage;
