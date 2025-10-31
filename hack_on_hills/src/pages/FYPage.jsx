import React from "react";
import { Briefcase, Globe, PenTool } from "lucide-react";

const posts = [
  {
    id: 1,
    name: "Arjun Patel",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=arjun",
    title: "Looking for a UI Designer to collaborate on a startup dashboard project 🚀",
    image: "https://images.unsplash.com/photo-1603791452906-bc3c9b4d5b86?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sara Ali",
    role: "Graphic Designer",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=sara",
    title: "Just finished a rebranding project for a fintech company 💼✨",
    image: "https://images.unsplash.com/photo-1612832021129-98229f3b4fdb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    role: "Content Writer",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=rohit",
    title: "Open for freelance writing gigs related to tech, startups, and AI 🧠✍️",
    image: "",
  },
];

export default function FYPPage() {
  return (
    <div className="bg-[#f3f7fc] min-h-screen flex justify-center py-8 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        
        {/* LEFT SIDEBAR */}
        <aside className="hidden md:flex flex-col bg-white rounded-xl shadow p-4 w-1/4 h-fit">
          <div className="text-center mb-4">
            <img
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=monil"
              alt="User"
              className="w-20 h-20 mx-auto rounded-full"
            />
            <h2 className="text-lg font-semibold mt-2 text-gray-800">Monil Chourasiya</h2>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
          </div>

          <hr className="my-3" />

          <div>
            <h3 className="font-medium text-gray-700 mb-2">Your Domains</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Web Development</li>
              <li className="hover:text-blue-600 cursor-pointer">UI/UX Design</li>
              <li className="hover:text-blue-600 cursor-pointer">Cybersecurity</li>
            </ul>
          </div>
        </aside>

        {/* CENTER FEED */}
        <main className="flex-1 space-y-6">
          {/* Post Input Box */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=monil"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <input
                type="text"
                placeholder="Start a post..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <div className="flex justify-around text-gray-500 text-sm">
              <button className="hover:text-blue-600 flex items-center gap-1"><Globe size={18}/> Post</button>
              <button className="hover:text-blue-600 flex items-center gap-1"><Briefcase size={18}/> Project</button>
              <button className="hover:text-blue-600 flex items-center gap-1"><PenTool size={18}/> Design</button>
            </div>
          </div>

          {/* Feed Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow p-5">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={post.avatar}
                  alt={post.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{post.name}</h4>
                  <p className="text-xs text-gray-500">{post.role}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-3 text-sm">{post.title}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  className="rounded-lg w-full object-cover max-h-60 mb-3"
                />
              )}

              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <button className="hover:text-blue-600">Like</button>
                <button className="hover:text-blue-600">Comment</button>
                <button className="hover:text-blue-600">Share</button>
              </div>
            </div>
          ))}
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:flex flex-col bg-white rounded-xl shadow p-4 w-1/4 h-fit">
          <h3 className="font-semibold text-gray-700 mb-3">Trending Domains</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Artificial Intelligence</li>
            <li className="hover:text-blue-600 cursor-pointer">UI/UX Design</li>
            <li className="hover:text-blue-600 cursor-pointer">Data Analysis</li>
            <li className="hover:text-blue-600 cursor-pointer">App Development</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
