import { useEffect, useState } from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "UnCompleted", label: "UnCompleted" },
  { value: "Completed", label: "Completed" },
];

const FilterComponent = ({ selectOption, setSelectOption }) => {
  return (
    <Select value={selectOption} onChange={setSelectOption} options={options} />
  );
};

export default FilterComponent;
