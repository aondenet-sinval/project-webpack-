import React from 'react';

const listClients = [
    {id: 1,
    name: 'Sinval Gomes'},
    {id: 2,
    name: 'Filomena Soares'},
    {id: 3,
    name: 'Gabriela Sampaio da Silva'},
    {id: 4,
    name: 'Jose Ane'}
]

const Client = (listClients, index) => {
	return (
	   <li key={index}>{listClients.name}</li>
	)
}
const Clients = () => { return (<ul>{listClients.map(Client)}</ul>)};
export default Clients;
