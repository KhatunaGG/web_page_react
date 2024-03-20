
import About from './About'
import Card from './Card'
import Posts from './Posts'
import Tabs from './Tabs'

const Main = () => {
    return (
        <main className='main w-full flex flex-col gap-8 justify-between lg:flex-row lg:justify-center lg:items-start mb-10 '>
            <section className='lg:w-[65%] flex flex-col gap-8'>
                <Card img={'/assets/woods.jpg'} title='TITLE HEADING' date='April 7, 2014'/>
                <Card img={'/assets/bridge.jpg'} title='BLOG ENTRY' date='April 2, 2014'/>
            </section>
            <section className='lg:w-[35%] flex flex-col gap-5 '>
                <About img='assets/avatar_1.jpg' title='My Name' />
                <Posts />
                <Tabs />
            </section>
        </main>
    )
}

export default Main