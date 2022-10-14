import React, { useEffect, useState } from "react";
import "./Watchlist.css";

interface MyForm {
  name: string;
  img: string;
  comment: string;
}

function Watchlist({film, setFilms}:any) {

  useEffect(() => {
    let filmAll: any = JSON.parse(localStorage.getItem("film") || "");
    setFilms(filmAll);
  }, []);
  
  const handleHistory = (x:any)=>
  {
    let history = JSON.parse(localStorage.getItem("history")||"")
    localStorage.setItem("history",JSON.stringify([...history,x]))
  }

  return (
    <div className="watchlist">
      {film &&
        film.map((e:any) => {
          return (
            <div className="card" onClick={()=> handleHistory(e)}>
              <img className="card-img-top" src={e.img} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  {e.name}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Watchlist;
