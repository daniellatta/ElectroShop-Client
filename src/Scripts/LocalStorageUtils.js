export const CopyToLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

export const GetFromLocalStorage = (data) => {
  JSON.parse(localStorage.getItem("cart"));
};
