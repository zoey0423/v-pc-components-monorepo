import React from 'react'

export interface AvatarProps {
  children?: React.ReactNode
}

export const Avatar: React.FC<AvatarProps> = ({
  children,
}) => {
  return <div className="Avatar">{children}</div>
}

Avatar.displayName = 'Avatar'
