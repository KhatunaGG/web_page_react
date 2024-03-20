import Button from "./Button"


const Footer = () => {
  return (
    <div className='w-full bg-[#616161] pb-[55px]'>
        <div className="container max-w-[95%] pt-[40px] px-2 lg:max-w-[96%] mx-auto flex gap-4">
            <Button location='footer' text='Previous' />
            <Button location='footer' text='Next'/>
        </div>
        
    </div>
  )
}

export default Footer