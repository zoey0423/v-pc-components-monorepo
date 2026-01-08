import React from 'react'

export interface TagProps {
  children?: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({
  children,
}) => {
  return <div className="Tag">{children}</div>
}

Tag.displayName = 'Tag'
