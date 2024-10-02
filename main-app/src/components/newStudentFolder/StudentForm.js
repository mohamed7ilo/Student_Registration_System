import React,{useState} from "react";
import "./StudentForm.css";

function StudentForm(probs) {
    const [studentName, setStudentName] = useState('');
    const [course, setCourse] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        console.log(studentName);
        probs.onRegisterHandler({name: studentName, course: course});
        setStudentName('');
        setCourse('');
    }

    const changeNameHandler = event => {
        setStudentName(event.target.value);
    }
    
    const changeCourseHandler = event => {
        setCourse(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-registeration__controls">
                <div>
                    <label>Student Name</label>
                    <input type="text" placeholder="Enter student name" onChange={changeNameHandler} required value={studentName}/>
                </div>
                <div className="new-registeration__courses">
                    <label>Course Name</label>
                    <select className="course-selection" defaultValue={'fullStack'} value={course} 
                        onChange={changeCourseHandler} required>
                        <option value="" selected></option>
                        <option value="fullStack">Full stack</option>
                        <option value="product">Product</option>
                        <option value="cyber">Cyber</option>
                        <option value="qa">qa</option>
                    </select>
                </div>
                <div className="new-registeration__actions">
                    <button type="submit">Register</button>
                    <button type="button" >Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default StudentForm;