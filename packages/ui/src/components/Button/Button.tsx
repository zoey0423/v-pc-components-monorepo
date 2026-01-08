import React from 'react';
// Button.tsx
export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
  }
  
  export function Button({ children, onClick }: ButtonProps) {
    return <button onClick={onClick}>{children}</button>
  }
  