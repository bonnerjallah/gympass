
type ButtonProp={
    text: string,
    onclick?: ()=>void
    className?: string
    type?: "button" | "submit" | "reset"
    children?: React.ReactNode
}


const Button = ({text, onclick, className, type}: ButtonProp) => {
  return (
    <div style={{width: "30%", height: "4rem"}}>
        <button onClick={onclick} className={className} type={type}>
            {text}
        </button>
    </div>
  )
}

export default Button
