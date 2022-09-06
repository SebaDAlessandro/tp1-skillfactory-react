import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';

const Home = () => {

   return (
    <section className="homepage">
      <div className='presentation__container'>

      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(`Bienvenido a <span class="presentation__welcome">Skill Factory React</span> by:`)
            .pauseFor(1500)
            .deleteAll()
            .typeString(`<span class="presentation__name">AVALITH</span><span class="presentation__point">.</span>`)
            .start();
        }}
      />
      </div>

    </section>
  )
}

export default Home