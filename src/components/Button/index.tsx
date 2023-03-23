interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}
export const Button = ({onClick, type, children}:Props) =>{
  return(
    <button className="commonButton">{children}</button>
  )
}