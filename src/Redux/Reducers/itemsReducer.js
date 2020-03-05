import axios from "axios";
//initial state

const initialState = {
  item1: {
    name: "chainsaw",
    price: "89.99",
    pic:"https://pngimage.net/wp-content/uploads/2018/05/bloody-chainsaw-png-2.png"
  }
};

// STRING LITERALS
const GET_ITEMS = "GET_ITEMS";

//FUNCTIONS
export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios.get(`/api/items`)
  };
}
//reducer function
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ITEMS}_FULFILLED`:
      return {
        ...state,
        name: payload.data,
        price: payload.data,
        pic :payload.data
      };

    default:
      return state;
  }
}
