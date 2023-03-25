import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { itemInfo, serverStatus } from "growtopia-api";

import { RxMagnifyingGlass } from "react-icons/rx";

function Home() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [server, setServer] = useState([]);

  async function getData() {
    const res = await itemInfo(value);
    setData(res);
  }

  useEffect(() => {
    const getServerData = async () => {
      const serverData = await serverStatus();
      setServer(serverData);
    };

    getServerData();
  }, []);

  return (
    <Layout>
      {data ? (
        <>
          <div className="infocontainer">
            <RxMagnifyingGlass />

            <input onChange={(e) => setValue(e.target.value)} />
            <button onClick={getData}>Search </button>
            <div className="nameimg">
              <img src={data.Sprite} alt="bilder" /> {data.Name}
            </div>
            <div className="properties">
              <h1>Properties</h1>
              {data.Properties || data.Properties === 0
                ? data.Properties
                : "N/A"}
            </div>
            <div className="description">
              <h1>Description</h1>
              {data.Properties || data.Description === 0
                ? data.Description
                : "N/A"}
            </div>

            <div className="colorcontainer">
              <h1>Colors</h1>
              <div
                className="colors"
                style={{
                  background: data.Color && data.Color[0],
                }}
              >
                {data.Color && data.Color[0]}
              </div>
              <div
                className="colors1"
                style={{
                  background: data.Color && data.Color[1],
                }}
              >
                {data.Color && data.Color[1]}
              </div>
            </div>
            <div className="rarity">
              <h1>Rarity</h1>{" "}
              {data.Rarity ? "(Rarity:" + data.Rarity + ")" : "N/A"}
            </div>
            <div className="type">
              <h1> Type</h1>
              {data.Type ? data.Type : "N/A"}
            </div>
            <div className="recipe">
              <h1>Recipe</h1>
              {data.Recipe ? data.Recipe.recipe : "N/A"}
            </div>
            <div className="splice">
              <h1>Splice</h1>
              {data.Splice ? data.Splice : "N/A"}
            </div>
            <div className="matches">
              <h1>Matches</h1>
              {data.matches
                ? data.matches.map((match) => {
                    return <h2>{match}</h2>;
                  })
                : "N/A"}
            </div>
          </div>
          <div className="server">
            {" "}
            <h1>Server</h1>
            <div className="date">{server.date}</div>
            <div className="time">{server.time}</div>
            <div className="playercount"> {server.playerCount}</div>
            <div className="wotdname">{server.wotdName}</div>
            <div className="wotdurl">{server.wotdURL} </div>
          </div>
        </>
      ) : (
        <div className="infocontainer">No Item By That Name</div>
      )}
    </Layout>
  );
}

export default Home;
