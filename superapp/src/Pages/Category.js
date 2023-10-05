import '../Styles/Category.css'
import data from '../data/dataset.json'
import Card from '../Components/Card'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Category = () =>{

    const navigate = useNavigate()

    const [selectedCategories, setSelectedCategories] = useState([])

    const nextPageHandler =()=>{
        if(selectedCategories.length >= 3){
            navigate('/profile')
        }
    }

    return(<div className="categorypagelayout">
        <div className='categorypage'>
        <div className="categorychosen">
            <div className='heading'>SuperApp</div>
            <div className='subheading'>Choose Your Entertainment Category</div>
            <div className='categorycontainer'>{selectedCategories.map((el)=>(<div className='selectedcategory'>{el}</div>))}</div>
            {selectedCategories.length < 3 && <div className='warning'>Minimum 3 categories required</div>}
        </div>
        <div className="rightside">
            <div className='cards'>
                {data.map((item)=>(<Card props={item} setSelectedCategories={setSelectedCategories} selectedCategories={selectedCategories}/>))}
            </div>
        </div>
        </div>
        <button onClick={nextPageHandler}>Next Page</button>
    </div>)
}

export default Category;