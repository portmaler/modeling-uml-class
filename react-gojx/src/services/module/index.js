import api from 'common/api';

const createModule = async (postData) => {
  try {
    const response = await api.post('/addmodule', postData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createLinkonModule = async (postData) => {
  try {
    const response = await api.post('/addlink', postData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getModules = async () => {
  try {
    const response = await api.get('/getallmodules');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
  createModule,
  getModules,
  createLinkonModule
};