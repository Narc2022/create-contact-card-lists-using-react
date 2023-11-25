import { getUsersFromPage } from "@/pages/api/card";
import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Card from "./Card";

const UserList = () => {
  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = async () => {
    try {
      const users = await getUsersFromPage(currentPage);
      setDataList(users);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  let count = 1;
  useEffect(() => {
    fetchUsers();
  }, [currentPage]); // Re-run the effect when currentPage changes

  return (
    <Wrapper>
      <div className="mt-10">
        <div className="grid grid-cols-4 gap-4">
          {dataList.map((user) => (
            <Card key={count++} name={`${user.name}`}/>
          ))}
        </div>
        <div>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {"<"}
          </button>
          <span> Page {currentPage} </span>
          <button
            onClick={handleNextPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {">"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserList;
