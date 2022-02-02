import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { getQueriesForElement } from "@testing-library/dom";

export default function App() {
  return (
    <div>
    <div className="App">
      <Bk
        name="Superman"
        pf="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/05/E1mgmSvWEAcHktx.jpg"
      />
      <Bk
        name="Batman"
        pf="https://www.giantfreakinrobot.com/wp-content/uploads/2021/11/robert-pattinson-the-batman-posters-01-900x1345.jpeg"
      />
      <Bk
        name="Spiderman"
        pf="https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_.jpg"
      />
      <Bk
        name="Ironman"
        pf="https://media.wired.com/photos/5bad5730311c5c02a8607e25/master/w_1600%2Cc_limit/iron_man_int_1200.jpg"
      />
    </div>
    <div classNmae="form">
         <input type="text" placeholder="name" onChange={(event) =>setName(event.target.value)}/>
         <input type="text" placeholder="pf"onChange={(event) =>setPf(event.target.value) }/>
         <input type="text" placeholder="Rating" onChange={(event) =>setRating(event.target.value) }/>
      <button onClick={()=>{
        const movie={ name:name,
                      Pf:Pf,
                      rating:rating}
      }}></button>
    </div>
  );
}

function Bk({ name, pf }) {

  return (
 <div className="Bk">
      <img className="pic" src={pf} />
      <div> {name} </div>
      <Counter />
      <Dcount />
      <Rating />
      <Colorbox/>
      <Movie/>
    </div>
  
  );
}
function Counter() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        LIKE {like}
      </button>
    </div>
  );
}

function Dcount() {
  const [Dislike, setLike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setLike(Dislike + 1);
        }}
      >
        DISLIKE {Dislike}
      </button>
    </div>
  );
}
function Rating() {
  const [Rating, setLike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setLike(Rating + 1);
        }}
      >
        RATING {Rating}
      </button>
    </div>
  );
}
function Colorbox(){
  const [color,setcolor] = useState("blue");
  const styles = {
    background:color,
  };
  const [colorList,setcolorList]= useState(["blue","orange","purple","green"]);
  return(
    <div>
      <input style={styles}
      onChange={(event) => setcolor(event.target.value)}
      placeholder="enter a color" />
      <button onClick={()=>setcolorList([...colorList,color])}>ADD</button>
      [colorList.map((clr)=>(
        <Colorbox Color={clr}/>
      ))]
    </div>
  );
}
function Movie(){
  const [color,setcolor] = useState("blue");
  const styles = {
    background:color,
  };
  const [colorList,setcolorList]= useState(["blue","orange","purple","green"]);
  return(
    <div>
   
         </div>

    <div>
      <input style={styles}
      onChange={(event) => setcolor(event.target.value)}
      placeholder="enter a color" />
      <button onClick={()=>setcolorList([...colorList,color])}>ADD</button>
      [colorList.map((clr)=>(
        <Colorbox Color={clr}/>
      ))]
    </div>
    </div>
}