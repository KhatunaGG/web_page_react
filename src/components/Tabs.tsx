
import TabItem from './TabItem'


const Tabs = () => {
    return (
        <div className='w-full flex flex-col shadow-xl  '>
            <h2 className='text-lg font-bold py-4 bg-[#f1f1f1] px-4'>Tags</h2>
            <div className='flex flex-row flex-wrap  gap-2  px-4 pt-4 pb-6'>
                <TabItem text='Travel' />
                <TabItem text='New York' />
                <TabItem text='IKEA' />
                <TabItem text='NORWAY' />
                <TabItem text='DIY' />
                <TabItem text='Ideas' />
                <TabItem text='Baby' />
                <TabItem text='Family' />
                <TabItem text='News' />
                <TabItem text='Clothing' />
                <TabItem text='Shopping' />
                <TabItem text='Sports' />
                <TabItem text='Games' />
            </div>
        </div>
    )
}

export default Tabs