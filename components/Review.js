import { urlFor } from '../sanity'
//import Image from './Image'

const Review = ({ review }) => {
  return (
    <div className='review-box'>
      <h1>{review.rating}</h1>
      <h2>{review.traveller.name}</h2>
      <div className='review-description'>
      <img className='traveller-image' src={urlFor(review.traveller.image).height(100).width(100).fit('crop')} />
      <p>{review.reviewDescription}</p>
      </div>
    </div>
  )
}

export default Review