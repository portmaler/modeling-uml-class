import {useState} from "react";
function useUsersManagement() {
    const [users, setUsers] = useState([]);
   
    function addUser(user) {
      setUsers([
        ...users,
        user
      ])
    }
   
    function deleteUser(userId) {
      const userIndex = users.findIndex(user => user.id === userId);
      if (userIndex > -1) {
        const newUsers = [...users];
        newUsers.splice(userIndex, 1);
        setUsers(
          newUsers
        );
      }
    }
   
    return {
      users,
      addUser,
      deleteUser
    }
  }


  //useAxios hook (first draft)

import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get('/posts')
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // custom hook returns value
    return { response, error, loading };
};

export default useAxios;