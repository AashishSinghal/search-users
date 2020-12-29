import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

export const GithubContext = React.createContext([]);

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ childern }) => {
  return (
    <GithubContext.Provider value={"Hello"}>
      <React.Fragment>{childern}</React.Fragment>
    </GithubContext.Provider>
  );
};

export { GithubProvider };
