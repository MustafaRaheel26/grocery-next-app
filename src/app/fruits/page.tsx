import { div } from "framer-motion/client";

export default function Fruits(){
    return(
      
        <div className="parentContainer">
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="strawberry.jpg" alt="" /></div>
            <h1 className="title">STRAWBERRY</h1>
            <p className="description">Rs.100/Kg</p>
            <button><a href="/straw" className="readMore">read more</a></button>
            </div> 
          
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="apple.jpg" alt="apple" /></div>
            <h1 className="title">APPLES</h1>
            <p className="description">Rs.220/Kg</p>
            <button><a href="/appl" className="readMore">read more</a></button>
            </div>
          
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="banana.jpg" alt="banana" /></div>
            <h1 className="title">BANANAS</h1>
            <p className="description">Rs.180/Kg</p>
            <button><a href="/banan" className="readMore">read more</a></button>
            </div>
           
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="coconut.jpg" alt="coconut" /></div>
            <h1 className="title">COCONUT</h1>
            <p className="description">Rs.110/Kg</p>
            <button><a href="/coco" className="readMore">read more</a></button>
            </div>
           
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="mango.jpg" alt="mango" /></div>
            <h1 className="title">MANGO</h1>
            <p className="description">Rs.220/Kg</p>
            <button><a href="/mang" className="readMore">read more</a></button>
            </div>
           
             <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="orange.jpg" alt="orange" /></div>
            <h1 className="title">ORANGE</h1>
            <p className="description">Rs.120/Kg</p>
            <button><a href="/oran" className="readMore">read more</a></button>
            </div>

            <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="pomegranate.jpg" alt="pomegranate" /></div>
            <h1 className="title">POMEGRANATE</h1>
            <p className="description">Rs.150/Kg</p>
            <button><a href="/pome" className="readMore">read more</a></button>
            </div>
            <div className="childContainer bounce-in-right">
            <div className="imageContainer"><img src="pineapple.jpg" alt="pineapple" /></div>
            <h1 className="title">PINEAPPLE</h1>
            <p className="description">Rs.400/Kg</p>
            <button><a href="/pine" className="readMore">read more</a></button>
            </div>
            

            
            

            </div>
            
    )
}
            
             
             
             
            
      