import React from 'react'
import { pageLink } from '../data'
import PageLink from './PageLink'

const PageLinks = ({parentClass, childClass}) => {
  return (
      <ul className={parentClass} id={parentClass}>
          {pageLink.map((link) => {
              return (
                  <PageLink link={link} childClass={childClass} />
              )
          })}
      </ul>
  )
}

export default PageLinks