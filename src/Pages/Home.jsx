import Greetings from "../Components/Greetings";


// A variável nome foi atribuida aqui com um prompt que é exibito ao usuário para que informe o seu nome de usuário ou atribua Visitante! quando o mesmo não informar. Na function, a Tag Greetings trás a variável nome que é atribuida a chave visitorName.

const visitorName = window.prompt('Qual o seu nome?') || "Visitante!";

function Home() {
    return(
    <Greetings nome={visitorName}/>
    );
}
export default Home;