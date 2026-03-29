import axios from 'axios'
import {useState} from 'react'

const App = () => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const {data} = await axios.get("https://picsum.photos/v2/list");
    console.log(data);

    setData(data);
  }
  return (
    <div>
      <button onClick={getdata}>Getdata</button>
      <div>
        {data.map((elem, idx) => {
          return <h3>Hello {elem.author}, {idx}</h3>
        })}
      </div>
    </div>
  );
};

export default App;
