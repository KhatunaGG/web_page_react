import PostItem from "./PostItem"


const Posts = () => {
  return (
    <div className='w-full flex flex-col shadow-xl '>
      <h2 className='text-lg font-bold py-4 bg-[#f1f1f1] px-4'>Popular Posts</h2>
        <PostItem img={'assets/sm1.jpg'} title='Lorem' text='Sed mattis nunc' />
        <PostItem img={'assets/sm2.jpg'} title='Ipsum' text='Praes tinci sed' />
        <PostItem img={'assets/sm3.jpg'} title='Dorum' text='Ultricies congue' />
        <PostItem img={'assets/rock.jpg'} title='Mingsum' text='Lorem ipsum dipsum' />
    </div>
  )
}

export default Posts