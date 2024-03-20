
// import CardInfo from './CardInfo'
import Button from './Button'
import Comments from './Comments'
import { CardPropsType } from '../interfaces'



const Card = ({img, title, date }: CardPropsType) => {
    return (
        <div className="card w-full shadow-2xl">
            <img className='w-[900px]' src={img} alt="" />
            <div className='p-4'>
                <h2 className='uppercase text-xl mb-2 font-bold'>{title}</h2>
                <h3 className='text-lg mb-5'>Title description, <span className='text-[#979797]'>{date}</span></h3>
                <p className='mb-5'>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
                    Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                    Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida
                    diam non fringilla.
                </p>
                <div className='flex flex-row items-center justify-between'>
                    <Button text='read more' />
                    <Comments count={title === 'BLOG ENTRY' ? 2 : 0} />
                </div>
            </div>

        </div>

    )
}

export default Card