import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature, addTotal } from './actions/index';
import { connect } from 'react-redux';

const App = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
    props.addTotal(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item.price)
    props.addTotal(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} addFeature={props.addFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {
  addFeature,
  removeFeature, 
  addTotal
})(App);