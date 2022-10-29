import fetch from 'node-fetch';

async function getData () {
  //Fetch from API
  const fetchAPI = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
  const data = await fetchAPI.json();

  //Table ID
  const tableID = data.source[0].annotations.table_id;

  //Population List
  const populationList = [];
  data.data.forEach(object => {
    populationList.push(object.Population);
  });

  //Array Key
  const arrayKey = [tableID, ...populationList];

  //ID nation as Value
  const value = data.data[0]["ID Nation"];

  //create dictionary, instantiate new Map.
  const dictionary = new Map();
  dictionary.set(arrayKey, value)

  console.log(dictionary);
}

getData();