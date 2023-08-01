import React from 'react'
import ButtonOutline from '../buttonOutline/ButtonOutline'

export default function HeadingAndoption(props) {
  return (
    <div className='row'>
         <div className="col-8">
            <h1
              className="pt-5 px-5"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: "bold",
              }}
            >
              {props.heading}
            </h1>
            <p className="px-5">
              {props.para}
            </p>
          </div>
          <div className="col-4 pt-5">
            <ButtonOutline title={props.title} src={props.src} />
          </div>
          </div>
  )
}
