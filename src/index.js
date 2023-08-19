import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';

import Evento from './Evento';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eventos: [], carregado: false};
  }

  componentDidMount() {

    //if (!this.state.carregado) {
      
      setTimeout(() => this.setState({
        ...this.state, eventos: feeds, carregado: true
      }), 2000);
    //}
  }

  render() {

    if (!this.state.carregado) {
      return <p>Carregando...</p>;
    }

    return (
        <div className="ui feed">
          {
            this.state.eventos.map(x => {
              return (
                <Evento 
                  key={x.id}
                  foto={x.foto}
                  usuario={x.usuario}
                  tempo={x.tempo}
                  likes={x.likes}
                />
              );
            })
          }        
        </div>
    );
  }
}

const feeds = [
  {
    id:1,
    foto:faker.image.avatar(),
    usuario:faker.person.firstName(),
    tempo:`Há ${faker.number.int(10)} hora(s)`,
    likes:faker.number.int(10),
  },
  {
    id:2,
    foto:faker.image.avatar(),
    usuario:faker.person.firstName(),
    tempo:`Há ${faker.number.int(10)} hora(s)`,
    likes:faker.number.int(10),
  },
  {
    id:3,
    foto:faker.image.avatar(),
    usuario:faker.person.firstName(),
    tempo:`Há ${faker.number.int(10)} hora(s)`,
    likes:faker.number.int(10),
  },
  {
    id:4,
    foto:faker.image.avatar(),
    usuario:faker.person.firstName(),
    tempo:`Há ${faker.number.int(10)} hora(s)`,
    likes:faker.number.int(10),
  },
  {
    id:5,
    foto:faker.image.avatar(),
    usuario:faker.person.firstName(),
    tempo:`Há ${faker.number.int(10)} hora(s)`,
    likes:faker.number.int(10),
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);
