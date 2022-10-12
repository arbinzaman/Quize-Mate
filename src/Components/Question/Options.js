import React, { useEffect, useState } from 'react';

const Option = ({ t, revealAns, c }) => {

    const [rightAns, setRightAns] = useState(false)

    useEffect(() => {
        if (revealAns && (t === c)) setRightAns(true)
    }, [revealAns, t, c])

    const handleInputChange = e => {

        const selectedAns = e.target.value

        if (selectedAns === c) {
            setRightAns(true)
            console.log(e.target.value)
        }

    }

    return (
        <label htmlFor={t} className={`border ms-2 ${rightAns && "bg-success text-white"}`}>
            <p className='font-poppins'>
                <input onChange={handleInputChange} type="radio" id={t} value={t} name="answer" /> {t}
            </p>
        </label>
    );
};

export default Option;