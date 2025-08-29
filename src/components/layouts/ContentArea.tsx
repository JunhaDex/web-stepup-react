import React from 'react'

interface ContentAreaProps {
  children: React.ReactNode
}

export default function ContentArea({ children }: ContentAreaProps) {
  return (
    <div className="content-area">
      <div className="responsive-layout">{children}</div>
    </div>
  )
}
