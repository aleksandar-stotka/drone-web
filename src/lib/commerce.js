import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.REACT_APP_DRON_PUBLIC_KEY,
  true
); //we need put public key from there store
