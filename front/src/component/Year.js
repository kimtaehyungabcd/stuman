import React, { useEffect, useState } from 'react';
function Year() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [word, setWord] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const year = urlParams.get('year');
        setWord(year);

        fetchData(year);
    }, []); // Empty dependency array to run the effect only once on component mount

    const fetchData = async (year) => {
        try {
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

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
         <div style={{margin:'auto',alignItems:'center',display:'grid'}}>
        <div className='outer'>
         {data.map((item, index) => (
        <div className='rectangle' >
        <div className='rec'>
           
                <div key={index}>
                    <p>year: {item.year}</p>
                    <p>Number: {item.number}</p>
                </div>
                
          
             </div>
        </div>
       
          ))} 
           </div>
           </div>
       </>
    );
}

export default Year;
