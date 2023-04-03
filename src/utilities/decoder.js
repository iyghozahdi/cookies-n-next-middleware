import Cryptr from "cryptr";

export const decodeCookie = (value) => {
  const cryptr = new Cryptr("YourSecretyK-3-Y", {
    pbkdf2Iterations: 10000,
    saltLength: 10,
  });
  return cryptr.decrypt(value);
};
