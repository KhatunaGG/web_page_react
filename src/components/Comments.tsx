import { CommentPropsType } from "../interfaces"



const Comments = ({count }: CommentPropsType) => {

  return (
    <div className='flex items-center justify-center gap-3 pr-5'>
        <p>comments</p>
        <div className='bg-black w-6 h-6 text-white flex items-center justify-center'>{count}</div>
    </div>
  )
}

export default Comments