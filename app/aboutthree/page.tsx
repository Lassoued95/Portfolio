'use client'
// src/components/TypewriterComponent.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function TypewriterComponent() {
  return (
    <div>
      <h1>
        <Typewriter
          words={['DEVELOPER💻!', 'PHOTOGRAPHER📷!', ]}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
}

export default TypewriterComponent;
