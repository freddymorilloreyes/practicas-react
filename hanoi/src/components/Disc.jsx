export function Disc({ number }) {
  return (
    <li className={"disk disk-" + number} datavalue={number}>
      {number}
    </li>
  );
}
