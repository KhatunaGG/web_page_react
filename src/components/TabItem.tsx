import { TabItemPropsType } from "../interfaces"


const TabItem = ({text}: TabItemPropsType) => {
  return (
    <button className="bg-[#f1f1f1] px-2 text-sm my-2 hover:bg-black hover:text-white ">
        {text}
    </button>
  )
}

export default TabItem
