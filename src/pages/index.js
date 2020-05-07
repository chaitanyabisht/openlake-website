import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Container from "@material-ui/core/Container";

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
      <h1>Welcome to Open Lake</h1>
    </div>

    <Container maxWidth="lg">
      <h1>Everyone Benefits</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ex
        unde veniam fugiat deleniti iusto, perferendis voluptatibus laborum
        optio totam ad? Minima architecto reprehenderit rerum autem fugiat unde
        eum dicta!
      </p>
      <div
        className="images"
        style={{ display: "flex", flexFlow: "row nowrap" }}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores
          sint ad nesciunt tempora cumque itaque sed reprehenderit libero id,
          repellendus laborum?
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores
          sint ad nesciunt tempora cumque itaque sed reprehenderit libero id,
          repellendus laborum?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores
          sint ad nesciunt tempora cumque itaque sed reprehenderit libero id,
          repellendus laborum?
        </p>

        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
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
      <h1>2,000 Projects and counting</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        rem id labore inventore, deserunt autem, ab expedita odio delectus ullam
        recusandae in eveniet eius at architecto vero esse! Modi, quisquam.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
