import Image from "next/image";

export default function Mangoes(){
    return(
        <div className="parentContainerx">
            
            <div className="imageContainerx "><Image src="mango.jpg" alt="tmango" /></div>
            <div className="childContainerx bounce-in-right">
            <h1>MANGOES</h1>
            <p>
                Mangoes are very favourit fruit and 
                are often used in many cuisines around the world.
                They are also a popular snack in many parts of the world.
                Mangoes are packed with vitamins, minerals, and fiber.
                Some popular varieties of mango include Golden Delicious, Red Delicious, and Cavendish.



                
            </p>
            </div>
        </div>
    )

}