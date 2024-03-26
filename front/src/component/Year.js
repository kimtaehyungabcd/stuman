import React, { useEffect, useState } from 'react';
function Year() {
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
        const year = urlParams.get('year');
        setWord(year);

        fetchData(year);
    }, []); // Empty dependency array to run the effect only once on component mount

    const fetchData = async (year) => {
        try {
            const response = await fetch(`http://localhost/stuman/back/all_personaldetail(year).php?year=${year}`);
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
            <h1 style={{margin:'auto',alignItems:'center'}}>student details of year {word}</h1>
            
          

            {data.map(item => (
            <div className='outerrec'>
  <nav style={{ display: 'flex',justifyContent:'flex-end'}} >
  <select style={{ display: 'flex', marginRight: '0px' }} value={selectedOption} onChange={handleOptionChange}>
  <option value="">Select an option</option>
  <option value={`http://localhost:3000/Listing_marks?enrollment_number=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Listing_marks?enrollment_number=${item.enrollment_number}`)}>Marks</option>
  <option value="#back" onClick={() => handleOptionClick("option2")}>backs</option>
  <option value="option3" onClick={() => handleOptionClick("option3")}>Option 3</option>
</select>


   </nav>
   <div className='rectangle' key={item.enrollment_number}>
 
   <div>
     <img src={item.photo} alt="student photo" height="200" width="200" style={{ margin: '30px' }} />
   </div>
   <div className='rec'>
     <p><p style={{ fontWeight: 'bold' }}>Enrollment Number</p>: {item.enrollment_number}</p>
     <p><p style={{ fontWeight: 'bold' }}>Name:</p> {item.first_name} {item.last_name}</p>
     <p><p style={{ fontWeight: 'bold' }}>Middle Name: </p>{item.middle_name}</p>
     <p><p style={{ fontWeight: 'bold' }}>Student Contact Number:</p> {item.student_contact_number}</p>
     <p><p style={{ fontWeight: 'bold' }}>Date of Birth:,</p> {item.date_of_birth}</p>
     <p><p style={{ fontWeight: 'bold' }}>Email: </p>{item.email}</p>
     <p><p style={{ fontWeight: 'bold' }}>Place of Birth: </p>{item.place_of_birth}</p>
     <p><p style={{ fontWeight: 'bold' }}>Name of Parent/Guardian:</p> {item.name_of_parent_guardian}</p>
   </div>
   <div className='rec'>
     <p><p style={{ fontWeight: 'bold' }}>Address: </p>{item.address}</p>
     <p><p style={{ fontWeight: 'bold' }}>Parent Contact Number:</p> {item.parent_contact_number}</p>
     <p><p style={{ fontWeight: 'bold' }}>Course:</p> {item.course}</p>
     <p><p style={{ fontWeight: 'bold' }}>Category:</p> {item.category}</p>
     <p><p style={{ fontWeight: 'bold' }}>Date of Admission:</p> {item.date_of_admission}</p>
     <p><p style={{ fontWeight: 'bold' }}>Last School Attended:</p> {item.last_school_attended}</p>
     <p><p style={{ fontWeight: 'bold' }}>EPIC:</p> {item.EPIC}</p>
     <p><p style={{ fontWeight: 'bold' }}>District:</p> {item.district}</p>
   </div>
   <div className='rec'>
     <p><p style={{ fontWeight: 'bold' }}>Constituency: </p>{item.constituency}</p>
     <p><p style={{ fontWeight: 'bold' }}>Religion:</p> {item.religion}</p>
   </div>
 </div>
 </div>
 
))}

            </div>
       </>
    );
}

export default Year;
