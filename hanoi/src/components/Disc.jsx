/* eslint-disable react/prop-types */
export function Disc({ number, discTaken }) {

  const classHold = discTaken.number === number ? "hold" : ""

  return (
    <li className={`disk disk-${number} ${classHold}`}>
      {number}
    </li>
  )
}
