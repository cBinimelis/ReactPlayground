import { useState } from "react";
import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  /*
  const [isLoading, setIsLoading] = useState(false);
  const handleCLick = () => setIsLoading(!isLoading);

  const list: string[] = ["Goku", "Ichigo", "Luffy"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };


  return (
    <Card>
      <CardBody title={"Hola Mundo!!!"} text={"El texto del componente"} />
      {list.length ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "Sin elementos para mostrar"
      )}
      <Button isLoading={isLoading} onClick={handleCLick}>
        Hola Mundo
      </Button>
    </Card>
  );
  */

  const [data, setData] = useState(["Goku", "Ichigo", "Luffy"]);

  const minionClick = (option: boolean) => {
    if (option) setData([...data, "Minion"]);
    else setData(data.slice(0, -1));
  };

  return (
    <Card>
      <Button onClick={() => minionClick(true)}>Agregar</Button>
      <Button onClick={() => minionClick(false)}>Eliminar</Button>

      <List data={data}></List>
    </Card>
  );
}

export default App;
