import React from "react";
import Card from "./Card";
import data from  '../assets/data/data.json';

const Body = () => {
  return (
    <div className="mt-20 px-20 pb-20 flex flex-col gap-6">
      {data.map(card => <Card id={card.id} location={card.location} company={card.company} position={card.position} postedAt={card.postedAt} contract={card.contract} languages={card.languages} logo={card.logo} newTag={card.new} featuredTag={card.featured}/>)}
    </div>
  )
}


export default Body;