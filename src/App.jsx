import { useEffect, useState } from "react";

function App() {
  const [block, setBlock] = useState(null);

  useEffect(() => {
    // REAL API (blocked by network)
    /*
    fetch("https://api.quaiscan.io/api?module=proxy&action=eth_blockNumber")
      .then(res => res.json())
      .then(data => {
        setBlock(parseInt(data.result, 16));
      });
    */

    // MOCK DATA FALLBACK
    setTimeout(() => {
      setBlock(1245789);
    }, 1000);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>QUAI Dashboard 🚀</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          width: "280px",
        }}
      >
        <h3>Latest Block</h3>
        <p>{block ? block : "Loading..."}</p>
        <small style={{ color: "gray" }}>
          (Live API fallback due to network restrictions)
        </small>
      </div>
    </div>
  );
}

export default App;
