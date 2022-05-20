import './App.css';
import HelloWord from './components/helloWord';

function App() {
    const nome = 'Alexandre'
    const url = "https://via.placeholder.com/150"
    return ( <
        div className = "App" >
        <
        h1 > Hello app React < /h1> <
        p > Olá meu nome é { nome } < /p> <
        img src = { url }
        alt = "Minha imagem" / >
        <
        HelloWord / >
        <
        /div>
    );
}

export default App;