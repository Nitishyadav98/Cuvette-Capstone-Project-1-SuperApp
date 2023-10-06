import { useState, useEffect } from 'react'
import '../Styles/Profile.css'

const Profile = () => {
    const [article, setArticle]= useState()
    const [weather, setWeather] = useState()


    const profileDetails = JSON.parse(localStorage.getItem('profileDetails'))
    const categories = JSON.parse(localStorage.getItem('categories'))

    useEffect(()=>{

        const weatherdetails = async()=>{
            const response = await fetch('http://api.weatherapi.com/v1/current.json?key=662e6591938c4b5b922182328230510&q=London')
            const data = await response.json()
            setWeather(data.current)
            // console.log(weather)
        }
    
    const newsdata = async() =>{
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0c4847d1828341f280e7570c5dbdd567')
        const data = await res.json()
        console.log(data)        
        // setArticle(data.articles[1])
        // console.log(article)
    }
    weatherdetails();
    // newsdata()
    },[])

    // useEffect(()=>{
    //     console.log(article)
    // },[weather])
    
    return (
    <div className='profilePage'>
        <div className='profileSection'>
            <div className='profileCard'>
                <div className='image'></div>
                <div className='profileDetails'>
                    <div>{profileDetails.name}</div>
                    <div>{profileDetails.email}</div>
                    <div>{profileDetails.username}</div>
                    <div>{categories.map((el=>(<span>{el}</span>)))}</div>
                </div>
            </div>
            <div className='weatherSection'>
                <div className='dateandtime'>date and time</div>
                <div className='weatherdetails'>
                    <div>
                        <div><img src={weather && weather.condition.icon}/></div>
                        <div>{weather && weather.condition.text}</div>
                    </div>
                    <div>
                        <div>{weather && weather.temp_c} C</div>
                        <div>{weather && weather.pressure_mb} mb pressure</div>
                    </div>
                    <div>
                        <div>{weather && weather.wind_kph} wind</div>
                        <div>{weather && weather.humidity} humidity</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='newsSection'>
            <div>Newspaper</div>
        </div>
    </div>
  )
}

export default Profile