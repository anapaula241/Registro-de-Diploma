import React from 'react';

export const UserContext = React.createContext();

export const UserStorage =({children}) =>{
  const [data, setData] = React.useState('');
  const [login, setLogin] = React.useState('');
  const [loading, setLoading] = React.useState('');
  const [error, setError] = React.useState('');
return <UserContext.Provider value ={data}>{children}</UserContext.Provider>;
};