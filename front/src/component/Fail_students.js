import React, { useEffect, useState } from 'react';
function Fail_students() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [word, setWord] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
  

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Parse URL parameters
                const urlParams = new URLSearchParams(window.location.search);
                const year = urlParams.get('year');
                console.log(year);
                setWord(year)
                // Fetch data from API
                const response = await fetch(`http://localhost/stuman/back/get_enrol_withbacks(year).php?year=${year}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array to run the effect only once on component mount

    if (error) {
        alert('No Data'); window.location.href = '/';
    }

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
    
        
    
    
 


    return (
        <>
            <div style={{margin:'auto',alignItems:'center',display:'grid'}}>
<div className='outer'>
<nav style={{ display: 'flex',justifyContent:'flex-end'}} >
  <select style={{ display: 'flex', marginRight: '0px' }} value={selectedOption} onChange={handleOptionChange}>
  <option value="">Select an option</option>
  <option value="#passing" onClick={() => handleOptionClick("#")}>Marks</option>
  {/* <option value="http://localhost:3000/Query?Religion=religion" onClick={() => handleOptionClick("http://localhost:3000/Query?Religion=religion")}>relision</option> */}
  
</select>
</nav>
</div>
            <h1 style={{margin:'auto',alignItems:'center'}}>Passed student  marks are as follows of {word}: </h1>
            
          

            {data.map(item => (
            <div className='outerrec'>
  <nav style={{ display: 'flex',justifyContent:'flex-end'}} >
  <select style={{ display: 'flex', marginRight: '0px' }} value={selectedOption} onChange={handleOptionChange}>
  <option value="">Select an option</option>
  <option value={`http://localhost:3000/Listing_marks?enrollment_number=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Listing_marks?enrollment_number=${item.enrollment_number}`)}>Marks</option>
  <option value="#back" onClick={() => handleOptionClick("option2")}>backs</option>
  
</select>


   </nav>
   <div className='rectangle' key={item.enrollment_number}>
 
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

export default Fail_students;
    