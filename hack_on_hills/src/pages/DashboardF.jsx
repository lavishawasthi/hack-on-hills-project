import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Bell } from "lucide-react";
import Sidebar from "@/components/ui/SideBar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f8faff]">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-md border-r border-gray-200 z-10">
        <Sidebar />
      </div>

      {/* Main Dashboard */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-6 text-gray-700">
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Messages
            </span>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-2">
              <Bell className="w-5 h-5" /> Notification
            </span>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Active Projects", value: "3" },
            { title: "Pending Proposals", value: "5" },
            { title: "Total Spent", value: "$2,400" },
            { title: "Completed Projects", value: "12" },
          ].map((stat) => (
            <Card
              key={stat.title}
              className="border border-gray-200 shadow-sm rounded-2xl bg-white"
            >
              <CardContent className="text-center py-4">
                <h3 className="text-sm text-gray-500">{stat.title}</h3>
                <p className="text-xl font-semibold text-blue-700">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* My Projects */}
          <Card className="lg:col-span-2 border border-gray-200 rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">My Projects</h2>
              {[
                { title: "Website Redesign", status: "Active" },
                { title: "Mobile App UI", status: "Completed" },
              ].map((project) => (
                <div
                  key={project.title}
                  className="flex justify-between items-center p-4 mb-3 bg-[#eef2ff] rounded-xl"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">{project.title}</h3>
                    <p className="text-sm text-gray-500">Status: {project.status}</p>
                  </div>
                  <Button className="bg-[#6573f5] hover:bg-[#4e5af0] text-white rounded-xl">
                    View Details
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Recent Chats */}
            <Card className="border border-gray-200 rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h2 className="text-lg font-semibold text-blue-700 mb-3">
                  Recent Chats
                </h2>
                <div className="space-y-3">
                  {[
                    { name: "Alice Johnson", msg: "I’ve sent the final design!", time: "2m ago" },
                    { name: "Michael Lee", msg: "Can we schedule a quick meeting?", time: "10m ago" },
                  ].map((chat) => (
                    <div key={chat.name} className="flex justify-between items-center bg-gray-100 p-3 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                        <div>
                          <h3 className="font-medium text-gray-800 text-sm">{chat.name}</h3>
                          <p className="text-xs text-gray-500">"{chat.msg}"</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">{chat.time}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="text"
                    placeholder="Type a quick reply..."
                    className="w-full border border-gray-300 rounded-xl px-3 py-1 text-sm focus:outline-none"
                  />
                  <Button className="bg-[#6573f5] hover:bg-[#4e5af0] text-white px-4 py-1 rounded-xl text-sm">
                    Send
                  </Button>
                </div>
                <p className="text-right text-sm text-blue-600 mt-2 cursor-pointer hover:underline">
                  View All Messages →
                </p>
              </CardContent>
            </Card>

            {/* Payments */}
            <Card className="border border-gray-200 rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Payments</h2>
                <p className="text-gray-700 text-md mb-3">Escrow: <strong>$500</strong></p>
                <Button className="bg-[#6573f5] hover:bg-[#4e5af0] text-white rounded-xl w-full">
                  Release Funds
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
