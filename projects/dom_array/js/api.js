export const fetchRandomUser = async () => {
  try {
    const api = 'https://randomuser.me/api/';
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data.results[0].name;
  } catch (e) {
    console.error('Failed to fetch person ', e);
    return null;
  }
};
