import React from 'react'
import MultiplePizzas from '../assests/multiplePizzas.jpeg'
import '../styles/About.css'
function About() {
    return (
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
          <h1> ABOUT US</h1>
          <p>Welcome to Pedro's Pizzeria! We are passionate about serving mouthwatering pizzas that delight your taste buds and bring people together. Our journey began with a simple vision: to create the perfect slice of pizza that satisfies every craving. With years of dedication to crafting delicious, hand-tossed dough, using the finest ingredients, and perfecting our secret sauce recipe, we have become a beloved part of the community.

                    At Pedro's Pizzeria, we believe that great food is more than just a meal; it's an experience. Whether you're dining in our cozy restaurant or enjoying our pizzas in the comfort of your home, we strive to exceed your expectations with every bite. Our team of talented chefs and friendly staff work tirelessly to ensure that each pizza we serve is a masterpiece of flavor and quality.

                    We take pride in supporting local farmers and sourcing the freshest ingredients to create our signature pizzas. From classic Margherita to adventurous specialty pies, our diverse menu offers something for everyone. We value our customers and are committed to delivering exceptional service and unforgettable flavors.

                    Thank you for choosing Pedro's Pizzeria as your go-to pizza destination. We look forward to serving you and being a part of your pizza memories for years to come. Join us on this delicious journey, and let's share the love for pizza, one slice at a time.
                   
                    </p>
      </div>
    </div>
  );
}


export default About