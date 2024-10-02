import React from 'react';
import StudentForm from './StudentForm.js';


function NewStudent(probs){
    
    return (
        <div>
            <h1>New Student Registration</h1>
            <StudentForm onRegisterHandler = {probs.addStudent}/>
        </div>
    )
}

export default NewStudent;