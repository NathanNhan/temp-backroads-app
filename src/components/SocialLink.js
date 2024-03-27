import React from 'react'

const SocialLink = ({item, itemClass}) => {
  return (
      <li key={item.id}>
          <a href={item.href} target="noreffer" className={itemClass}
          ><i className={item.icon}></i
          ></a>
      </li>
  )
}

export default SocialLink