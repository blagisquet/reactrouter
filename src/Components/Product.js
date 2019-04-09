import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
class Product extends Component {
    render() {
        return (
            <div>
              <NavLink to="/"> Retour à l'accueil </NavLink>
              {this.props.match.params.productNumber}
            </div>
        );
    }
}

export default Product;