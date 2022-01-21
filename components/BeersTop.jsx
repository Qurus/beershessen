import Link from "next/link"
import Image from "next/image"
import bierImage from "../public/bier.jpeg"
const BeersTop = ({ beerstop: { bier, herkunft, bewertungInt, votes } }) => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{bier}</h1>
            <h2>{herkunft}</h2>
          </div>
          <div className="flip-card-back">
            <p>Votes: {votes}</p>
            <p>International Ranks: {bewertungInt}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BeersTop
