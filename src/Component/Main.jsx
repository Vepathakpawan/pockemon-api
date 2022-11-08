import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pockeinfo from "./Pokeinfo";
import axios from "axios";

const Main = () => {

    const [PokcyData , setPokcyData] = useState([]);
    const [loading , setLoading]=  useState(true);
    const [url , setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

const pokeFun=async()=>{
    setLoading(true)
    const res=await axios.get(url);
    console.log(res);
}


    useEffect(() =>{
pokeFun();
    }, [url]) 


  return (
    <>
      <div className="container card-wrapper">
        <div className="card-section">
<Card />
<Card />
<Card />
<Card />
<Card />

<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<div className="btn-group">
    <button>Previous</button>
    <button>next</button>

</div>
        </div>
        <div className="pock-info">
<Pockeinfo />

        </div>
      </div>
    </>
  );
};

export default Main;
