import React, { useEffect, useState } from 'react';

function Both_enroll() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [word, setWord] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const enrollment_number = urlParams.get('enrollment_number');
        setWord(enrollment_number);

        // Fetch student details based on enrollment number
        fetchData(enrollment_number);
    }, []); 

    const fetchData = async (enrollment_number) => {
        try {
            const response = await fetch(`http://localhost/stuman/back/get_result(enrol).php?enrollment_number=${enrollment_number}`);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleOptionClick = (value) => {
        // Navigate to the selected URL if it's not empty
        if (value !== "") {
            window.location.href = value;
        }
    };
    
    return (
        <>
            <div style={{ margin: 'auto', alignItems: 'center', display: 'grid' }}>
                <div className='outer'></div>
                <h1 style={{ margin: 'auto', alignItems: 'center' }}>Student details of enrollment_number {word}</h1>
                <div className='outerrec' style={{ margin: 'auto', alignItems: 'center',marginTop:"50px" }}>
                <h3 style={{ margin: 'auto', alignItems: 'center' ,marginTop:"20px"}} > What do you want as:</h3>
                    <div className='rectangle'>
                        <button type='button' style={{ width: "100%" ,height:"100px"}} onClick={() => handleOptionClick(`Result_enroll?enrollment_number=${word}`)}>Result</button>
                        <button type='button' style={{ width: "100%" }} onClick={() => handleOptionClick(`Personal_enroll?enrollment_number=${word}`)}>personal details</button>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Both_enroll;
