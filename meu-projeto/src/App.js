import "./App.css";
import HelloWord from "./components/helloWord";
import SyMyName from "./components/SyMyName";
import Pessoa from "./components/Pessoa";
import Frases from "./components/Frases";
const nomeM = "Maria";

function App() {
    return (
        <div className="App">
            <SyMyName nome="Alexandre" />
            <Frases />
            <Frases />
            <HelloWord nome={nomeM} />{" "}
            <Pessoa
                nome="alex"
                idade="33"
                profissao="Programador"
                foto="https://via.placeholder.com/150"
            />
        </div>
    );
}

export default App;
