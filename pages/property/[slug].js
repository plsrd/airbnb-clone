import { sanityClient } from '../../sanity'
import { isMultiple } from '../../utils'

import Link from 'next/link'

import Image from '../../components/Image'
import Review from '../../components/Review'
import Map from '../../components/Map'

const Property = ({ 
  title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    description,
    host,
    reviews
}) => {

  const reviewAmount = `${reviews.length} review${isMultiple(reviews.length)}`

  return (
    <div className='container' >
      <h1>{title}</h1>
      <p>{reviewAmount}</p>
      <div className='images-section'>
        <Image identifier='main-image' image={mainImage} />
        <div className = 'sub-images-section'>
          {images.map((image, _key) => <Image identifier='image' image={image} />)}
        </div>
      </div>

      <div className='section'>
        <div className='information'>
          <h2>{propertyType.charAt(0).toUpperCase() + propertyType.slice(1)} hosted by {host?.name}</h2>
          <h4>{bedrooms} bedroom{isMultiple(bedrooms)} * {beds} bed{isMultiple(beds)}</h4>
          <hr />
          <h4>Enhanced Clean</h4>
          <p>This host is committed to Airbnb's 5-step enhanced cleaning process</p>
          <h4>Amenities for everyday living</h4>
          <p>The host has equipped this place for long stays - kitchen, shampoo, conditioner, and hairdryer</p>
          <h4>House Rules</h4>
          <p>This place isn't suitable for pets and the host does not allow parties or smoking</p>
        </div>
        <div className='price-box'>
          <h2>${pricePerNight}</h2>
          <h4>{reviewAmount}</h4>
          <Link href='/'><div className='button'>Change Dates</div></Link>
        </div>
      </div>

      <h4>{description}</h4>

      <h2>{reviewAmount}</h2>
      {reviews.length > 0 && reviews.map(review => <Review key={review._key} review={review} />)}

      <h2>Location</h2>
      <Map location={location} />
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type == 'property' && slug.current == $pageSlug][0]{
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    description,
    host->{
      _id, 
      name,
      slug,
      image
    },
    reviews[]{
      ...,
      traveller->{
        _id,
        name,
        slug,
        image
      }
    }
  }`

  const property = await sanityClient.fetch(query, { pageSlug })

  if (!property){
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedrooms: property.bedrooms,
        description: property.description,
        host: property.host,
        reviews: property.reviews
      }
    }
  }

}

export default Property