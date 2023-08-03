import React from 'react'
import Cards from './Cards'
import Pic1 from "../Assets/1pic.jpg"
import Pic2 from "../Assets/2pic.jpg"
import Pic3 from "../Assets/3pic.jpg"
import Pic4 from "..//Assets/4pic.jpg"
import Pic5 from "..//Assets/5pic.jpg"
import Pic6 from "..//Assets/6pic.jpg"


const data = [
    {id:1, name: "Profile Card", image:Pic1 },
    {id:2, name: "Singl Price Grid", image:Pic2 },
    {id:3, name: "Order Summary", image:Pic3 },
    {id:4, name: "Preview Card", image:Pic4 },
    {id:5, name:"Testimonials Grid", image:Pic5 },
    {id:6, name:"Parfume Card", image:Pic6 },
]

const CardsList = () => {
  function action(name){
    alert(`${name} is from frontendmentor challenges`)
  }
  return (
    <div>
        {data.map((card) =><Cards key={card.id} name={card.name} image={card.image} action={action}/>)}
    </div>
  )
}

export default CardsList