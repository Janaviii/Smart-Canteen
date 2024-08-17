import React from 'react'
import FoodRecommender from '../../components/foodRecommender/FoodRecommender'

function Recommendation() {
  return (
    <div>
      <div className='mt-20 items-center justify-between'>
        <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">
          Recommendation
        </h1>
        <div className='max-w-xl mx-auto'>
          <FoodRecommender/>
        </div>
      </div>
    </div>
  )
}

export default Recommendation