import Link from "next/link"
import Image from "next/image"

const Beer = ({ beer: { title, ort, id } }) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{ort}</td>
      </tr>
    </>
  )
}

export default Beer
