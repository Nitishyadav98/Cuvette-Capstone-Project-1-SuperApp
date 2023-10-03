import '../Styles/Category.css'
import data from '../data/dataset.json'
import Card from '../Components/Card'
import { useState } from 'react'
const Category = () =>{

    const [selectedCategories, setSelectedCategories] = useState([])

    return(<div className="categorypage">
        <div className="categorychosen">
            <div className='heading'>SuperApp</div>
            <div className='subheading'>Choose Your Entertainment Category</div>
            <div>{selectedCategories.map((el)=>(<span>{el}</span>))}</div>
            <div className='warning'>Minimum 3 categories required</div>
        </div>
        <div className="rightside">
            <div className='cards'>
                {data.map((item)=>(<Card props={item} />))}
            </div>
        </div>
    </div>)
}

export default Category;