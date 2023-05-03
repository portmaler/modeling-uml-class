import api from 'common/api';

const createPackage = async (postData) => {
  try {
    const response = await api.post('/addPackage', postData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPackages = async () => {
  try {
    const response = await api.get('/getages');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPackageByModule = async (id) => {
    try {
      const response = await api.get(`getallpackages/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

export default {
  createPackage,
  getPackages,
  getPackageByModule
};