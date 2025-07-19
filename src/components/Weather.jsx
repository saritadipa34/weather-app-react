import { CiSearch } from "react-icons/ci";

const Weather=()=>{
    return(
        <div className="h-[500px] w-[450px] bg-blue-300 px-10 py-15">
            <div className="flex justify-between">
                <input type="text" className="h-[50px] w-3/4 border-1 rounded-3xl" />
                <div className="h-[50px] w-[60px] border-1 rounded-full flex items-center justify-center">
                <CiSearch />
                </div>
            </div>
        </div>
    )
}
export default Weather;