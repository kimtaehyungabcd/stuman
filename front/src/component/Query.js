import React, { useEffect, useState } from 'react';
function Query() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [word, setWord] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const religion = urlParams.get('Religion');
        setWord(religion);

        fetchData(religion);
    }, []); // Empty dependency array to run the effect only once on component mount

    const fetchData = async (religion) => {
        try {
            const response = await fetch(`http://localhost/stuman/back/allquery.php?Religion=${religion}`);
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
                    <p>Religion: {item.religion}</p>
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

export default Query;
