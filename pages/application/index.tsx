import React from 'react'

type Props = {}

const Application = (props: Props) => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <img src='https://images.unsplash.com/photo-1576158114254-3ba81558b87d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='A person with a laptop'/>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Fullname'
                        value='Zoe'
                        onChange={() => { }}
                    />
                </div>
                <div>
                    <label htmlFor="name">Bio</label>
                    <input type="text" id='bio' name='bio' />
                </div>
                <div>
                    <label htmlFor="job-location">Name</label>
                    <select name="" id="job-location">
                        <option value="">Select your location</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Seattle">Seattle</option>
                        <option value="Dallas">Dallas</option>
                        <option value="Houston">Houston</option>
                        <option value="Philadelphia">Philadelphia</option>
                        <option value="Atlanta">Atlanta</option>
                        <option value="Washington D.C.">Washington D.C.</option>
                        <option value="Boston">Boston</option>
                        <option value="San Diego">San Diego</option>
                        <option value="San Jose">San Jose</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id='terms' />
                        I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Application