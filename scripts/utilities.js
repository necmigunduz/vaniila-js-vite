// İstenilen elementi yakalama ve bir değişkene bağlama
export const getElement = (el) => document.querySelector(el);

// ID'si app olan elementi yakalama
export const appContainer = getElement("#app");

// console.log(appContainer)
// console.log("Dom", document)
