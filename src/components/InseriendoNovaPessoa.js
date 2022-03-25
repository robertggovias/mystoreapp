import React, { useState } from "react";
import { connect } from "react-redux";
import { InseriendoNovaPessoa } from "../actions";

function InseriendoNovaPessoaF (tamosJuntos){
    const [person, setPerson] = useState('');

    function novaPessoaHandleChange(sou_eu){
        setPerson(sou_eu.target.value);
    }

    function enviandoPessoaHandleSubmit(sou_eu){
        if (person !=+ ''){
            tamosJuntos.InseriendoNovaPessoa(person);
            setPerson('');
        }
        sou_eu.preventDefault();
    }
    return (
        <form onSubmit={enviandoPessoaHandleSubmit}>
        <input type="text"
        placeholder="Quál é teu nome?"
        onChange={novaPessoaHandleChange}
        value={person}/>
        <button type="submit">Registrar nueva persona</button>
        </form>

    );
}

const listaPessoaMapDispatchToTamosJuntos = {
    InseriendoNovaPessoa
}

export default connect (null, listaPessoaMapDispatchToTamosJuntos)
(InseriendoNovaPessoaF)