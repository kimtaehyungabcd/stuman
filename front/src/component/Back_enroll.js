import React, { useEffect, useState } from 'react';
function Back_enroll() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [word, setWord] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    // Function to handle the change in the selected option
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        
        // Navigate to the selected URL
        window.location.href = selectedValue;
    };
    const handleOptionClick = (value) => {
        // Your logic for handling the click event for the selected option
        console.log("Selected option value:", value);
    
        // Navigate to the selected URL if it's not empty
        if (value !== "") {
            window.location.href = value;
        }
    };
    
        
    
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const enrollment_number = urlParams.get('enrollment_number');
        setWord(enrollment_number);

        fetchData(enrollment_number);
    }, []); // Empty dependency array to run the effect only once on component mount

    const fetchData = async (enrollment_number) => {
        try {
            const response = await fetch(`http://localhost/stuman/back/get_backs(enrol).php?enrollment_number=${enrollment_number}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div style={{margin:'auto',alignItems:'center',display:'grid'}}>
<div className='outer'>
<nav style={{ display: 'flex',justifyContent:'flex-end'}} >
  <select style={{ display: 'flex', marginRight: '0px' }} value={selectedOption} onChange={handleOptionChange}>
  <option value="">Select an option</option>
  <option value="#passing" onClick={() => handleOptionClick("#")}>Marks</option>
  <option value="http://localhost:3000/Query?Religion=religion" onClick={() => handleOptionClick("http://localhost:3000/Query?Religion=religion")}>relision</option>
  <option value="option3" onClick={() => handleOptionClick("option3")}>Option 3</option>
</select>
</nav>
</div>
            <h1 style={{margin:'auto',alignItems:'center'}}>student details of enrollment_number {word}</h1>
            
          

            {data.map(item => (
            <div className='outerrec'>
  <nav style={{ display: 'flex',justifyContent:'flex-end'}} >
  <select style={{ display: 'flex', marginRight: '0px' }} value={selectedOption} onChange={handleOptionChange}>
  <option value="">Select an option</option>

  <option value={`http://localhost:3000/Sem?sem=1&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=1&enrol=${item.enrollment_number}`)}>sem1</option>
  <option value={`http://localhost:3000/Sem?sem=2&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=2&enrol=${item.enrollment_number}`)}>sem2</option>
  <option value={`http://localhost:3000/Sem?sem=3&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=3&enrol=${item.enrollment_number}`)}>sem3</option>
  <option value={`http://localhost:3000/Sem?sem=4&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=4&enrol=${item.enrollment_number}`)}>sem4</option>
  <option value={`http://localhost:3000/Sem?sem=5&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=5&enrol=${item.enrollment_number}`)}>sem5</option>
  <option value={`http://localhost:3000/Sem?sem=6&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=6&enrol=${item.enrollment_number}`)}>sem6</option>



  <option value={`http://localhost:3000/Back_enroll?enrollment_number=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Back_enroll?enrollment_number=${item.enrollment_number}`)}>Back</option>
  <option value="option3" onClick={() => handleOptionClick("option3")}>Option 3</option>
</select>


   </nav>
   <div className='rectangle' key={item.enrollment_number}>
 
  <div>
     <img src={item.photo} alt="student photo" height="200" width="200" style={{ margin: '30px' }} />
   </div>
   <div className='rec'>
   <p><strong>Enrollment Number</strong>: {item.enrollment_number}</p>
                        <p><strong>Semester</strong>: {item.semester}</p>
                        <p><strong>Year</strong>: {item.year}</p>
                        <p><strong>Month</strong>: {item.month}</p>
                        <p><strong>Subject Code</strong>: {item.sub_code}</p>
                        <p><strong>Subject Name</strong>: {item.sub_name}</p>
 
   </div>
   <div className='rec'>
   <p><strong>Theory Marks</strong>: {item.theory_marks}</p>
                        <p><strong>Term Marks</strong>: {item.term_marks}</p>
                        <p><strong>Practicals</strong>: {item.practicals}</p>
                        <p><strong>Term Work</strong>: {item.term_work}</p>
                        <p><strong>Total Marks</strong>: {item.total_marks}</p>
                        <p><strong>Percentage</strong>: {item.percentage_column}</p>
   
   </div>
 
 </div>
 </div>
 
))}

            </div>
       </>
    );
}

export default Back_enroll;
