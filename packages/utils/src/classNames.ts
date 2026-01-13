type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null } | ClassValue[]

export function cn(...classes: ClassValue[]): string {
  return classes
    .map((cls) => {
      if (typeof cls === 'string' || typeof cls === 'number') {
        return cls
      }
      if (typeof cls === 'object' && cls !== null) {
        if (Array.isArray(cls)) {
          return cn(...cls)
        }
        return Object.entries(cls)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ')
      }
      return ''
    })
    .filter(Boolean)
    .join(' ')
}
  
  // 条件类名
export function conditionalClass(condition: boolean, trueClass: string, falseClass?:  string): string {
    return condition ? trueClass : (falseClass || '')
  }