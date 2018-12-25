import axios from './axios';
import axiosproxy from './axios-with-proxy';

export const getRandomFlowers = () => {
   return axios.get("/flowers/random")
      .then(response => {
         return response.data.flowers;
      })
      .catch(error => {
         console.log(error);
         return null;
      });
}

export const syncFavs = (flowers, auth) => {
   const headers = {
      'Authorization': auth
   };
   return axios.get("/flowers/favorites", { headers: headers })
      .then(response => {
         const favFlowers = response.data.fav_flowers;
         const updatedFlowers = [...flowers];
         favFlowers.forEach(favFlower => {
            updatedFlowers.forEach((flower, index) => {
               if (favFlower.flower.id === flower.id) {
                  const updatedFlower = {
                     ...flower,
                     favorite: true,
                     favId: favFlower.id
                  };
                  updatedFlowers[index] = updatedFlower;
               }
            });
         });
         return updatedFlowers;
      })
      .catch(error => {
         console.log(error);
         return flowers;
      });
}

export const deleteFav = (id, index, auth, flowers) => {
   const favId = flowers[index].favId;
   const headers = {
      'Authorization': auth
   };
   return axiosproxy.delete(`/flowers/${id}/favorites/${favId}`, { headers: headers })
      .then(_response => {
         const updatedFlowers = [...flowers];
         const updatedFlower = {
            ...updatedFlowers[index],
            favorite: false,
            favId: null
         };
         updatedFlowers[index] = updatedFlower;
         return updatedFlowers;
      })
      .catch(error => {
         console.log(error);
         return flowers;
      });
}

export const addFav = (id, index, auth, flowers) => {
   const headers = {
      'Authorization': auth
   };
   return axios.post("/flowers/" + id + "/favorites", null, { headers: headers })
      .then(response => {
         const updatedFlowers = [...flowers];
         const favId = response.data.fav_flower.id;
         const updatedFlower = {
            ...updatedFlowers[index],
            favorite: true,
            favId: favId
         };
         updatedFlowers[index] = updatedFlower;
         return updatedFlowers;
      })
      .catch(error => {
         console.log(error);
         return flowers;
      });
}