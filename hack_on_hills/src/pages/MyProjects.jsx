import React from "react";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Website Redesign",
      description: "UI/UX improvement for company website. Due in 10 days.",
      budget: "₹15,000",
      proposals: 8,
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      title: "Mobile App Backend",
      description: "Node.js API development for a fitness app.",
      budget: "₹20,000",
      proposals: 5,
      status: "Under Review",
      statusColor: "bg-gray-300 text-gray-800",
    },
  ];

  return (
    <div className="p-8 bg-[#F8F9FF] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Projects</h1>
        <button className="bg-[#7030DE] text-white px-5 py-2 rounded-md hover:bg-[#5a27b4] transition">
          + Post new Project
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search projects.."
          className="flex-grow border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#7030DE]"
        />
        <div className="relative">
          <button className="border border-gray-300 rounded-md px-4 py-2 bg-white flex items-center justify-between gap-2">
            All <span className="text-gray-500">⌄</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-white shadow-sm rounded-lg px-6 py-3 font-semibold border border-gray-200">
          5 <span className="text-gray-500">Active Projects</span>
        </div>
        <div className="bg-white shadow-sm rounded-lg px-6 py-3 font-semibold border border-gray-200">
          3 <span className="text-gray-500">Completed</span>
        </div>
        <div className="bg-white shadow-sm rounded-lg px-6 py-3 font-semibold border border-gray-200">
          ₹45,000 <span className="text-gray-500">Total Spent</span>
        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative"
          >
            {/* Status Badge */}
            <span
              className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full ${project.statusColor}`}
            >
              {project.status}
            </span>

            <h2 className="text-lg font-bold text-gray-800 mb-1">
              {project.title}
            </h2>
            <p className="text-gray-600 text-sm mb-2">{project.description}</p>
            <p className="text-gray-500 text-sm">
              Budget: <span className="font-medium">{project.budget}</span>
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Proposals: <span className="font-medium">{project.proposals}</span>
            </p>

            <div className="flex gap-3">
              <button className="bg-[#7030DE] text-white px-5 py-2 rounded-md text-sm hover:bg-[#5a27b4] transition">
                View
              </button>
              <button className="border border-[#7030DE] text-[#7030DE] px-5 py-2 rounded-md text-sm hover:bg-[#f1e9ff] transition">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8 text-sm text-gray-600 cursor-pointer hover:text-[#7030DE] transition">
        Load More...
      </div>
    </div>
  );
};

export default MyProjects;
