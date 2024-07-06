//'useFetch custom hook' data fetch

import useFetch from "react-fetch-hook";

const Fetch_custom = () => {

    const {data: countries, isLoading, error} = useFetch('https://restcountries.com/v3.1/all');

    if (isLoading) {
        return (
            <h3 className='font-extrabold text-2xl text-teal-700 m-4'> Loading Flags...</h3>
        )
    }

    if (error) {
        return (
            <h3 className= 'font-bold text-red-500 m-4'> Error in Fetching Data </h3>
        )
    }

    return(
        <div className='flex flex-col items-center'>

        <h3 className='font-bold text-blue-700 m-4'> Example: Flags of Countries </h3>

        <div className='flex flex-wrap place-content-center mb-5'>
        {countries && 
            countries.map((country, index) => (
                <img key={index} src={country.flags.png} alt='flag' width={100} />
        ))}
        </div>
        
        
        </div>
    )
}

export default Fetch_custom;