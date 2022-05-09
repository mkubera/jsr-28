// import React, { Component, useEffect, useState } from "react";
import React, { Component } from "react";

// Klasa:
// 1. Wlasciwosci (properties)
// 2. Metody (methods / functions)
// const Loading = () => {}
class Loading extends Component {
  constructor(props) {
    super(props);

    // const [state, setState] = useState({ isLoading: false });
    this.state = {
      isLoading: true,
      appTitle: "App Title",
      dataFromServer: null,
    };
  }

  loadFn = () => {
    this.setState((state) => ({ ...state, isLoading: false }));
  };

  fetchDataFromServer = () => {
    const data =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum aperiam velit porro fuga temporibus, eius veritatis officiis. Iste debitis vitae magnam a, quos reiciendis id illum natus corrupti cum?";
    this.setState((state) => ({ ...state, dataFromServer: data }));
  };

  componentDidMount() {
    setTimeout(() => this.fetchDataFromServer(), 3000);
  }

  render() {
    const { isLoading, appTitle, dataFromServer } = this.state;

    return (
      <div>
        <p>{dataFromServer ?? "Loading from server..."}</p>
        <p>
          <button onClick={this.fetchDataFromServer}>load data</button>
        </p>
        <p>{appTitle}</p>
        <p>{isLoading ? "Loading" : "Loaded"}</p>
        {!isLoading && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            repellendus modi eveniet eius, accusamus natus hic dolorum saepe
            ipsum culpa doloremque architecto praesentium officia eligendi
            debitis fuga corrupti doloribus nobis!
          </p>
        )}
        <p>
          <button onClick={this.loadFn}>Load</button>
        </p>
      </div>
    );
  }
}

// const Loading = (props) => {
//   const [state, setState] = useState({
//     isLoading: true,
//     appTitle: "App Title",
//     dataFromServer: null,
//   });

//   const loadFn = () => {
//     setState((state) => ({ ...state, isLoading: false }));
//   };

//   const fetchDataFromServer = () => {
//     const data =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum aperiam velit porro fuga temporibus, eius veritatis officiis. Iste debitis vitae magnam a, quos reiciendis id illum natus corrupti cum?";
//     setState((state) => ({ ...state, dataFromServer: data }));
//   };

//   useEffect(() => {
//     setTimeout(() => fetchDataFromServer(), 3000);
//   }, []);

//   const { isLoading, appTitle, dataFromServer } = state;

//   return (
//     <div>
//       <p>{dataFromServer ?? "Loading from server..."}</p>
//       <p>
//         <button onClick={fetchDataFromServer}>load data</button>
//       </p>
//       <p>{appTitle}</p>
//       <p>{isLoading ? "Loading" : "Loaded"}</p>
//       {!isLoading && (
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
//           repellendus modi eveniet eius, accusamus natus hic dolorum saepe ipsum
//           culpa doloremque architecto praesentium officia eligendi debitis fuga
//           corrupti doloribus nobis!
//         </p>
//       )}
//       <p>
//         <button onClick={loadFn}>Load</button>
//       </p>
//     </div>
//   );
// };

export default Loading;
