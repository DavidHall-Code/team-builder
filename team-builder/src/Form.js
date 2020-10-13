import React from 'react'

function TeamForm({values, onInputChange, onSubmit}) {
    return (
        <form className='team-form'>
            <h2>Add Team Members</h2>
            <h3>Input your team's information here</h3>
            <label>Name:&nbsp;
                <input 
                type="text" 
                name='name'
                value={values.name} 
                onChange={onInputChange}                 
                />
            </label>
            
            <label>Email:&nbsp;
                <input 
                type="text" 
                name='email'
                value={values.email} 
                onChange={onInputChange}                 
                />
            </label>

            <label>Role:&nbsp;
                <input 
                type="text" 
                name='role'
                value={values.role} 
                onChange={onInputChange} 
                />
            </label>
            
            <button className='submit' onClick={onSubmit}>SUBMIT</button>
        </form>
    )
}

export default TeamForm