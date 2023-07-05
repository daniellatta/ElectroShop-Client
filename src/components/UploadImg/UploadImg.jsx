import { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";
import { RiImageAddFill } from "react-icons/ri";

const UploadImg = ({ onImageUpload, updateImgName }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [img, setImg] = useState("");

  // let obtainedURL = false;

  const onFileSelected = (event) => {
    setSelectedFile(event.target.files[0]);
    updateImgName(event.target.files[0].name);
    console.log(event);
    console.log(
      "Actualicé el nombre de la imagen a ",
      event.target.files[0].name
    );
  };

  const onUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile, selectedFile.name);

    axios
      .post("https://electroshop-api.onrender.com/api/v1/uploads", formData)
      .then((res) => {
        setImg(res.data.url);
        onImageUpload(res.data.url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex justify-evenly items-center gap-2">
      <div>
        <label
          className="flex justify-center items-center text-xs font-bold w-[160px] bg-gray-100 hover:bg-gray-200 border-2 hover:border-blue-800/30 px-2 py-1 rounded-lg gap-2 cursor-pointer"
          htmlFor="uploadFile"
        >
          <FaImage className="w-6 h-6" />
          Search image
        </label>
        <input
          id="uploadFile"
          className="hidden"
          type="file"
          onChange={onFileSelected}
        />
        <button
          className="flex justify-center items-center text-xs font-bold w-[160px] bg-gray-100 hover:bg-gray-200 disabled:text-gray-300 disabled:hover:border-gray-200 disabled:hover:bg-gray-100 border-2 hover:border-blue-800/30 px-2 py-1 rounded-lg gap-2"
          onClick={onUpload}
          disabled={!selectedFile}
        >
          <FaCloudUploadAlt className="w-6 h-6" />
          Upload & Get URL
        </button>
      </div>
      <label
        className="flex justify-center items-center w-[100px] h-[100px] border border-black cursor-pointer"
        htmlFor="uploadFile"
      >
        {!img ? (
          <RiImageAddFill className="w-[50px] h-[50px] text-gray-400" />
        ) : (
          <img className="h-[100px]" src={img} alt="Uploaded Image" />
        )}
        {/* {img && <img className="h-[100px]" src={img} alt="Uploaded Image" />} */}
        {/* {img && !obtainedURL && sendObtainedURL()} */}
      </label>
    </div>
  );
};

export default UploadImg;
