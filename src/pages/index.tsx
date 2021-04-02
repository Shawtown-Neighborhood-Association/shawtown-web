import * as React from "react"
import { Hero } from "../components/Hero";
import { Layout } from '../layout/Layout';

// markup
const IndexPage = () => {

  const items = [];
  for (var i = 0; i < 100; i++) {
      items.push(
          <li key={i}>{i}</li>
      )
  }

  return (
    <Layout title="Brad Candell">
      <>
        <Hero title="Contact Us" lead="Get in touch with us" />
        <div className="container">

          <ul>
            {items}
          </ul>
        </div>
      </>
    </Layout>
  )
}

export default IndexPage
