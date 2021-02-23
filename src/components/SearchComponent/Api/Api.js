export const categories = [
  {
    id: 1,
    name: "Accouning and Auditing Accounting System design.",
  },
  { id: 2, name: "Advertising and promotion" },
  {
    id: 3,
    name: "Advertising and promotion printed Advertising Material advertising",
  },
  { id: 4, name: "Agriculture and Farming" },
  { id: 5, name: "Air Condtioning and Refrigeration" },
  { id: 6, name: "Art" },
  { id: 7, name: "Banking equipment and service" },
  { id: 8, name: "Bid modification, Amendment and Cancellation" },
  { id: 9, name: "Catering service" },
  { id: 10, name: "Cehmicals and Reagent" },
  { id: 11, name: "Cleaning and Janitorial equipment and Service" },
  { id: 12, name: "Computer and Accessary sale" },
  { id: 13, name: "Construction and Water Service." },
  { id: 14, name: "Consultancy" },
  { id: 15, name: "Comsumable Goods" },
  { id: 16, name: "Carrier Services" },
  { id: 17, name: "Distribution of Differt Products" },
  { id: 18, name: "Eduation Training" },
  { id: 19, name: "Electrical, Electro Manginetics and Electrics" },
  { id: 20, name: "Energy and power Electricity" },
  { id: 21, name: "Generators" },
];

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // fetch api does not throw 404 errors by default
      throw Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
