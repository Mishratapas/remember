import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signout} from "../services/dataSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(signout());
    navigate("/");
  };

  return (
    <div className="w-full flex p-4 items-center justify-between bg-gray-600">
      <h2 className="text-white text-2xl font-extrabold">remember</h2>
      <div>
        <button
          className="bg-red-600 py-2 px-2 rounded cursor-pointer text-white"
          onClick={handleSignout}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
