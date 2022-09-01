import {memo} from "react";

const Input = ({type, label, placeholder, value, onChange}) => {
  return (
    <div className="mt-1 grid gap-2">
      <label className="text-center">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md placeholder:italic placeholder:text-slate-400 "
      />
    </div>
  );
};

export default memo(Input);
