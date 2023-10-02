import '../Styles/Registration.css'
import {useState} from 'react'

const Registration = () =>{

    const [formValid, setFormValid] = useState({
        name: true,
        username:true,
        email: true,
        mobile: true,
    })

    const [formDetails, setFormDetails] = useState({
        name: "",
        username: "",
        email: "",
        mobile: ""
    })


    const submitHandler =(e)=>{
        e.preventDefault()
        if(formDetails.name.trim() === ""){
            setFormValid((prev)=>({...prev, name : false}))
        }
        if(formDetails.username.trim() === ""){
            setFormValid((prev)=>({...prev, username : false}))
        }
        if(formDetails.email.trim() === "" || !formDetails.email.includes('@')){
            setFormValid((prev)=>({...prev, email : false}))
        }
        if(formDetails.mobile.trim() === "" || !formDetails.mobile.trim().length === 10){
            setFormValid((prev)=>({...prev, mobile : false}))
        }
        console.log(formDetails)
        setFormDetails((prev)=>({
            name: "",
            username: "",
            email: "",
            mobile: ""
        }))
    }

    return(<div className="registration">
        <div className="leftside"></div>
        <div className="rightside">
            <form className="form" onSubmit={submitHandler}>
                <div className="title">Super App</div>
                <div>Create your new Account</div>
                <input placeholder="Name" onChange={(e)=>setFormDetails((prev)=>({...prev, name : e.target.value}))} value={formDetails.name}></input>
                {!formValid.name && <div className='error'>Name is not valid</div>}
                <input placeholder="Username" onChange={(e)=>setFormDetails((prev)=>({...prev, username : e.target.value}))} value={formDetails.username}></input>
                {!formValid.username && <div className='error'>username is not valid</div>}
                <input placeholder="Email" onChange={(e)=>setFormDetails((prev)=>({...prev, email : e.target.value}))} value={formDetails.email}></input>
                {!formValid.email && <div className='error'>Email is not valid</div>}
                <input placeholder="Mobile" onChange={(e)=>setFormDetails((prev)=>({...prev, mobile : e.target.value}))} value={formDetails.mobile}></input>
                {!formValid.mobile && <div className='error'>Mobile is not valid</div>}
                <div>
                <input type="checkbox"></input> Share my registration data with Superapp
                </div>
                <button>SIGN UP</button>
                <p>By clicking on Sign up. you agree to Superapp <href>Terms and Conditions</href> of Use</p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <href>Privacy Policy</href></p>
            </form>
        </div>
    </div>)
}

export default Registration;