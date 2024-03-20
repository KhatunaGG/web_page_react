import { AboutPropsType } from "../interfaces"


const About = ({ img, title }: AboutPropsType) => {
    return (
        <div className="card w-full shadow-2xl">
            <img className='w-[900px]' src={img} alt="" />
            <div className='p-4'>
                <h2 className='uppercase text-lg mb-2 font-bold'>{title}</h2>
                <p className=''>Just me, myself and I, exploring the universe of uknownment. 
                I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. 
                I want to share my world with you.
                </p>
            </div>

        </div>
    )
}

export default About