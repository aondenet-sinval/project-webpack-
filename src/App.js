import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from './Button';
import Renderize from './Renderize';
import Clients from './Clients';


const listClientsA = [
    {
    id: 1,
    name: 'Sinval Gomes',
    Skill: ["HTML", "CSS", "Javascript"]
    },
    {
    id: 2,
    name: 'Filomena Soares',
    Skill: ["PHP", "AWK", "Java"]
    },
    {
    id: 3,
    name: 'Gabriela Sampaio',
    Skill: ["React", "Laravel", "Frontend"]
    },
    {
    id: 4,
    name: 'Jose Ane',
    Skill: ["Backend", "C#", "C++"]
    }
]

const ButtonA = <button>Histórico</button>
const ButtonB = <button>Cadastrar Cliente</button>
const hasCustomer = false;//Definindo aqui renderização do histórico de clientes.
//start evitar renderização
const client = "Sinval Gomes";
//end evitar renderizaçao
//Start renderização com condicional inline => ? :
const renderShowClient = (
     <div>
     Clique no botão abaixo e visualize o histórico de clientes. <br />   
     {ButtonA}   
     </div>
)

const renderAddClient = (
     <div>
     Você está vendo essa tela porque não temos clientes cadastrados.<br/>
     Clique e  cadastre um novo cliente abaixo. <br/>
     {ButtonB}     
     </div>
)
//End renderização com condicional inline => ? :

const umaLinha = true;//Condicional com && para renderizar o componente Renderize

export default class App extends React.Component {
  render() {
        const ClientsA = (listClientsA, index) => {
	     return (
	        <li key={index}>{listClientsA.name} - {listClientsA.Skill.join(' | ')}</li>
	        )
          }  	
 	
   return (
     <div className="App">
     <hr />
     <Button /> Desenvolvimento com React, Webpack, EsLint e Babel.
     <hr />
     <p><b>Renderização de componentes:</b> Estabelecendo condição para que o componente seja renderizado.</p>
     <ul>{listClientsA.map(ClientsA)}</ul>
     <hr /><br />
     Clientes II <br />
     <Clients />     
     {umaLinha && (<Renderize />)}
     <p>Valor da variável client: <b>{client}</b></p>
     {hasCustomer ? renderShowClient : renderAddClient}
     </div>
   )
  }
}
const item = document.getElementById('app');
ReactDOM.render(<App />, item);