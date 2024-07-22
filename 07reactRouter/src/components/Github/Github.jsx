import React from 'react';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/ShivamPandey-FSD')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="flex flex-row-reverse justify-evenly items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Name: {data.name}
      <img className="rounded-full" src={data.avatar_url} alt="Git Picture" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ShivamPandey-FSD');
  return response;
};
