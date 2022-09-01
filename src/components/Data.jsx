import {memo} from "react";

const Data = ({data}) => {
  return (
    <div className="flex flex-col text-center mt-4">
      <span className="text-blue-600">
        Your First Name is:
        <i className="text-black">{data.fname ? data.fname : "NA"}</i>
      </span>
      <span className="text-blue-600">
        Your Last Name is:
        <i className="text-black">{data.lname ? data.lname : "NA"}</i>
      </span>
      <span className="text-blue-600">
        Your email id is:
        <i className="text-black">{data.email ? data.email : "NA"}</i>
      </span>
      <span className="text-blue-600">
        Your Phone Number is:
        <i className="text-black">{data.phone ? data.phone : "NA"}</i>
      </span>
    </div>
  );
};

export default memo(Data);
