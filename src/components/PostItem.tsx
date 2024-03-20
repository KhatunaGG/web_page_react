import { PostItemPropsType } from "../interfaces"



const PostItem = ({img, title, text}: PostItemPropsType) => {
    return (

        <a className='py-3 pl-4 flex flex-row gap-5 items-center hover:bg-[#f1f1f1] cursor-pointer border-b border-[#e0e0e0]'>
            <img className="w-12 h-12" src={img} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </a>

    )
}

export default PostItem
