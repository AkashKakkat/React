import React, { useState } from 'react'
import './FormValidation.css'

const FormValidation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target; // called every time a user types or changes a form field

        setFormData(prev => ({
            ...prev, // uses the spread operator to keep other values unchanged
            [name]: value //update formData using the input's name as key & the value as the new value.
        }))
    }
    const validation = () => {

        const newErrors = {};
        const { name, email, age, password, confirmPassword, gender } = formData;

        if (!name.trim())
            newErrors.name = "Name is required";
        else if (!/^[A-Za-z\s]*$/.test(name))
            newErrors.name = "Name should only contain alphabets"


        if (!email)
            newErrors.email = "Email is required";

        else if (!/^\S+@\S+\.\S+$/.test(email))
            newErrors.email = "Email is invalid"


        if (!age)
            newErrors.age = "Age is required";
        else if (isNaN(age) || age < 1 || age > 120)
            newErrors.age = "Age must be between 1 and 120";


        if (!password)
            newErrors.password = "Password is required";
        else if (password.length < 6)
            newErrors.password = "Password must be atleast 6 characters";



        if (!confirmPassword)
            newErrors.confirmPassword = "Please confirm your password";
        else if (password !== confirmPassword)
            newErrors.confirmPassword = "Password do not match"


        if (!gender)
            newErrors.gender = "Gender is required";


        return newErrors;

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
        } else {
            setError({})
            alert("Form submitted successfully");
            console.log('form data', formData);

            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
                gender: ''
            })

        }
    }
    return (

        <form onSubmit={handleSubmit}>
            {/* name */}
            <div>
                <label htmlFor="name">Name</label>
                <input type="text"
                    value={formData.name} placeholder='Name' name='name' onChange={handleChange} />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}

            </div>


            {/* email */}
            <div>
                <input type="email"
                    value={formData.email} placeholder='email' name='email' onChange={handleChange} />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}

            </div>

            {/* age */}
            <div>
                <input type="text"
                    value={formData.age} placeholder='age' name='age' onChange={handleChange} />
                {error.age && <p style={{ color: "red" }}>{error.age}</p>}

            </div>

            {/* passsword */}
            <div>
                <input type="password"
                    value={formData.password} placeholder='password' name='password' onChange={handleChange} />
                {error.password && <p style={{ color: "red" }}>{error.password}</p>}

            </div>

            {/* confirm-passsword  */}
            <div>
                <input type="password"
                    value={formData.confirmPassword} placeholder='confirmpassword' name='confirmPassword' onChange={handleChange} />
                {error.confirmPassword && <p style={{ color: "red" }}>{error.confirmPassword}</p>}

            </div>

            {/* gender */}
            <div>

                {/* male */}
                <label>
                    <input type="radio" name='gender' value="male" checked={formData.gender === 'male'} onChange={handleChange} />Male</label>


                {/* female */}
                <label>
                    <input type="radio" name='gender' value="female" checked={formData.gender === 'female'} onChange={handleChange} />Female</label>
                {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}


            </div>

            <button type='submit'>Submit</button>

        </form>
    )
}

export default FormValidation
