import Image from "next/image";

export default function Onion(){
    return(
        <div className="parentContainerx">
            
            <div className="imageContainerx "><Image src="ONION.jpg" alt="onion" /></div>
            <div className="childContainerx bounce-in-right">
            <h1>ONIONS</h1>
            <p>
                Onion is a simple vegetable native to the region of India, and is often used in Indian cuisine.
                Onions come in various colors, such as red, yellow, green, and purple, and they are commonly used as a base for various dishes.
                Onions are also known for their ability to be eaten raw, cooked, or even boiled, and they are a staple in many Indian dishes.
            </p>
            </div>
        </div>
    )

}