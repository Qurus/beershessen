import React from "react"
import { baseUrl, fetchApi } from "../utils/fetchApi"
import Beer from "../components/Beer"
import BeersTop from "../components/BeersTop"
export default function Home({ beersHessen, beersTop }) {
  return (
    <>
      <div>
        <h1>Home</h1>
        <table>
          <tr>
            <th>Name of Beer</th>
            <th>City</th>
          </tr>
          {beersHessen.map((beer) => (
            <Beer beer={beer} key={beer.id} />
          ))}
        </table>
      </div>
      <div>
        <h1>Top 10</h1>
        <div className="card">
          {beersTop.map((beerstop) => (
            <BeersTop beerstop={beerstop} key={beerstop.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const beersHessen = await fetchApi(`${baseUrl}/brews/hessen`)
  const beersTop = await fetchApi(`${baseUrl}/top10beers`)

  return {
    props: {
      beersHessen,
      beersTop,
    },
  }
}
