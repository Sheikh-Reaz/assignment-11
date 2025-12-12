import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageDropBox = ({ productImages, setProductImages }) => {
  const [errors, setErrors] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
  });

  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

  const handleDrop = (files, boxName) => {
    const file = files[0];
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        [boxName]: "Only JPG, JPEG or PNG files allowed!",
      }));
      return;
    }

    setProductImages((prev) => ({ ...prev, [boxName]: file }));
    setErrors((prev) => ({ ...prev, [boxName]: "" }));
  };

  const handleCancel = (e, boxName) => {
    e.stopPropagation(); // prevent file dialog
    setProductImages((prev) => ({ ...prev, [boxName]: null }));
  };

  const useDropBox = (boxName) =>
    useDropzone({
      onDrop: (files) => handleDrop(files, boxName),
      multiple: false,
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "image/jpg": [],
      },
    });

  const getImageSrc = (image) => {
    if (!image) return null;
    return typeof image === "string" ? image : URL.createObjectURL(image);
  };

  return (
    <div className="w-full p-10">
      <h1 className="text-center font-bold text-2xl mb-4">
        Upload Your Product Images
      </h1>

      {/* Main Large Box */}
      <DropBox
        dz={useDropBox("box1")}
        img={getImageSrc(productImages.box1)}
        error={errors.box1}
        onCancel={(e) => handleCancel(e, "box1")}
        height="250px"
        label="Drag & drop images, or click to select"
      />

      {/* Small Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
        {["box2", "box3", "box4"].map((box) => (
          <DropBox
            key={box}
            dz={useDropBox(box)}
            img={getImageSrc(productImages[box])}
            error={errors[box]}
            onCancel={(e) => handleCancel(e, box)}
            height="150px"
            label="Upload"
          />
        ))}
      </div>
    </div>
  );
};

/* ⭐ Reusable DropBox Component */
const DropBox = ({ dz, img, error, onCancel, height, label }) => (
  <div>
    <div
      {...dz.getRootProps()}
      className="border-2 border-amber-400 rounded-lg w-full relative flex items-center justify-center text-center p-4 cursor-pointer hover:bg-amber-50 transition"
      style={{ height }}
    >
      <input {...dz.getInputProps()} />
      {img ? (
        <>
          <img src={img} className="h-full w-full object-contain" />
          <button
            onClick={onCancel}
            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </>
      ) : dz.isDragActive ? (
        <p>Drop image here…</p>
      ) : (
        <p>{label}</p>
      )}
    </div>

    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default ImageDropBox;
