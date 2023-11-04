import React from 'react'

import { Helmet } from 'react-helmet'

import './mac-book-air1.css'

const MacBookAir1 = (props) => {
  return (
    <div className="mac-book-air1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="mac-book-air1-mac-book-air1">
        <img
          alt="Rectangle146"
          src="/external/rectangle146-oqsv-200h.png"
          className="mac-book-air1-rectangle1"
        />
        <span className="mac-book-air1-text">
          <span>🌍 Eco-Adventure Game 🌱</span>
        </span>
        <img
          alt="Cloud1024"
          src="/external/cloud1024-7mp.svg"
          className="mac-book-air1-cloud"
        />
        <span className="mac-book-air1-text02">
          <span>
            <span>
              Alright, let&apos;s embark on the &quot;Eco-Adventure Game!&quot;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Get ready to make some exciting choices and see how eco-friendly
              you can be. After each choice, you&apos;ll earn leaves 🍃
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="mac-book-air1-text09">
          <span>
            {' '}
            if you choose the green option. At the end, we&apos;ll count your
            leaves to see how super you are at saving the planet!
          </span>
        </span>
      </div>
    </div>
  )
}

export default MacBookAir1
