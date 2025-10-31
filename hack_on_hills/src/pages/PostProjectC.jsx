import React, { useState } from "react";

const PostProjectC= () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    skills: "",
    description: "",
    minBudget: "",
    maxBudget: "",
    timeline: "",
    paymentType: "Fixed Price",
    visibility: {
      public: false,
      inviteOnly: false,
    },
    freelancerLevel: "",
    attachments: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "public" || name === "inviteOnly") {
      setFormData((prev) => ({
        ...prev,
        visibility: { ...prev.visibility, [name]: checked },
      }));
    } else if (type === "file") {
      setFormData({ ...formData, attachments: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Project posted successfully!");
  };

  return (
    <div className="bg-[#F8F9FF] min-h-screen px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Post a New Project</h1>
      <p className="text-gray-600 mb-8">
        Describe your project and find the right freelancer for the job.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8"
      >
        {/* Basic Project Info */}
        <div>
          <h2 className="text-lg font-semibold text-[#7030DE] mb-4">
            Basic Project Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Project Title (e.g. Web App Redesign)"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#7030DE]"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#7030DE]"
            >
              <option value="">Select Category</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Mobile App</option>
              <option>Content Writing</option>
              <option>Marketing</option>
            </select>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills Required (e.g. React, Figma, Node.js)"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#7030DE]"
            />
          </div>
        </div>

        {/* Project Description */}
        <div>
          <h2 className="text-lg font-semibold text-[#7030DE] mb-4">
            Project Description
          </h2>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project requirements, goals, and deliverables..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#7030DE]"
          />
        </div>

        {/* Budget and Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-lg font-semibold text-[#7030DE] mb-2">Budget</h2>
            <div className="flex gap-3">
              <input
                type="number"
                name="minBudget"
                value={formData.minBudget}
                onChange={handleChange}
                placeholder="Min ₹"
                className="w-1/2 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#7030DE]"
              />
              <input
                type="number"
                name="maxBudget"
                value={formData.maxBudget}
                onChange={handleChange}
                placeholder="Max ₹"
                className="w-1/2 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#7030DE]"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#7030DE] mb-2">
              Timeline
            </h2>
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="Duration (e.g. 15 days)"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#7030DE]"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#7030DE] mb-2">Attachments</h2>
            <input
              type="file"
              name="attachments"
              multiple
              onChange={handleChange}
              className="w-full text-gray-600 border border-gray-300 rounded-lg p-2 bg-gray-50"
            />
          </div>
        </div>

        {/* Payment Preference */}
        <div>
          <h2 className="text-lg font-semibold text-[#7030DE] mb-4">
            Payment Preference
          </h2>
          <div className="flex gap-6 text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentType"
                value="Fixed Price"
                checked={formData.paymentType === "Fixed Price"}
                onChange={handleChange}
              />
              Fixed Price
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentType"
                value="Hourly"
                checked={formData.paymentType === "Hourly"}
                onChange={handleChange}
              />
              Hourly
            </label>
          </div>
        </div>

        {/* Visibility & Experience */}
        <div>
          <h2 className="text-lg font-semibold text-[#7030DE] mb-4">
            Visibility & Experience
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="public"
                  checked={formData.visibility.public}
                  onChange={handleChange}
                />
                Public Project
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="inviteOnly"
                  checked={formData.visibility.inviteOnly}
                  onChange={handleChange}
                />
                Invite-Only
              </label>
            </div>

            <select
              name="freelancerLevel"
              value={formData.freelancerLevel}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#7030DE]"
            >
              <option value="">Select Freelancer Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#7030DE] text-white px-6 py-3 rounded-lg hover:bg-[#5a27b4] transition font-medium"
          >
            Post Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostProjectC;
