import { useState } from 'react';
import moduleService from 'services/module';

const useModuleService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createModule = async (postData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await moduleService.createModule(postData);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createlinkOnModule = async (postData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await moduleService.createLinkonModule(postData);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getModules = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await moduleService.getModules();
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { createModule, getModules,createlinkOnModule, loading, error };
};

export default useModuleService;