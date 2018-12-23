import React, { Component } from 'react';
import axios from '../../axios';

import classes from './FlowerGrid.module.css';
import FlowerCard from './FlowerCard/FlowerCard';

class FlowerGrid extends Component {
   state = {
      flowers: null
   }

   componentDidMount() {
      axios.get("/flowers/random",
         {
            headers: {
               "Authorization": this.props.token
            }
         })
         .then(response => {
            this.setState({ flowers: response.data.flowers });
         })
         .catch(error => {
            console.log(error);
         });
   }

   render() {
      let flowers = [];
      if (this.state.flowers) {
         Object.keys(this.state.flowers).map(key => {
            return flowers.push(this.state.flowers[key]);
         });
      }
      return (
         <div className={classes.FlowerGrid}>
            {flowers.map(flower => (
               <FlowerCard
                  key={flower.id}
                  name={flower.name}
                  latin={flower.latin_name}
                  picUrl={flower.profile_picture}
                  sightings={flower.sightings}
                  fav={flower.favorite}
                  showFav={this.props.auth} />
            ))}
         </div>
      );
   }
}

export default FlowerGrid;

