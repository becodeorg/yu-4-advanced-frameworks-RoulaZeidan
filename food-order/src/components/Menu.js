import burger from './pictures/burger.jpg';
import p3 from './pictures/p3.jpg';
import sushi from './pictures/sushi.jpg';
import schnitzel from './pictures/schnitzel.jpg';

const menu = [
    {
      title: "Sushi",
      desc: "Finest fish and veggies",
      price: 22.99,
      id: 0,
      img :sushi,
    },
    {
      title: "Schnitzel",
      desc: "A german specialty!",
      price: 16.5,
      id: 1,
      img :schnitzel
    },
    {
      title: "Barbecue Burger",
      desc: "American, raw, meaty",
      price: 12.99,
      id: 2,
      img :burger
    },
    {
      title: "Green Bowl",
      desc: "Healthy...and green...",
      price: 18.99,
      id: 3,
      img : p3
       
    },
  ];
  
  export default menu;