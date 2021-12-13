const url = 'https://...';// TODO: Add your url code here

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

// TODO: Change 'fetchData' to 'fetchMissions'
export const fetchData = async () => getData(url);

// TODO: Change 'fetchData2' to 'fetchRockets'
export const fetchData2 = () => getData(url);

// TODO: Change 'fetchData3' to 'fetchDragons'
export const fetchData3 = () => getData(url);
