import React, { useState, useEffect } from "react";
import './studentList.css';


function StudentList(probs) {
    let students = probs.students || [{ name: 'bhaa', course: 'Computer Science' }, { name: 'hmodi', course: 'Computer Science' }];
    const [filter, setFilter] = useState('all');
    const [studentsToShow, filterStudents] = useState(probs.students);
    const filterByCourse = () => {
        if (filter === 'all') {
            filterStudents(probs.students);
        } else {
            filterStudents(probs.students.filter((student) => student.course === filter));
        }
        console.log(studentsToShow);
    }
    const changeFilterHandler = (event) => {
        setFilter(event.target.value);


    }
    useEffect(() => {
        filterByCourse();
    }, [probs.students, filter]);




    return (
        <div className="student-list-container">

            <div className="filter-div">
                <h1>Student List</h1>
                <div className="filter-input">
                    <label>choose a filter</label>
                    <select onChange={changeFilterHandler}>
                        <option value="all">All</option>
                        <option value="fullStack">Full stack</option>
                        <option value="product">Product</option>
                        <option value="cyber">Cyber</option>
                        <option value="qa">qa</option>
                    </select>
                </div>
            </div>
            <div className="student-list">
                {studentsToShow.map((student) => (

                    <div className="student-element">
                        
                        <div className="student-element-details">
                            <img src={`${process.env.PUBLIC_URL}\profile-photo.png`} ></img>
                            <div className="student-element-name">
                                <h2>{student.name}</h2>
                                <p>{student.course}</p>
                            </div>
                        </div>
                        <h1 className="course-char">{student.course.charAt(0).toUpperCase()}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}




export default StudentList;