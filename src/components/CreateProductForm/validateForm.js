// Función para validar que un campo no esté vacío
export const validateNotEmpty = (value) => {
  return value.trim() !== "";
};

// Función para validar la longitud mínima de un campo
export const validateMinLength = (value, minLength) => {
  return value.length >= minLength;
};

// Función para validar la longitud máxima de un campo
export const validateMaxLength = (value, maxLength) => {
  return value.length <= maxLength;
};

// Función para validar una URL
export const validateUrl = (value) => {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(value);
};

// Función para validar que el precio sea mayor o igual a 1
export const validateMinPrice = (value) => {
  return Number(value) >= 1;
};
