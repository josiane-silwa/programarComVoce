import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Rating.module.css'

const RatingReview = ( ) => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div>
      {[...Array(5)].map( (star, index) => {
        const currentRating = index + 1
          return (
            <>
              <label>
                <input 
                  type='radio' 
                  name='rating' 
                  value={currentRating} 
                  onClick={() => setRating(currentRating)}
                />

                <FaStar className='star' 
                  size={20} 
                  color={ currentRating <= ( hover || rating) ? "#FFA634" : "grey" }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            </>
          )
        }
      )}
    </div>
  )
}

export default RatingReview
