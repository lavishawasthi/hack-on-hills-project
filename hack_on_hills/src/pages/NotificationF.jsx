import React from "react";
import { Bell, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import Sidebar from "@/components/ui/SideBar";

const notifications = [
  {
    icon: <CheckCircle className="text-green-500" />,
    title: "Payment Received",
    description: "You have received ₹2500 for the completed project.",
    time: "2 hours ago",
  },
  {
    icon: <MessageSquare className="text-blue-500" />,
    title: "New Message",
    description: "A client has sent you a new message.",
    time: "4 hours ago",
  },
  {
    icon: <AlertCircle className="text-yellow-500" />,
    title: "Project Deadline",
    description: "Your project ‘UI Design Revamp’ is due tomorrow.",
    time: "1 day ago",
  },
];

export default function Notifications() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (non-overlapping, fixed width) */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-0">
        <h1 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Bell className="text-blue-600" /> Notifications
        </h1>

        <div className="space-y-4">
          {notifications.map((n, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="mt-1">{n.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{n.title}</h3>
                <p className="text-gray-600">{n.description}</p>
                <p className="text-sm text-gray-400 mt-1">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
