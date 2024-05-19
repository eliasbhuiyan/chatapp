import { IoMdMore } from "react-icons/io";
const Title = ({ title }) => {
  return (
    <div className="flex justify-between pb-4">
      <h2 className="title">{title}</h2>
      <button>
        <IoMdMore className="text-2xl" />
      </button>
    </div>
  );
};

export default Title;
