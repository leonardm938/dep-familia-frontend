// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [data, setData] = useState([
//     { id: 1, name: '', age: '' },
//     { id: 2, name: '', age: '' },
//     { id: 3, name: '', age: '' },
//     // ... add more objects as needed
//   ]);

//   const handleInputChange = (event, index) => {
//     const { value, name } = event.target;

//     setData((prevData) =>
//       prevData.map((item, i) =>
//         i === index ? { ...item, [name]: value } : item
//       )
//     );

//   };
  
//   console.log(data)
//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index} style={{display: 'block'}}>
//         <input
//           // key={item.id}
//           name="name"
//           type="text"
//           value={item.name}
//           onChange={(event) => handleInputChange(event, index)}
//         />
//         <input
//         // key={item.id}
//         name="age"
//         type="text"
//         value={item.age}
//         onChange={(event) => handleInputChange(event, index)}
//         />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;
