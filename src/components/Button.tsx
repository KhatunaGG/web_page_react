import { ButtonPropsType } from "../interfaces"


const Button = ({ location, text }: ButtonPropsType) => {
  return (

    <button
      style={{
        background: location === 'footer' ? 'black' : 'transparent',
        border: location === 'footer' ? 'transparent' : '1px solid #e1dcdc',
        color: location === 'footer' ? 'white' : 'black', textTransform: location === 'footer' ? 'capitalize' : 'uppercase'
      }}
      className={`${location === 'footer' ? 'hover:bg-gray-200' : 'hover:bg-black'} text-base px-[20px] py-[13px] `}>{text}</button>
  )
}

export default Button