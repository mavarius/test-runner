import React from 'react'

export const Tally = ({ passingTests, totalTests }) => {
  return (
    <strong>{passingTests} / {totalTests}</strong>
  )
}

export default Tally
