import logo from './logo.svg';
import './App.css';
import NewStudent from './components/newStudentFolder/newStudent.js';
import StudentList from './components/studentList/studentList.js';
import { useState } from 'react';

function App() {
  const [Students, setStudents] = useState([]);

  const addStudent = (student) => {
    console.log('New Student registered: ', student);
    setStudents([...Students, student]); //updating the state with new student array.  // ...Students spread operator is used to copy the existing array.  // Then we add the new student to the array.  // This is a common practice in React to update state.  // It's not necessary to create a new array every time.  // React will automatically re-render the component with the updated state.  // This is why the console.log statement in the button click handler
  }

  return (
    <div>

      <NewStudent addStudent={addStudent}/>
      
      <StudentList students={Students} />
    </div>
  );
}

export default App;
