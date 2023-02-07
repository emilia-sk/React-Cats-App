import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item}
      />
    )
  })

  return(
    <div className="container">
      <div className="row">
        <div className="col-12 col-main">
        <Header />
        <hr></hr>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
        {cards}
        </div>
        <hr></hr>
        <Footer />
        </div>
      </div>
    </div>
  )
}
