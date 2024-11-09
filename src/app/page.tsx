import { div } from "framer-motion/client"

export default function Home() {
  return (
    
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-green-100 to-blue-100">
  <div className="text-center mb-8">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 tracking-wide mb-4 animate-pulse">
      Welcome to FRUITS AND VEGETABLE MARKET!
    </h1>
    <p className="text-lg md:text-xl text-gray-700 font-medium mb-8">
      FRESH FRUITS AND VEGIES AVAILABLE
    </p>
  </div>
  <section className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Home Page</h2>
      <p className="text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Welcome to FRUITS AND MARKET! We have a wide variety of fruits and vegetables that will satisfy your needs. Our staff is always ready to help you find the perfect product.
      </p>
    </div>
  </section>
</div>

  );
}