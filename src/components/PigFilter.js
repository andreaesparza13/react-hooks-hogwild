import React, { useState } from 'react'

function PigFilter({setShowGreased}) {

    function handleGreased(e)
    {
        setShowGreased(e.target.checked);
    }

  return (
    <div>
        <select onChange={handleGreased}>
            <option value="all">All</option>
            <option value="greased">greased</option>
        </select>
    </div>
  )
}

export default PigFilter;