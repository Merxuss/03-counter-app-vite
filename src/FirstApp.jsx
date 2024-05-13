import PropTypes from "prop-types";

// const getResult = (a, b) => {
//   return a + b;
// }

// const newMessage = 'Eduardo';
// const newMessage = [1,2,5,4,3];
// const heroe = [
//   {
//     id: 1,
//     name: 'Batman',
//     owner: 'DC',
//     affiliation: 'Justice League'
//   },
//   {
//     id: 2,
//     name: 'Spiderman',
//     owner: 'Marvel',
//     affiliation: 'Avengers'
//   },
// ]
// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Eduardo'
// };

// export const FirstApp = (id = 1) => {
//   heroe.forEach((id) => {
//     if (id === id) {
//       return (
//         <>
//           {/*<code> { JSON.stringify(newMessage) } </code>*/}
//           <h1>{ JSON.stringify(heroe.id) }</h1>
//           <p>Soy un subtitulo</p>
//         </>
//       );
//       id = id + 1;
//     } else {
//       <>
//           {/*<code> { JSON.stringify(newMessage) } </code>*/}
//           <h1>No hay mas heroes</h1>
//           <p>Soy un subtitulo</p>
//       </>
//     }
//   })
// }

export const FirstApp = ( {title, subTitle, name} ) => {

  if (!title) {
    throw new Error('El title no existe')
  }

  console.log(title, subTitle)

  return (
    <>
      {/*<code> { JSON.stringify(newMessage) } </code>*/}
      {/* <h1>{ getResult(1,2) }</h1> */}
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  
  name: "Eduardo Lopez",
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
  
}