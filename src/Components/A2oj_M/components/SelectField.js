// import Select from "./Select";

// const SelectField = ({ label, data, selected, setSelected }) => {
//   return (
//     <div>
//       <label className="block text-sm font-medium dark:text-gray-300">
//         {label}
//       </label>
//       <Select data={data} selected={selected} setSelected={setSelected} />
//     </div>
//   );
// };

// export default SelectField;


import Select from "./Select";

const SelectField = ({ label, data, selected, setSelected }) => {
  return (
    <div>
      <label className="block text-sm font-medium  text-gray-300">
        {label}
      </label>
      <Select data={data} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default SelectField;