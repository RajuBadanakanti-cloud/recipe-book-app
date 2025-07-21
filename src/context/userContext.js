import React, { useState,useEffect } from "react"
export const UserContext = React.createContext()
// JSON USER DATA
const userData =
[
  {
    "id": "1",
    "name": "Spaghetti Carbonara",
    "ingredients": [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g parmesan cheese",
      "2 cloves garlic",
      "Salt & black pepper"
    ],
    "steps": [
      "Boil spaghetti in salted water until al dente.",
      "Fry pancetta with crushed garlic until crispy.",
      "Beat eggs and mix with grated parmesan.",
      "Drain pasta and mix immediately with pancetta and egg-cheese mixture.",
      "Stir quickly to create a creamy sauce. Season with salt and pepper."
    ],
    "imageUrl": "https://images.pexels.com/photos/4518833/pexels-photo-4518833.jpeg"
  },
  {
    "id": "2",
    "name": "Butter Chicken",
    "ingredients": [
      "500g chicken breast",
      "1 cup tomato puree",
      "1/2 cup cream",
      "2 tbsp butter",
      "1 onion",
      "2 tsp garam masala",
      "1 tsp ginger garlic paste",
      "Salt"
    ],
    "steps": [
      "Marinate chicken in spices and yogurt for 1 hour.",
      "Fry onion, add tomato puree and cook until oil separates.",
      "Add marinated chicken and cook until done.",
      "Add cream and butter. Simmer until thick and creamy.",
      "Garnish with coriander leaves and serve with naan or rice."
    ],
    "imageUrl": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
  },
  {
    "id": "3",
    "name": "Margherita Pizza",
    "ingredients": [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt"
    ],
    "steps": [
      "Preheat oven to 220°C (425°F).",
      "Spread tomato sauce on rolled-out dough.",
      "Add mozzarella slices and fresh basil leaves.",
      "Drizzle with olive oil and sprinkle salt.",
      "Bake for 10–12 minutes until crust is golden."
    ],
    "imageUrl": "https://images.pexels.com/photos/5280912/pexels-photo-5280912.jpeg"
  },
  {
    "id": "4",
    "name": "Chicken Biryani",
    "ingredients": [
      "2 cups basmati rice",
      "500g chicken",
      "1 onion",
      "1/2 cup yogurt",
      "Biryani masala",
      "Saffron",
      "Mint & coriander leaves"
    ],
    "steps": [
      "Marinate chicken in yogurt and spices for 1 hour.",
      "Parboil rice and keep aside.",
      "Fry onions until golden, add chicken and cook.",
      "Layer chicken and rice, sprinkle saffron, mint, and coriander.",
      "Cover and cook on low flame for 20 minutes."
    ],
    "imageUrl": "https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg"
  },
  {
    "id": "5",
    "name": "Avocado Toast",
    "ingredients": [
      "2 slices bread",
      "1 ripe avocado",
      "Salt & pepper",
      "Lemon juice",
      "Chili flakes"
    ],
    "steps": [
      "Toast the bread slices.",
      "Mash avocado with salt, pepper, and lemon juice.",
      "Spread avocado on toast.",
      "Top with chili flakes or optional poached egg."
    ],
    "imageUrl": "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1440"
  },
  {
    "id": "6",
    "name": "Paneer Tikka",
    "ingredients": [
      "250g paneer",
      "1/2 cup yogurt",
      "2 tsp tikka masala",
      "1 onion",
      "1 capsicum",
      "Salt",
      "Oil"
    ],
    "steps": [
      "Marinate paneer and veggies in yogurt and tikka masala.",
      "Skewer paneer with onion and capsicum.",
      "Grill or bake at 200°C for 15 minutes, flipping halfway.",
      "Serve with mint chutney."
    ],
    "imageUrl": "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png"
  },
  {
    "id": "7",
    "name": "Veg Hakka Noodles",
    "ingredients": [
      "2 packs noodles",
      "1 carrot",
      "1 capsicum",
      "1 onion",
      "2 tbsp soy sauce",
      "1 tbsp chili sauce",
      "Salt & pepper"
    ],
    "steps": [
      "Boil and strain noodles.",
      "Stir-fry vegetables in oil for 2 minutes.",
      "Add sauces and mix well.",
      "Add noodles and stir-fry on high heat.",
      "Serve hot with spring onions on top."
    ],
    "imageUrl": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
  },
  {
    "id": "8",
    "name": "French Omelette",
    "ingredients": [
      "3 eggs",
      "Salt & pepper",
      "1 tbsp butter",
      "Fresh herbs (parsley/chives)"
    ],
    "steps": [
      "Beat eggs until smooth.",
      "Heat butter in non-stick pan.",
      "Pour eggs and stir gently until partially set.",
      "Fold and slide onto plate. Garnish with herbs."
    ],
    "imageUrl": "https://images.pexels.com/photos/31667179/pexels-photo-31667179.jpeg"
  },
  {
    "id": "9",
    "name": "Pancakes with Berries",
    "ingredients": [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "1 tbsp sugar",
      "Baking powder",
      "Fresh berries",
      "Maple syrup"
    ],
    "steps": [
      "Whisk all ingredients into a batter.",
      "Cook pancakes on greased pan until golden.",
      "Stack pancakes, top with berries and syrup."
    ],
    "imageUrl": "https://images.pexels.com/photos/2732663/pexels-photo-2732663.jpeg"
  },
  {
    "id": "10",
    "name": "Caesar Salad",
    "ingredients": [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing",
      "Salt & pepper"
    ],
    "steps": [
      "Chop lettuce and add croutons.",
      "Drizzle Caesar dressing and toss well.",
      "Top with grated parmesan and pepper."
    ],
    "imageUrl": "https://images.pexels.com/photos/15813486/pexels-photo-15813486.jpeg"
  }
  /* ,,,,,,,,,,,,,*/
]

export const UserContextProvider = ({children}) => {
const [recipesList, setRecipesList] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : userData;
  });

  // ✅ Save recipes to localStorage when they change
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipesList));
  }, [recipesList]);


  // ✅ Run once: initialize localStorage if empty
  useEffect(() => {
    const stored = localStorage.getItem("recipes");
    if (!stored || JSON.parse(stored).length === 0) {
      localStorage.setItem("recipes", JSON.stringify(userData));
      setRecipesList(userData);
    }
  }, []);


  const handleDeleteRecipe = (id) => {
    const updatedRecipesList = recipesList.filter(each => each.id !== id)
    setRecipesList(updatedRecipesList)
    localStorage.setItem("recipes",JSON.stringify(updatedRecipesList))
  }
    return (<UserContext.Provider value={{recipesList,handleDeleteRecipe,setRecipesList}}>
        {children}
    </UserContext.Provider>)
}