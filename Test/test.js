//PROMISE

// const fetchDataPromise = () => {
//     return new Promise((resolve, reject) => {
//       fetch('https://reqres.in/api/users?page=2')
//         .then(response => response.json())
//         .then(data => {
//           resolve(data.data);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   };
  
//   fetchDataPromise()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });




//CALLBACK
//  const fetchDataPromise = () => {
//     return fetch('https://reqres.in/api/users?page=2')
//       .then(response => response.json())
//       .then(data => data.data)
//       .catch(error => console.error(error));
//   };
  
  
//     fetchDataPromise().then(data => {
//       console.log(data);
//     });




// ASYNC AWAIT
// const b = async () => {
//     try{
//         const response = await fetch('https://reqres.in/api/users?page=2');
//         const json = await response.json();
//         console.log(json.data);
//     }catch(error){
//         console.error(error);
//     }

// }

// b();