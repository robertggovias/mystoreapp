import React from "react";
import { connect } from "react-redux"

function ListaDePessoas(tamosJuntos){
    const serieArr = tamosJuntos.data
    const laLista = serieArr.map((val, indexando) =>
    <li key={indexando}>{val}</li>
        );
        return <ul>{laLista}</ul>;
}

    function mapEstadoToProps(estado){
        return{
            contador: estado.contador
        }
    }
}

export default connect(mapEstadoToProps)(ListaDePessoas)