import { CiEdit } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { useSelector } from "react-redux";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { GiCrossMark } from "react-icons/gi";
import { createRef, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
const User = () => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [enableEdit, setEnableEdit] = useState(false);
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();
  const onChange = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handelClose = () => {
    setEnableEdit(false);
    setCropData("");
    setImage("");
  };
  console.log(cropData);

  return (
    <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden my-4 m-auto h-fit">
      <div></div>
      {enableEdit && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] border p-5 rounded-xl flex justify-center items-center">
          <div className="bg-white p-5 rounded-xl w-1/4">
            <div className="flex justify-between">
              <button className="py-1 px-2 bg-green-600 rounded-xl text-white">
                Save
              </button>
              <button
                onClick={handelClose}
                className="py-1 px-2 bg-red-600 rounded-xl text-white"
              >
                <GiCrossMark />
              </button>
            </div>
            <div>
              <input type="file" onChange={onChange} />
              {image && (
                <Cropper
                  ref={cropperRef}
                  style={{ height: 400, width: "100%" }}
                  zoomTo={0.5}
                  initialAspectRatio={1}
                  preview=".img-preview"
                  src={image}
                  viewMode={1}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  background={false}
                  responsive={true}
                  autoCropArea={1}
                  checkOrientation={false}
                  guides={true}
                />
              )}
              <button
                onClick={getCropData}
                className="py-2 px-4 bg-brand text-white rounded-xl my-2"
              >
                Crop Image
              </button>
              <img src={cropData} alt="" className="w-28" />
            </div>
          </div>
        </div>
      )}
      <img
        className="w-full h-56 object-cover object-center"
        src={user?.photoURL}
        alt="avatar"
      />
      <div className="flex items-center justify-between px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-white font-semibold text-lg">
          {user.displayName}
        </h1>
        <div
          onClick={() => setEnableEdit(true)}
          className="group relative w-fit"
        >
          <IoMdMore className="text-white text-2xl cursor-pointer" />
          <p className="text-white hidden absolute bottom-full right-0 group-hover:block whitespace-nowrap">
            Edit Profile
          </p>
        </div>
      </div>
      <div className="py-4 px-6">
        <div className="flex items-center mt-4 text-gray-700">
          <CiEdit />
          <h1 className="px-2 text-sm">Bio</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <MdEmail />
          <h1 className="px-2 text-sm">{user?.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
