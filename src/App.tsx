import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Naruto", "Luffy"];
  return (
    <Card>
      <CardBody title={"Hola Mundo!!!"} text={"El texto del componente"} />
      <List data={list} />
    </Card>
  );
}

export default App;
