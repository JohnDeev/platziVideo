// import React, { useState, useEffect } from "react";

// import Header from "../components/Header";
// import SearchBar from "../components/SearchBar";
// import Categories from "../components/Categories";
// import Carousel from "../components/Carousel";
// import CarouselItem from "../components/CarouselItem";
// import Footer from "../components/Footer";

// import useInitialState from "../hooks/useInitialState";

// import "../assets/styles/App.scss";

// const API = "http://localhost:3000/initialState";

// const App = () => {

//     const [videos, categories] = useInitialState(API);

//     return (
//         <div>
//             <Header />
//             <SearchBar />
//             {categories.map((category) => (
//                 videos[category].length > 0 && (
//                     <Categories title={category}>
//                         <Carousel>
//                             {videos[category].map((item) => (
//                                 <CarouselItem key={item.id} {...item} />
//                             ))}
//                         </Carousel>
//                     </Categories>
//                 )))}
//             <Footer />
//         </div>
//     );
// };

// export default App;

// ///custom hooks mas reutilizable
// import { useState, useEffect } from "react";

// const useInitiaState = (API) => {

//     const [videos, setVideos] = useState({ "mylist": [], "trends": [], "original": [] });
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         fetch(API)
//             .then((response) => response.json())
//             .then((data) => {
//                 setVideos(data);
//                 setCategories(Object.keys(data));
//             });
//     }, []);

//     return [videos, categories];
// };

// export default useInitiaState;
