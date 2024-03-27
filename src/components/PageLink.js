import React from 'react'

const PageLink = ({link, childClass}) => {
  return (
      <li key={link.id}>
          <a href={link.href} className={childClass}> {link.text} </a>
      </li>
  )
}

export default PageLink