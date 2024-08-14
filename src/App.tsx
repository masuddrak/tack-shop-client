import "./App.css";
import Counter from "./components/Counter";
import EventCreate from "./components/EventCreate";
import PostCard from "./components/PostCard";
import UninDataType from "./components/UninDataType";

const user = {
  name: "sakibal",
  age: 23,
  lang: ["bangla", "english"],
};

function App() {
  return (
    <>

      <PostCard  title="lorem text some type" disabled={true} user={user} btnStyle={"text-3xl"}></PostCard>
      <UninDataType name={"demo"} ></UninDataType>
      <Counter></Counter>
      <EventCreate></EventCreate>
    </>
  );
}

export default App;
