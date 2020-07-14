async function getItemForId(id) {
  return new Promise((resolve) => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
}

export default getItemForId;
