import Image from "next/image";

export default function Apples(){
    return(
        <div className="parentContainerx">
            <div className="imageContainerx"><Image src="apple.jpg" alt="apple" /></div>
            <div className="childContainerx bounce-in-right">
                <h1>APPLE</h1>
                <p>
                    Apples are great source of nutrients and 
                    fiber. They are also a good source of vitamin C.
                    Apples contain 10% water and 94% of the fruit&apos;s weight.
                    They are also rich in antioxidants.
                </p>
            </div>
        </div>
    )
}
