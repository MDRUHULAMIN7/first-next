
import Meals from "../Components/Navbar.jsx/Meals";

const page = () => {

  return (
    <div>
      <div className="m-4">
        <h1 className="text-q3xl text-cyan-500 text-3xl ">Choose your meals</h1>
        <h4 className="my-3 text-xl">chosse your by searching</h4>

        <Meals></Meals>
      </div>
    </div>
  );
};

export default page;
