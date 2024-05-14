import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setindex] = useState(0);
  const handleCLick = (elemento: string, i: number) => {
    setindex(i);
    onSelect?.(elemento);
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
