export const baseUrl = "https://flowrspot-api.herokuapp.com/api/v1/";
export const baseUrlWithProxy = "https://cors-anywhere.herokuapp.com/" + baseUrl;

export const getRandomFlowers = () => {
   return fetch(baseUrl + 'flowers/random')
      .then(response => response.json())
      .then(data => data.flowers)
      .catch(error => {
         console.log(error);
         return null;
      });
}

export const syncFavs = (flowers, authToken) => {
   const headers = {
      'Authorization': authToken
   };
   return fetch(`${baseUrl}/flowers/favorites`, { headers: headers })
      .then(res => res.json())
      .then(data => {
         const favFlowers = data.fav_flowers;
         const updatedFlowers = [...flowers];

         updatedFlowers.some((flower, i) => {
            if (favFlowers.length === 0) {
               return true;
            }
            favFlowers.some((favFlower, j) => {
               if (favFlower.flower.id === flower.id) {
                  const updatedFlower = {
                     ...flower,
                     favorite: true,
                     favId: favFlower.id
                  };
                  updatedFlowers[i] = updatedFlower;
                  favFlowers.splice(j, 1);
                  return true;
               }
               return false;
            });
            return false;
         });
         return updatedFlowers;
      })
      .catch(error => {
         console.log(error);
         return flowers;
      });
}

export const deleteFav = (id, index, authToken, flowers) => {
   const favId = flowers[index].favId;
   const headers = {
      'Authorization': authToken
   };
   return fetch(`${baseUrlWithProxy}flowers/${id}/favorites/${favId}`,
      {
         method: 'DELETE',
         headers: headers
      })
      .then(res => res.json())
      .then(_data => {
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

export const addFav = (id, index, authToken, flowers) => {
   const headers = {
      'Authorization': authToken
   };
   return fetch(baseUrl + "flowers/" + id + "/favorites",
      {
         method: 'POST',
         headers: headers,
         body: JSON.stringify({})
      })
      .then(res => res.json())
      .then(data => {
         const updatedFlowers = [...flowers];
         const favId = data.fav_flower.id;
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