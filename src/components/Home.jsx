import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from '../assets/pizzas'; 
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="homecontainer">
      <h1 className="text-center my-4">Lista de Pizzas</h1>  
      {/* Fila para las tarjetas de pizza */}
      <Row>
        {pizzas.map(pizza => (
          <Col key={pizza.id} xs={12} md={4} className="mb-4">
            <CardPizza
              name={pizza.name}
              description={pizza.description}
              ingredients={pizza.ingredients}
              price={pizza.price}
              img={pizza.img} 
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;





