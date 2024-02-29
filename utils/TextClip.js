
const TextClip = ({children, size}) => {
  return (
    children.length > size ? children.substring(0,size) + '...' : children
  )
}

export default TextClip