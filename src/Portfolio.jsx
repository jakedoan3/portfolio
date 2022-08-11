import React from 'react'

const Portfolio = () => {
  return (
    <div>
        {/* Capstone
        Stranger's Things
        Art Collector?
        Wizard News
        Connect Four*/}
        <div>
          <h1>My Projects</h1>
          <div className='project'>
            <a href='https://exotic-animal-shop.herokuapp.com/'>
                <h2>Exotic Animals R Us</h2>
                <p>For the capstone project to complete the bootcamp, I joined a team of 4 classmates to build a parody web-store selling exotic and fictional animals. I partnered with one other classmate to build out the front end of the application in React, while our other two teammates completely built the back end. The store offers login functionality, sorting and filtering for the inventory, and will allow the user to navigate away from the page and return with items still in their cart. It is also set up to "checkout" with infrastructure to eventually complete a real transaction through Stripe. </p>
            </a>
          </div>

          <div className='project'>
            <a href='https://awesome-joliot-94c10c.netlify.app/'>
                <h2>Connect Four</h2>
                <p>As one of our most significant projects throughout the Web Development bootcamp, we were tasked with creating one of several classic games using purely HTML, CSS, and Javascript. I opted for what was considered the most difficult option: a fully functional Connect Four game. The application is fully functional for 1 or 2 players, and seamlessly allows for multiple games in one session.</p>
            </a>
          </div>

          <div className='project'>
            <a href='https://confident-stonebraker-230bb1.netlify.app/'>
                <h2>Stranger's Things</h2>
                <p>This project was another partnered exercise focusing on front end development in React. We ended up creating a Craigslist/Marketplace clone based on a back end provided by our instuctors. We were able to add full login/register functionality, post creation/editing/deletion with ownership properties successfully paired with the API.</p>
            </a>
          </div>

          
          
        </div>
          
    </div>
  )
}

export default Portfolio