import React from 'react'

const Tour = ({item}) => {
  return (
      <article className="tour-card" key={item.id}>
          <div className="tour-img-container">
              <img src={item.image} className="tour-img" alt="" />
              <p className="tour-date">{item.date}</p>
          </div>
          <div className="tour-info">
              <div className="tour-title">
                  <h4>{item.title}</h4>
              </div>
              <p>
                  {item.info}
              </p>
              <div className="tour-footer">
                  <p>
                      <span><i className="fas fa-map"></i></span> {item.location}
                  </p>
                  <p>{item.duration}</p>
                  <p>from ${item.cost}</p>
              </div>
          </div>
      </article>
  )
}

export default Tour