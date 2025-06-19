import React, { useState } from "react";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Dummy user data (can come from context or API)
  const [user, setUser] = useState({
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Aarav Mehta",
    title: "Full Stack Developer",
    description:
      "I'm a passionate developer with 3+ years of experience in building full-stack apps.",
    skillsOffered: ["React", "Node.js", "MongoDB"],
    skillsWanted: ["DevOps", "UI/UX"],
    email: "aarav@example.com",
    location: "Mumbai, India",
  });

  // Editable form state
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveChanges = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen  flex justify-center p-6">
      <div className="bg-white p-6 rounded-lg  w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">My Profile</h1>
          {!isEditing && (
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>

        <div className="mt-6 text-center">
          <img
            src={user.image}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-2 object-cover"
          />
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            {isEditing ? (
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-1 rounded"
              />
            ) : (
              <p>{user.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Title</label>
            {isEditing ? (
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border px-3 py-1 rounded"
              />
            ) : (
              <p>{user.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            {isEditing ? (
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border px-3 py-1 rounded"
              />
            ) : (
              <p>{user.description}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Location</label>
            {isEditing ? (
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border px-3 py-1 rounded"
              />
            ) : (
              <p>{user.location}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            {isEditing ? (
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-1 rounded"
              />
            ) : (
              <p>{user.email}</p>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="mt-6 flex justify-end space-x-2">
            <button
              className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
              onClick={() => {
                setIsEditing(false);
                setFormData(user); // Reset
              }}
            >
              Cancel
            </button>
            <button
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              onClick={saveChanges}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
