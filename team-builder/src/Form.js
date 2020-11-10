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
                placeholder="Enter Members Full Name"                 
                />
            </label>
            
            <label>Email:&nbsp;
                <input 
                type="text" 
                name='email'
                value={values.email} 
                onChange={onInputChange} 
                placeholder="Enter Members E-mail"                
                />
            </label>

            <label>Role:&nbsp;
            <select name="role" value={values.role} onChange = {onInputChange} >
            <option value="">---select Role---</option>
            <option value="pl">Project Lead</option>
            <option value="tl">Team Lead</option>
            <option value="u1">Unit 1</option>
            <option value="u2">Unit 2</option>
            <option value="u3">Unit 3</option>
            <option value="u4">Unit 4</option>
          </select>
            </label>
            
            <button className='submit' onClick={onSubmit}>SUBMIT</button>
        </form>
    )
}

export default TeamForm