import React, { Component } from 'react';
import axios from '../../axios';

import classes from './FlowerGrid.module.css';
import FlowerCard from './FlowerCard/FlowerCard';

class FlowerGrid extends Component {
   state = {
      flowers: null,
      auth: false
   }

   componentDidMount() {
      axios.get("/flowers/random",
         {
            headers: {
               "Authorization": this.props.auth
            }
         })
         .then(response => {
            this.setState({ flowers: response.data.flowers });
         })
         .catch(error => {
            console.log(error);
         });
   }
   componentDidUpdate() {
      if (!this.props.auth || this.state.auth) return;
      const headers = {
         'Authorization': this.props.auth
      };

      axios.get("/flowers/favorites", { headers: headers })
         .then(response => {
            const favFlowerIds = response.data.fav_flowers.map(favFlower => {
               return favFlower.flower.id;
            });
            const flowers = [...this.state.flowers];
            favFlowerIds.forEach(id => {
               flowers.forEach((flower, index) => {
                  if (id === flower.id) {
                     const updatedFlower = {
                        ...flower,
                        favorite: true
                     };
                     flowers[index] = updatedFlower;
                  }
               });
            });
            this.setState({ auth: this.props.auth, flowers: flowers });
         })
         .catch(error => {
            console.log(error);
         });
   }

   addFav = (id, index) => {
      const headers = {
         'Authorization': this.props.auth
      };
      axios.post("/flowers/" + id + "/favorites", null, { headers: headers })
         .then(response => {
            const updatedFlowers = [...this.state.flowers];
            const updatedFlower = {
               ...updatedFlowers[index],
               favorite: true
            };
            updatedFlowers[index] = updatedFlower;
            this.setState({ flowers: updatedFlowers });
         })
         .catch(error => {
            console.log(error);
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
                  addFav={() => this.addFav(flower.id, i)} />
            ))}
         </div>
      );
   }
}

export default FlowerGrid;

