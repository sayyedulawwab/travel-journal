import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <>
      <Navbar />
      {cards}
    </>
  );
}

export default App;
