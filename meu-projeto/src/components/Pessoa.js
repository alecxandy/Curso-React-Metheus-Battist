function Pessoa({ nome, idade, profissao, foto }) {
    return (
        <div>
            <img src={foto} alt={foto} /> <h2> nome: {nome} </h2>{" "}
            <p> idade: {idade} </p> <p> Profissao: {profissao} </p>{" "}
        </div>
    );
}

export default Pessoa;
