import React from "react";


const DashboardC = () => {
  return (
    
    <div>
      <div className="p-8 bg-[#F8F9FF] min-h-screen">
        {/* Top Stats */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-white shadow-sm rounded-lg px-6 py-3 font-semibold border border-gray-200">
            Active Projects: <span className="text-[#7030DE]">3</span>
          </div>
          <div className="bg-white shadow-sm rounded-lg px-6 py-3 font-semibold border border-gray-200">
            Pending Proposals: <span className="text-[#7030DE]">5</span>
          </div>
          <div className="bg-white shadow-sm rounded-lg px-6 py-3 font-semibold border border-gray-200">
            Total Spent: <span className="text-[#7030DE]">$2,400</span>
          </div>
          <div className="bg-white shadow-sm rounded-lg px-6 py-3 font-semibold border border-gray-200">
            Completed Projects: <span className="text-[#7030DE]">12</span>
          </div>
        </div>

        {/* My Projects Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">My Projects</h2>

            {/* 👇 View More button */}
            <button
              className="text-[#7030DE] font-semibold hover:underline transition"
              onClick={() => {
                // You can replace this with navigation later
                // e.g., navigate("/all-projects");
                alert("Redirecting to all projects page...");
              }}
            >
              View More →
            </button>
          </div>

          {/* Project 1 */}
          <div className="flex items-center justify-between bg-[#F5F5FF] p-4 rounded-lg mb-4">
            <div>
              <h3 className="font-semibold text-gray-800">Website Redesign</h3>
              <p className="text-gray-500 text-sm">Status: Active</p>
            </div>
            <button className="bg-[#7030DE] text-white px-4 py-2 rounded-md hover:bg-[#5a27b4] transition">
              View Details
            </button>
          </div>

          {/* Project 2 */}
          <div className="flex items-center justify-between bg-[#F5F5FF] p-4 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-800">Mobile App UI</h3>
              <p className="text-gray-500 text-sm">Status: Completed</p>
            </div>
            <button className="bg-[#7030DE] text-white px-4 py-2 rounded-md hover:bg-[#5a27b4] transition">
              View Details
            </button>
          </div>
        </section>


        {/* Bottom Section (Chats + Payments) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Chats */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-6 text-[#7030DE]">Recent Chats</h2>

            {/* Chat List */}
            <div className="space-y-4">
              {[
                {
                  name: "Alice Johnson",
                  message: "Yes sure! Final design looks great.",
                  time: "2m ago",
                },
                {
                  name: "Michael Lee",
                  message: "Can we schedule a quick meeting?",
                  time: "10m ago",
                },
                {
                  name: "Samantha Chen",
                  message: "Uploaded the latest project files!",
                  time: "1h ago",
                },
                
              ].map((chat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                      {chat.name[0]}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{chat.name}</h3>
                      <p className="text-gray-500 text-sm">{chat.message}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex mt-6">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow border border-gray-300 rounded-l-md p-2 text-sm outline-none focus:ring-2 focus:ring-[#7030DE]/40 transition"
              />
              <button className="bg-[#7030DE] text-white px-4 rounded-r-md hover:bg-[#5a27b4] transition">
                Send
              </button>
            </div>

            {/* View More Messages */}
            <div className="text-right mt-3">
              <button
                className="text-[#7030DE] text-sm font-medium hover:underline"
                onClick={() => console.log('Redirect to chat page')}
              >
                View More Messages →
              </button>
            </div>
          </div>


          {/* Payments */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-6 text-[#7030DE]">
              Payments Overview
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="p-4 rounded-md bg-gray-50 text-center border border-gray-200 hover:shadow-md transition">
                <p className="text-gray-500">In Escrow</p>
                <p className="font-bold text-[#7030DE]">$500</p>
              </div>
              <div className="p-4 rounded-md bg-gray-50 text-center border border-gray-200 hover:shadow-md transition">
                <p className="text-gray-500">Released</p>
                <p className="font-bold text-[#7030DE]">$1,900</p>
              </div>
              <div className="p-4 rounded-md bg-gray-50 text-center border border-gray-200 hover:shadow-md transition">
                <p className="text-gray-500">Pending</p>
                <p className="font-bold text-[#7030DE]">$200</p>
              </div>
              <div className="p-4 rounded-md bg-gray-50 text-center border border-gray-200 hover:shadow-md transition">
                <p className="text-gray-500">Total Spent</p>
                <p className="font-bold text-[#7030DE]">$2,600</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2 font-medium">Funds Released</p>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7030DE] to-[#9B7BFF] transition-all"
                  style={{ width: "80%" }} // adjust this based on your data
                ></div>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#7030DE] text-white py-2 rounded-md font-semibold shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
              Release Funds
            </button>

            {/* View More Button */}
            <div className="text-right mt-3">
              <button
                className="text-[#7030DE] text-sm font-medium hover:underline"
                onClick={() => console.log('Redirect to payments page')}
              >
                View All Transactions →
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default DashboardC;
