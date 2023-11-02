import axios from "axios";
import React, { useEffect, useState } from "react";

const UseGetGithubData = (username) => {
  const [data, setData] = useState([]);

  async function getUserInfo() {
    try {
      const userRepos = await axios.get(`https://api.github.com/users/${username}/repos`);
      const sortedRepos = userRepos.data.sort((repo1, repo2) => (
        new Date(repo2.created_at) - new Date(repo1.created_at)
      ));
      setData(sortedRepos);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return data;
};

export default UseGetGithubData;
