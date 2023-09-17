const products = [
  {
    id: "1",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169709-550-550/HT9916_1.jpg?v=638199528119430000",
    name: "Alternate Jersey Boca 23/24",
    price: "27.999",
    alt: "Lightblue Jersey Boca",
    category: "Jerseys",
    quantity: 1,
  },
  {
    id: "2",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/168815-550-550/HE6329_1.jpg?v=637975643272330000",
    name: "Home Jersey Boca Jrs. 22/23",
    price: "21.999",
    alt: "Home Jersey Boca Jrs. 22/23",
    category: "Jerseys",
    quantity: 1,
  },
  {
    id: "3",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/168780-550-550/IB9458_1.jpg?v=637975642811000000",
    name: "Away Jersey Boca 22/23",
    price: "21.999",
    alt: "Away Jersey Boca 22/23",
    category: "Jerseys",
    quantity: 1,
  },
  {
    id: "4",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/168807-550-550/HE6327.jpg?v=637975643182000000",
    name: "Goalkeeper Shorts Boca 22/23",
    price: "12.999",
    alt: "Goalkeeper Shorts Boca 22/23",
    category: "Shorts",
    quantity: 1,
  },
  {
    id: "5",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169068-550-550/GC0433_1.jpg?v=638036881373030000",
    name: "Alternate Jersey 22/23",
    price: "32.999",
    alt: "Alternate Jersey  22/23",
    category: "Jerseys",
    quantity: 1,
  },
  {
    id: "6",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169541-550-550/HC0984_2.jpg?v=638122401881500000",
    name: "Boca Jrs. Hoodie ",
    price: "29.999",
    alt: "Hoodie Boca",
    category: "Jackets",
    quantity: 1,
  },
  {
    id: "7",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169286-550-550/HC1009_1.jpg?v=638090670845130000",
    name: "Jacket Boca Jrs.",
    price: "30.000",
    alt: "Jacket Boca",
    category: "Jackets",
    quantity: 1,
  },
  {
    id: "8",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/168666-550-550/HB0565_1.jpg?v=637944618994930000",
    name: "Winter Jacket Boca",
    price: "62.999",
    alt: "Winter Jacket Boca",
    category: "Jackets",
    quantity: 1,
  },
  {
    id: "9",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169683-550-550/HR8267_1.png?v=638193397661070000",
    name: "Basketball Home Jersey",
    price: "17.999",
    alt: "Basketball Home Jersey",
    category: "Jerseys",
    quantity: 1,
  },
  {
    id: "10",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169123-550-550/HC0986_2.jpg?v=638089800953630000",
    name: "Training Jacket",
    price: "29.999",
    alt: "Training Jacket",
    category: "Jackets",
    quantity: 1,
  },
  {
    id: "11",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/168448-550-550/HN6141_1.jpg?v=637922174354200000",
    name: "Home Socks Boca Jrs 22/23",
    price: "4.999",
    alt: "Home Socks Boca Jrs 22/23",
    category: "Socks",
    quantity: 1,
  },
  {
    id: "12",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/168777-550-550/HN6142_1.jpg?v=637975642769870000",
    name: "Away Socks Boca Jrs 22/23",
    price: "4.999",
    alt: "Away Socks Boca Jrs 22/23",
    category: "Socks",
    quantity: 1,
  },
];
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("no existe el producto");
      }
    }, 500);
  });
};

export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
        
        const productsFiltered = category ? products.filter((product) => product.category === category) : products;
        resolve(productsFiltered);
    }, 500);
  });
};
