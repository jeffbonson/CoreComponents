const categories = [
  {
    id: "1",
    title: "sort",
  },
  {
    id: "2",
    title: "fast delivery",
  },
  {
    id: "3",
    title: "pure veg",
  },
  {
    id: "4",
    title: "great offers",
  },
  {
    id: "5",
    title: "rating 4.0",
  },
  {
    id: "6",
    title: "new arrivals",
  },
  {
    id: "7",
    title: "cuisines",
  },
  {
    id: "8",
    title: "more",
  },
];



const dishes = [
  {
    id: "1",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha-500x500.jpg",
    dishName: "Poha",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "sandwitch",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1653850280260-aa3b9e00b230?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    dishName: "Chaat",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "Tea",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "Pure Veg",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    dishName: "Vada",
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "Idli",
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "Dosa",
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "paneer",
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1549407981-2e656af56b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "rolls",
  },
  {
    id: "11",
    image:
      "https://images.unsplash.com/photo-1601050690294-397f3c324515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    dishName: "samosa",
  },
  {
    id: "12",
    image:
      "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    dishName: "burger",
  },
];

const coupons = [
  {
    id: "1",
    offer: "20% OFF up to ₹50",
    code: "use code TRYNEW",
  },
  {
    id: "2",
    offer: "Free Delivery",
    code: "above ₹1000",
  },
  {
    id: "3",
    offer: "Flat ₹100 OFF",
    code: "use code ONECARDNEW",
  },
  {
    id: "4",
    offer: "up to ₹100 Mobikwik",
    code: "use code MBKFEST",
  },
  {
    id: "5",
    offer: "Flat ₹150 OFF",
    code: "use code CITI150",
  },
];

const restaurantMenu = [
  {
    id: "1",
    categoryName: "breakfast",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "2",
    categoryName: "pizza",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "3",
    categoryName: "healthy",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "4",
    categoryName: "lunch",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "5",
    categoryName: "sweat",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "6",
    categoryName: "drinks",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "7",
    categoryName: "dinner",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "8",
    categoryName: "south indian",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "9",
    categoryName: "burgers",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
  {
    id: "10",
    categoryName: "bread",
    dishes: [
      {
        id: "1",
        dishName: "eggtoast",
        dishImage:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        isBestSeller: true,
        rating: 4,
        reviews: 1200,
        price: 110,
        about:
          "Eggs provide a source of protein and fat, while toast is a source of complex carbohydrates. Together, this triple whammy offers good nutrient diversity, which is fundamental for a healthy breakfast that keeps you full for longer.",
      },
      {
        id: "2",
        dishName: "Croissant",
        dishImage:
          "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        isBestSeller: false,
        rating: 3.5,
        reviews: 900,
        price: 150,
        about:
          "A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.",
      },
      {
        id: "3",
        dishName: "salad",
        dishImage:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
        isBestSeller: true,
        rating: 3,
        reviews: 1700,
        price: 230,
        about:
          "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are typically served at room temperature or chilled, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
      },
      {
        id: "4",
        dishName: "pancake",
        dishImage:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        isBestSeller: true,
        rating: 5,
        reviews: 2200,
        price: 180,
        about:
          "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.",
      },
      {
        id: "5",
        dishName: "sandwitch",
        dishImage:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        isBestSeller: false,
        rating: 2,
        reviews: 3000,
        price: 200,
        about:
          "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
      },
    ],
  },
];

export { categories, dishes, coupons, restaurantMenu };
