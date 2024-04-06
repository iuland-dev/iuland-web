const Button = ({text, classes = '', type = '', href = ''}) => {
  return <a className={`bg-gradient-primary p-4 rounded text-bold md:text-subtitle text-center text-white hover:scale-105 transition-all duration-500 ${classes}`} type={type} href={href}>{text}</a>
}

export default Button
