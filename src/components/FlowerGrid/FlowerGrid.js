import React, { Component } from 'react';
import axios from '../../axios';
import axiosproxy from '../../axios-with-proxy';

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
            const favFlowers = response.data.fav_flowers;
            const flowers = [...this.state.flowers];
            favFlowers.forEach(favFlower => {
               flowers.forEach((flower, index) => {
                  if (favFlower.flower.id === flower.id) {
                     const updatedFlower = {
                        ...flower,
                        favorite: true,
                        favId: favFlower.id
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

   toggleFav = (id, index) => {
      const headers = {
         'Authorization': this.props.auth
      };
      if (this.state.flowers[index].favorite) {
         const favId = this.state.flowers[index].favId;
         axiosproxy.delete(`/flowers/${id}/favorites/${favId}`, { headers: headers })
            .then(_response => {
               const updatedFlowers = [...this.state.flowers];
               const updatedFlower = {
                  ...updatedFlowers[index],
                  favorite: false,
                  favId: null
               };
               updatedFlowers[index] = updatedFlower;
               this.setState({ flowers: updatedFlowers });
            })
            .catch(error => {
               console.log(error);
            });
      } else {
         axios.post("/flowers/" + id + "/favorites", null, { headers: headers })
            .then(response => {
               const updatedFlowers = [...this.state.flowers];
               const favId = response.data.fav_flower.id;
               const updatedFlower = {
                  ...updatedFlowers[index],
                  favorite: true,
                  favId: favId
               };
               updatedFlowers[index] = updatedFlower;
               this.setState({ flowers: updatedFlowers });
            })
            .catch(error => {
               console.log(error);
            });
      }
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

