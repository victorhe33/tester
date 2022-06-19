const container = document.querySelector('container');

const unsplash = fetch('https://picsum.photos/list')
  .then((response) => response.json())
  .then((images) =>{
    return images;
  });

const summonImage = async () => {
  const a = await unsplash;
  const randomNum = Math.floor(a.length * Math.random());
  const chosenOne = a[randomNum].post_url;
  
  return chosenOne;
};

summonImage();