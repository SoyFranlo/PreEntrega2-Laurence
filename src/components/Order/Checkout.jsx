// import {getFirestore, collection, addDoc} from "firebase/firestore"
import { useState } from "react"
import "./Checkout.css"


const Checkout = () => {
    const [input, setInput] = useState({
        email: "",
        name: "",
        phone: ""
    })

    const {email, name, phone} = input

    const imputValue = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const send = (e) => {
        e.preventDefault()
        console.log(`${name} ${email} ${phone}`);
    }

    return (
        <form className="container m-auto w-50 mt-3">
            <div className="mb-3">
                <label className="form-label" htmlFor="Email">E-mail</label>
                <input type="email" className="form-control" id="Email" name="Email" onChange={imputValue} placeholder="Introduce your email"/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={imputValue} placeholder="Introduce your name"/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input type="tel" className="form-control" id="phone" name="phone" onChange={imputValue} placeholder="Introduce your Phone Number"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={send}>Send</button>
        </form>
    )
}

export default Checkout