import React, { Component } from 'react';

import * as axiosHelpers from '../../axiosHelpers';
import classes from './FlowerGrid.module.css';
import FlowerCard from './FlowerCard/FlowerCard';

class FlowerGrid extends Component {
   state = {
      flowers: null,
      auth: false
   }

   componentDidMount() {
      axiosHelpers.getRandomFlowers()
         .then(res => {
            this.setState({ flowers: res });
         });
   }

   componentDidUpdate() {
      if (this.state.auth && !this.props.auth) {
         // clean up user data from state
         const updatedFlowers = this.state.flowers.map(flower => {
            return {
               ...flower,
               favorite: false,
               favId: null
            };
         });
         this.setState({
            flowers: updatedFlowers,
            auth: false
         });
      }
      else if (!this.state.auth && this.props.auth) {
         axiosHelpers.syncFavs(this.state.flowers, this.props.auth)
            .then(flowersWithFavs => {
               this.setState({
                  auth: this.props.auth,
                  flowers: flowersWithFavs
               });
            });
      }
   }

   toggleFav = (id, index) => {
      if (this.state.flowers[index].favorite) {
         axiosHelpers.deleteFav(id, index, this.props.auth, this.state.flowers)
            .then(updatedFlowers => {
               this.setState({ flowers: updatedFlowers });
            });
         return;
      }
      axiosHelpers.addFav(id, index, this.props.auth, this.state.flowers)
         .then(updatedFlowers => {
            this.setState({ flowers: updatedFlowers });
         });
   }

   render() {
      let flowers = [];
      if (this.state.flowers) {
         Object.keys(this.state.flowers).map(key => {
            return key < 20 ? flowers.push(this.state.flowers[key]) : null;
         });
      }
      return (
         <div className={classes.FlowerGrid}>
            {flowers.map((flower, i) => (
               <FlowerCard
                  key={flower.id}
                  name={flower.name}
                  latin={flower.latin_name}
                  picUrl={flower.profile_picture}
                  sightings={flower.sightings}
                  fav={flower.favorite}
                  showFavBtn={this.props.auth}
                  toggleFav={() => this.toggleFav(flower.id, i)} />
            ))}
         </div>
      );
   }
}

export default FlowerGrid;

