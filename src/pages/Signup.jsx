import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import Input from "../components/Input";
import {getFname, getLname, getEmail, getPhone} from "../services/dataSlice";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFname(fname));
    dispatch(getLname(lname));
    dispatch(getEmail(email));
    dispatch(getPhone(phone));

    navigate("/home");
  };

  return (
    <>
      <div className="bg-transparent p-6 shadow-slate-50">
        <h2 className="text-2xl text-center text-red-600 font-extrabold tracking-wide">
          remember
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="border-solid border-2 border-indigo-600 p-8 md:p-[50px] rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col py-4">
            <Input
              placeholder="First Name"
              label="First Name"
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <Input
              placeholder="Last Name"
              label="Last Name"
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <Input
              placeholder="mail"
              label="mail"
              type="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="phone"
              label="mobile number"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="w-full mt-4 py-2 border-none border-2 bg-green-600 rounded-lg focus:bg-red-600"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
