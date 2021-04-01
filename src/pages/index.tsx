import * as React from "react"
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
        <div className="container">
          <h1>Home Page</h1>
          <ul>
            {items}
          </ul>
        </div>
      </>
    </Layout>
  )
}

export default IndexPage
