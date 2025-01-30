import Image from "next/image";

export default function Coconut(){
    return(
        <div className="parentContainerx">
            <div className="imageContainerx"><Image src="coconut.jpg" alt="coconuts" /></div>
            <div className="childContainerx bounce-in-right">
                <h1>COCONUTS</h1>
                <p>
                    Coconut is a simple 
                    fruit native to coastal regions of Eastern Africa. Its tender, soft flesh is dark brown, and it&apos;s usually eaten raw or cooked. Coconuts are rich in vitamins A, C, and E, and they also contain antioxidants and fiber.
                </p>
            </div>
        </div>
    )
}
