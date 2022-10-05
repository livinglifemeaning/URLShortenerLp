import classes from "./Button.module.css"; 

const Button = (props) => {
  return (
    <div onClick={props.onClick} className={`${classes.btn} ${props.color === "cyan" ? classes.cyan : classes.dark} ${props.type === "circle" ? classes.circle : classes.square}`}>
      {props.children}
    </div>
  )
}

export default Button
