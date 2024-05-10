import React, { useEffect, useState } from 'react';

function Sem_sem() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [word, setWord] = useState('');
    const [sem, setsem] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        window.location.href = selectedValue;
    };

    const handleOptionClick = (value) => {
        console.log("Selected option value:", value);
        if (value !== "") {
            window.location.href = value;
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const sem = urlParams.get('sem');
        const enrollment_number = urlParams.get('enrol');
        setWord(enrollment_number);
        setsem(sem);
        fetchData(sem, enrollment_number);
    }, []);

    const fetchData = async (sem, enrollment_number) => {
        try {
            const response = await fetch(`http://localhost/stuman/back/sem(sem).php?sem=${sem}&enrol=${enrollment_number}`);
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
        alert('No Data'); window.location.href = '/';
    }

    return (
        <>
            <div style={{ margin: 'auto', alignItems: 'center', display: 'grid' }}>
                <div className='outer'>
                    <nav style={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <select style={{ display: 'flex', marginRight: '0px' }} value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Select an option</option>
                            <option value="#passing" onClick={() => handleOptionClick("#")}>Marks</option>
                            {/* <option value="http://localhost:3000/Query?Religion=religion" onClick={() => handleOptionClick("http://localhost:3000/Query?Religion=religion")}>relision</option> */}
                            
                        </select>
                    </nav>
                </div>
                <h1 style={{ margin: 'auto', alignItems: 'center' }}>Semester {sem} mark of {word}</h1>

                {data.map(item => (
                    <div className='outerrec'>
                        <nav style={{ display: 'flex', justifyContent: 'flex-end' }} >
                            <select style={{ display: 'flex', marginRight: '0px' }} value={selectedOption} onChange={handleOptionChange}>
                                <option value="">Select an option</option>
                                <option value="http://localhost:3000/Listing_marks" onClick={() => handleOptionClick("http://localhost:3000/Listing_marks")}>Marks</option>
  <option value={`http://localhost:3000/Sem?sem=1&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=1&enrol=${item.enrollment_number}`)}>sem1</option>
  <option value={`http://localhost:3000/Sem?sem=2&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=2&enrol=${item.enrollment_number}`)}>sem2</option>
  <option value={`http://localhost:3000/Sem?sem=3&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=3&enrol=${item.enrollment_number}`)}>sem3</option>
  <option value={`http://localhost:3000/Sem?sem=4&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=4&enrol=${item.enrollment_number}`)}>sem4</option>
  <option value={`http://localhost:3000/Sem?sem=5&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=5&enrol=${item.enrollment_number}`)}>sem5</option>
  <option value={`http://localhost:3000/Sem?sem=6&enrol=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Sem?sem=6&enrol=${item.enrollment_number}`)}>sem6</option>
                               
  <option value={`http://localhost:3000/Back_enroll?enrollment_number=${item.enrollment_number}`} onClick={() => handleOptionClick(`http://localhost:3000/Back_enroll?enrollment_number=${item.enrollment_number}`)}>Back</option>
                                
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

export default Sem_sem;
