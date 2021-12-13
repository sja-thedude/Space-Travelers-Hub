const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';
const missionsUrl = 'https://...';// TODO: Add your url code here
const dragonsUrl = 'https://api.spacexdata.com/v3/dragons';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchRockets = () => getData(rocketsUrl);

export const fetchMissions = () => getData(missionsUrl);

export const fetchDragons = () => getData(dragonsUrl);
