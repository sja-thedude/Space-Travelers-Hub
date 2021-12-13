const url = 'https://...';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchData = async () => getData(url);

export const fetchData2 = () => getData(url);
