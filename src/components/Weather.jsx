import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { BiColor } from "react-icons/bi";

const Weather=()=>{
const [weatherData,setData]=useState([]);
const [cityName,setCityName]=useState("London");
const [inputValue,setInputValue]=useState("");
const [loading,setLoading]=useState(true);

const handleInput=(e)=>{
const inputData=e.target.value;
setInputValue(inputData);
setCityName(inputData);
}

const handleSearch=()=>{
    if(inputValue === "") return;
    getData();
    setInputValue("");
    console.log("search");
}

    const getData=async()=>{
        const apiKey=import.meta.env.VITE_API_KEY;
        setLoading(true);
        try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        const data=await response.json();
        setData(data);
        setLoading(false);
        console.log(data);
        } catch(error) {
            console.log(error.message);
        }
        }

        useEffect(()=>{
            getData();
        },[]);

    return(
        <div className="h-[500px] w-[450px] bg-blue-300 px-10 py-15 flex flex-col gap-5">
            <div className="flex justify-between">
                <input value={inputValue} onChange={handleInput} type="text" className="h-[50px] w-3/4 border-1 rounded-3xl" />
                <div onClick={handleSearch} className="h-[50px] w-[60px] border-1 rounded-full flex items-center justify-center">
                <CiSearch />
                </div>
                </div>

{weatherData && !loading ?
                <div className="flex flex-col gap-5 text-center">
                        <div className="flex flex-col gap-5 pb-5">
                    <div className="flex justify-center">
                <TiWeatherPartlySunny  className="h-20 w-20 "/>
                </div>
                    <h1 className="text-5xl font-bold">{weatherData ?(weatherData?.main?.temp-273.15).toFixed(1):"hjhj" }°C</h1>
                <h2  className="text-5xl font-bold">{weatherData?.name}</h2>
                </div>  
                <div className="flex justify-between">
                <div className="text-left">
                <MdOutlineWaves />
                <p>{weatherData?.main?.humidity}°C</p>
                <p>Humidity</p>

                </div>
                <div className="text-left">
                <FaWind />
<p>{weatherData?.wind?.speed}Km/h</p>
<p>Wind Speed</p>
                </div>
                </div>
                </div>
: <p className={`h-full w-full flex justify-center items-center text-4xl text-white transition-all ease-out duration-700
${loading ? "translate-y-10" : "translate-y-0"  }
`}>loading....</p>}
        </div>
    )
}
export default Weather;