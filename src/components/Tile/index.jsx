import React from 'react'

export default ({ title = '1938', subtitle = 'Default' }) => {
  return (
    <div>
      <div className="h1">{ title }</div>
      <div>{ subtitle }</div>
    </div>
  )
}