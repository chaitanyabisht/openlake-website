import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { grey } from "@material-ui/core/colors";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Everyone Benefits</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ex unde veniam fugiat deleniti iusto, perferendis voluptatibus laborum optio totam ad? Minima architecto reprehenderit rerum autem fugiat unde eum dicta!</p>
    <div className="images" style={{display: "flex", flexFlow: "row nowrap"}}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores sint ad nesciunt tempora cumque itaque sed reprehenderit libero id, repellendus laborum?</p>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores sint ad nesciunt tempora cumque itaque sed reprehenderit libero id, repellendus laborum?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur veritatis quos omnis, soluta reiciendis aliquid, in nostrum asperiores sint ad nesciunt tempora cumque itaque sed reprehenderit libero id, repellendus laborum?</p>
    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    </div>
    <Link to="/page-2/">Go to page 2</Link>


  </Layout>
);

export default IndexPage;
