import { useState } from 'react';
import PackageService from 'services/package';

const usePackageService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPackage = async (postData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await PackageService.createPackage(postData);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getPackages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await PackageService.getPackages();
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getPackagesByModule = async (id) => {
    try {
      setLoading(true);
   
      const data = await PackageService.getPackageByModule(id);
      setError(null);return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { createPackage, getPackages,getPackagesByModule, loading, error };
};

export default usePackageService;