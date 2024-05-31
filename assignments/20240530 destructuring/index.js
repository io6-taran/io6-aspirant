const { card: { info: { name1 } = {} } = {} } = {
  card: {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
    info: {
      id: "43546767",
      name1: "Noodles Special",
      category: "Chinese",
      description:
        "Noodles sauteed with capsicum, spring onions, green chillies, mixed with sauces and seasoned with spices.",
      imageId: "q5ifheuwqyu38yrqg4ey",
      inStock: 1,
      isVeg: 1,
      price: 11200,
    },
  },
};
console.log("name--", name1);

//
const {
  card: {
    card: {
      itemCards: [{ card: { info: { name2 = {} } = {} } = {} }] = [],
    } = {},
  } = {},
} = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      title: "Chinese",
      itemCards: [
        {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            info: {
              id: "43546767",
              name2: "Noodles Special",
              category: "Chinese",
              description:
                "Noodles sauteed with capsicum, spring onions, green chillies, mixed with sauces and seasoned with spices.",
              imageId: "q5ifheuwqyu38yrqg4ey",
              inStock: 1,
              isVeg: 1,
              price: 11200,
            },
          },
        },
      ],
    },
  },
};
console.log("namewitharray1--", name2);

const { card: { info: { name3 } = {} } = {} } = {
  card: {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
    info: {
      id: "43546770",
      name3: "Manchurian Special",
      category: "Chinese",
      description:
        "A Chinese cuisine made with crispy vegetable balls and blended in a thick gravy made with variety of sauces. The flavour of ginger and garlic is well absorbed in the gravy giving an authentic touch to dish.",
      imageId: "lifhstcsg0qb6ha9dgsq",
      inStock: 1,
      isVeg: 1,
      price: 11200,
    },
  },
};
console.log("name3--", name3);

///
const { card: { info: { name4 = {} } = {} } = {} } = {
  card: {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
    info: {
      id: "43546777",
      name4: "Butter Masala Chaap",
      category: "Gravy Chaap",
      description:
        "A delightfully flavor with mouthwatering butter masala chaap ; served along with refreshing Chutney",
      imageId: "uxehgqndvibgpnitjbhs",
      inStock: 1,
      isVeg: 1,
      price: 29600,
    },
  },
};
console.log("nmae4", name4);

//
const {
  card: {
    card: { itemCards: [{ card: { info: { name5 } = {} } = {} }] = [] } = {},
  } = {},
} = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      title: "Tandoori Chaap",
      itemCards: [
        {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
            info: {
              id: "43546783",
              name5: "Masala Cream Chaap",
              category: "Tandoori Chaap",
              imageId: "vkiyl6vx8tlmnrucfrdi",
              inStock: 1,
              isVeg: 1,
              price: 14400,
            },
          },
        },
      ],
    },
  },
};
console.log("name3witharray--", name5);
