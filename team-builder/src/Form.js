import React from 'react'

function TeamForm({values, onInputChange, onSubmit}) {
    return (
        <form className='team-form'>
            <h2>New Project Members Sheet</h2>
            <h3>Add your members below</h3>
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
            <select name="role" value={values.role} onChange = {onInputChange} >
            <option value="">---select Role---</option>
            <option value="PL">Project Lead</option>
            <option value="TL">Team Lead</option>
            <option value="U1">Unit 1</option>
            <option value="U2">Unit 2</option>
            <option value="U3">Unit 3</option>
            <option value="U4">Unit 4</option>
          </select>
            </label>
            
            <button className='submit' onClick={onSubmit}>SUBMIT</button>
        </form>
    )
}

export default TeamForm