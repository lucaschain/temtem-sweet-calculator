const enhancerAttributes = {
  hp: "Pineapple",
  sta: "Watermelon",
  spd: "Cherry",
  atk: "Peach",
  def: "Coconut",
  spatk: "Mango",
  spdef: "Papaya",
};

const weakenerAttributes = {
  hp: "Lemon",
  sta: "Grapefruit",
  spd: "Kumquat",
  atk: "Orange",
  def: "Lime",
  spatk: "Pomelo",
  spdef: "Tangerine",
};

const SWEET_VALUES = [
  {
    value: 1,
    type: "Candy",
  },
  {
    value: 20,
    type: "Fruit",
  },
  {
    value: 50,
    type: "Smoothie",
  },
  {
    value: 100,
    type: "Essence",
  },
];

export function buildSweetCategories(attribute) {
  const sweets = [];
  for (const sweet of SWEET_VALUES) {
    sweets.push({
      ...sweet,
      name: `Enhancer ${enhancerAttributes[attribute]} ${sweet.type}`,
    });
    sweets.push({
      ...sweet,
      value: -sweet.value,
      name: `Weakener ${weakenerAttributes[attribute]} ${sweet.type}`,
    });
  }
  return sweets;
}
