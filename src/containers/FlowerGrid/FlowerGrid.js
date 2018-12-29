import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRandomFlowers, syncFavs, deleteFav, addFav } from '../../fetch/fetchHelpers';
import classes from './FlowerGrid.module.css';
import FlowerCard from './FlowerCard/FlowerCard';

class FlowerGrid extends Component {
   state = {
      flowers: null,
      loggedIn: false
   }

   componentDidMount() {
      // get random flowers on mount
      getRandomFlowers()
         .then(res => {
            this.setState({ flowers: res });
         });
   }

   componentDidUpdate() {
      // clean up user data from state on logout
      if (this.state.loggedIn && !this.props.authToken) {
         const updatedFlowers = this.state.flowers.map(flower => {
            return {
               ...flower,
               favorite: false,
               favId: null
            };
         });
         this.setState({
            flowers: updatedFlowers,
            loggedIn: false
         });
      }
      // display user's favorite flowers on login
      else if (!this.state.loggedIn && this.props.authToken) {
         syncFavs(this.state.flowers, this.props.authToken)
            .then(flowersWithFavs => {
               this.setState({
                  loggedIn: true,
                  flowers: flowersWithFavs
               });
            });
      }
   }

   toggleFav = (id, index) => {
      if (this.state.flowers[index].favorite) {
         deleteFav(id, index, this.props.authToken, this.state.flowers)
            .then(updatedFlowers => {
               this.setState({ flowers: updatedFlowers });
            });
         return;
      }
      addFav(id, index, this.props.authToken, this.state.flowers)
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
                  showFavBtn={this.props.authToken}
                  toggleFav={() => this.toggleFav(flower.id, i)} />
            ))}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      authToken: state.authToken
   };
};

export default connect(mapStateToProps)(FlowerGrid);

