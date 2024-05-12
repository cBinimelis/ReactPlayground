import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const [index, setindex] = useState(0);
  const handleCLick = (e: string, i: number) => {
    console.log(e);
    setindex(i);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
          onClick={() => handleCLick(elemento, i)}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
