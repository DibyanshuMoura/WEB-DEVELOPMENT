import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [card, setCard] = useState([]);
  const [header, setHeader] = useState("");
  const [details, setDetails] = useState("");
  return (
    <div className="min-h-screen h-auto bg-[#151A1F] text-white p-10 flex gap-20 flex-col md:flex-row">
      <form
        className="flex items-start flex-col gap-5 w-full md:w-1/3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!header.trim() || !details.trim()) return;
          setCard(prev => {
            return [...prev, { id: Date.now(), header: header, detail: details }];
          });
          setDetails("");
          setHeader("");
        }}
      >
        <input
          type="text"
          placeholder="Enter Task Heading"
          className="px-5 border-2 py-2 rounded-md w-full font-medium outline-none"
          value={header}
          onChange={(e) => {
            setHeader(e.target.value);
          }}
        />
        <textarea
          type="text"
          className="px-5 border-2 py-2 rounded-lg h-32 w-full font-medium outline-none"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white text-black rounded-sm px-5 py-2 w-full font-medium outline-none">
          Add Note
        </button>
      </form>
      <div className="flex flex-wrap gap-6 md:gap-3 w-full md:w-2/3">
        {card.map((val, idx) => {
          return <Card key={val.id} head={val.header} detail={val.detail} id={idx} card={card} setCard={setCard}/>;
        })}
      </div>
    </div>
  );
};

export default App;
