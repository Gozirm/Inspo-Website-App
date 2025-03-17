import React, { useState } from "react";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width >= 800 && img.height >= 800) {
          // Handle the image upload
          console.log("Image is valid and can be uploaded");
        } else {
          alert("Image must be at least 800 x 800 pixels.");
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleToggleChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <>
      <main className="">
        <div className="backdrop-contrast-90 p-4 sm:p-8 rounded-xl shadow-lg w-full">
          <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-6">
            Profile Information
          </h1>
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
            <img
              alt="Profile picture of a person holding a pencil"
              className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/aJjJkNtM29M0v1sxfYDFjzO09kpDLeluAZnoewxLwpo.jpg"
              width="100"
            />
            <div className="w-full sm:w-auto">
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleImageUpload}
                className="hidden"
                id="upload-photo"
              />
              <label
                htmlFor="upload-photo"
                className="cursor-pointer text-white py-3 px-4 rounded-lg border border-gray-600 w-full sm:w-auto"
              >
                Upload New Photo
              </label>
              <p className="text-gray-400 mt-3">
                At least 800 x 800 px recommended. JPEG or PNG is allowed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-gray-400 mb-2">First Name</label>
              <input
                className="w-full  text-white py-2 px-4 rounded-lg border border-gray-600"
                type="text"
                value="Gozirim"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Last Name</label>
              <input
                className="w-full  text-white py-2 px-4 rounded-lg border border-gray-600"
                type="text"
                value="Joshua"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                className="w-full  text-white py-2 px-4 rounded-lg border border-gray-600"
                type="email"
                value="divinefavourjoshua03@gmail.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                className="w-full  text-white py-2 px-4 rounded-lg border border-gray-600"
                type="password"
                value="00000000"
              />
            </div>
            <div className="flex items-center mt-4">
              <label
                className="block text-gray-400  mr-4"
                htmlFor="checkbox"
              >
                Notifications
              </label>
              <label className="switch ">
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={handleToggleChange}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="flex  mt-4 sm:mt-6">
            <button className="bg-white text-gray-900 py-2 px-6 rounded-lg cursor-pointer">
              Save Changes
            </button>
          </div>
          <div className="sm:hidden flex  mt-4">
            <button className="bg-red-600 text-white py-2 px-6 rounded-lg opacity-50">
              Logout
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Settings;
