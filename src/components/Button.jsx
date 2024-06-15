const Button = ({text, classes = '', type = '', href = '', target = ''}) => {
  return <a 
    className={`bg-accent p-4 rounded text-bold md:text-subtitle text-center text-white hover:scale-105 transition-all duration-500 ${classes}`} 
    type={type} 
    href={href}
    target={target}
  >
    {text}
  </a>
}

export default Button
