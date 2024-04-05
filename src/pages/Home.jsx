import React from 'react';
import CarouselComponent from './Carousel'; // Update the import statement to match your file name

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* Carousel on the left for mobile, at the top for desktop */}
      <div className="flex-1 md:order-1 md:mr-4 md:mt-0 mt-4 ">
        <CarouselComponent />
        </div>
        <div className="flex-1 md:order-2 text-center">
          <h1 className="text-4xl font-bold pb-10">Step Up Your Style with Nike Shoes</h1>
          <h3 className="text-xl font-semibold pb-3 pt-5">Discover the Perfect Pair for Every Occasion</h3>
          <h3 className="text-lg font-semibold pb-3">👟 Choose Your Nike Air Jordan Shoes and Start Running Around in Style! 👟</h3>
          <p className="text-lg">At our Nike shoe store, we're passionate about sneakers. Whether you're hitting the gym, exploring the city, or simply stepping out in style, we've got you covered. Explore our curated collection of Nike shoes, from classic designs to the latest releases. With unparalleled comfort, durability, and iconic style, Nike is more than just a brand—it's a lifestyle.</p>
          <h2 className="text-2xl font-bold pb-4 pt-4">Shop Now and Step into Greatness!</h2>
        </div>
    </div>
  );
}

export default Home;