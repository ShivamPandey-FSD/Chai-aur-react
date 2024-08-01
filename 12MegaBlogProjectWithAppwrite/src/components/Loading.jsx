import React from 'react'
import loadingLogo from '../assets/loading_logo.svg'

function Loading() {
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <img src={loadingLogo} alt="loading" className="bg-transparent" />
    </div>
  )
}

export default Loading