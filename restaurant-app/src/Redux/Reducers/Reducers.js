const initialState = {
  cart: [],
  filOut: [],
  products: [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "../images/Breakfast/breakfast1.png",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      quantity: 1,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "../images/lunch/lunch1.png",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      quantity: 1,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "../images/dinner/dinner1.png",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      quantity: 1,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "../images/Breakfast/breakfast2.png",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      quantity: 1,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "../images/lunch/lunch2.png",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      quantity: 1,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "../images/dinner/dinner2.png",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      quantity: 1,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "../images/Breakfast/breakfast3.png",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      quantity: 1,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "../images/lunch/lunch3.png",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      quantity: 1,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "../images/dinner/dinner3.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      quantity: 1,
    },
  ],
};
const foodReducers = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = {
        id: action.id,
        price: action.price,
        name: action.name,
        quantity: action.quantity,
        cartId: state.cart.length + 1,
      };
      return { ...state, cart: [...state.cart, newItem] };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((pd) => pd.id !== action.id) };

    //increment and decrement products
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((ele) =>
          ele.id === action.id ? { ...ele, quantity: ele.quantity + 1 } : ele
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((ele) =>
          ele.id === action.id && ele.quantity > 1
            ? { ...ele, quantity: ele.quantity - 1 }
            : ele
        ),
      };
    // filter items by category
    case "FILTER_ITEMS":
      return {
        ...state,
        filOut: action.category,
      };

    
    default:
      return state;
  }
};
export default foodReducers;
