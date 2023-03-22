import React, { useState } from "react";
import { Button } from "react-bootstrap";


// const [SecondName, setSecondName] = useState()
// const [Name, setName] = useState()
// const [SurName, setSurName] = useState()
// const [Email, setEmail] = useState()
// const [Phone, setPhone] = useState()
// const [Birthday, setBirthday] = useState()
// const [About, setAbout] = useState()


export const About = () => {
    
    const [candidate, setCandidate] = useState()
    const getCandidate = () => {
        fetch('http://y92830rk.beget.tech/script.php')
        .then((response) => response.json())
        .then((data) => setCandidate(data));
    }

    return (

    <div className="content">
        <div className="content__header">
            <h1>Все заявки</h1>
        </div>
        <Button name="button" onClick={getCandidate}>Кнопка</Button>
        {/* <p>{candidate.name}</p> */}
    </div>
    )
}

