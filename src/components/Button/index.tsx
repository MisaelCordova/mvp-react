type componentButton = {
  children: React.ReactNode;
}
export const Button = ({children}:componentButton) =>{
  return(
    <button className="commonButton">{children}</button>
  )
}