//fetch
// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userData = [
//         {
//           id: 12,
//           username: "exampleUser",
//           email: "user@example.com",
//         },
//         {
//           id: 3,
//           username: "exampleUser",
//           email: "user@example.com",
//         },
//       ];
//       // filter data equal to params
//       const user = userData.find((user) => user.id === userId);
//       if (user) {
//         resolve(user);
//       } else {
//         reject("Error: User not found");
//       }
//       // reject('Error: Unable to fetch user data');
//     }, 1000);
//   });
// }

//async function (use the fetch)
// async function getUser(userId) {
//   try {
//     const userData = await fetchUser(userId);
//     console.log("User data:", userData);
//     return userData;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error;
//   }
// }

// //call async function
// const userId = 3;
// getUser(userId);

// async class method
// class User {
//   async wait() {
//     return await Promise.resolve(1);
//   }
// }

// new User().wait().then(console.log("Executed"));

//handling api with params (get)
const email = "ariffazlan16@gmail.com";
const endpoint = "https://career.netizenexperience.com/api/resume";

async function getUser(email) {
  try {
    // Construct the URL with email parameter
    let url = `${endpoint}?email=${email}`;

    //fetch data
    let response = await fetch(url);
    let data = await response.json();

    //handle data
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getUser(email);

//handling api with params (post)
// async function postData(email) {
//     try {
//         // Construct the request body
//         const bodyData = JSON.stringify({ email: email });

//         // Set up options for the fetch call
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: bodyData
//         };

//         // Make the POST request
//         let response = await fetch(endpoint, options);
//         let data = await response.json();

//         // Handle the data
//         console.log(data);
//     } catch (error) {
//         console.error('Error posting data:', error);
//     }
// }
