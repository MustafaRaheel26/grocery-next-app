import { div } from "framer-motion/client";

export default function Vegetables(){
    return(
      
        <div className="parentContainer">
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="potatoes.jpg" alt="" /></div>
            <h1 className="title">POTATOES</h1>
            <p className="description">Rs.100/Kg</p>
            <button><a href="/pot" className="readMore">read more</a></button>
            </div>
          
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="ladyfinger.jpg" alt="ladyfinger" /></div>
            <h1 className="title">LADY FINGER</h1>
            <p className="description">Rs.220/Kg</p>
            <button><a href="/lady" className="readMore">read more</a></button>
            </div>
          
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="tomatoes.jpg" alt="tomato" /></div>
            <h1 className="title">TOMATOES</h1>
            <p className="description">Rs.180/Kg</p>
            <button><a href="/tomato" className="readMore">read more</a></button>
            </div>
           
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="brinjals.jpg" alt="" /></div>
            <h1 className="title">BRINJALS</h1>
            <p className="description">Rs.110/Kg</p>
            <button><a href="/brinjal" className="readMore">read more</a></button>
            </div>
           
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="CAULIFLOWER.jpg" alt="CAULIFLOWER" /></div>
            <h1 className="title">CAULI FLOWER</h1>
            <p className="description">Rs.220/Kg</p>
            <button><a href="/cauli" className="readMore">read more</a></button>
            </div>
           
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="CUCUMBER.jpg" alt="" /></div>
            <h1 className="title">CUCUMBER</h1>
            <p className="description">Rs.120/Kg</p>
            <button><a href="/cucum" className="readMore">read more</a></button>
            </div>

            <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="ONION.jpg" alt="" /></div>
            <h1 className="title">ONIONS</h1>
            <p className="description">Rs.150/Kg</p>
            <button><a href="/onio" className="readMore">read more</a></button>
            </div>
            <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="CAPSICUM.jpg" alt="" /></div>
            <h1 className="title">CAPSICUMS</h1>
            <p className="description">Rs.400/Kg</p>
            <button><a href="/capsi" className="readMore">read more</a></button>
            </div>
            

            
            

            </div>
            
    )
}