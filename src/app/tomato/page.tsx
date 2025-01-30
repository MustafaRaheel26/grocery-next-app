import Image from "next/image";

export default function Tomatoes(){
    return(
        <div className="parentContainerx">
            
            <div className="imageContainerx "><Image src="tomatoes.jpg" alt="tomatoes" /></div>
            <div className="childContainerx bounce-in-right">
            <h1>TOMATOES</h1>
            <p>
                Tomatoes are the most popular 
                vegetable in the world. They are packed with vitamins, minerals, and antioxidants.
                Tomatoes are a good source of protein, fiber, and healthy fats. They also contain vitamin A, iron, and magnesium.
                Some popular varieties of tomatoes include red, green, and chili peppers.
                


                
            </p>
            </div>
        </div>
    )

}