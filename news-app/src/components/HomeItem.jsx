import React from 'react'
import image from '../assets/news.jpg'

const HomeItem = ({title, src, url}) => {
  return (
<div className="card bg-dark text-light mb-5 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px", width:"327px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default HomeItem
