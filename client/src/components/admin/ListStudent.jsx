import React from "react";
import DetailsStudents from '../DetailsStudents'

const ListStudent = ({ status }) => {
  return (
    <>
     <DetailsStudents status={status} />
    </>
  );
};

export default ListStudent;
