import React from 'react'

function Footer() {
  return (
    <footer className="py-4 font-semibold tracking-tighter text-center w-full footer text-gray-500 text-xs ">
      &#169; {new Date().getFullYear()} Songster Capital LLC. - All rights reserved
    </footer>
  )
}

export default Footer