import React from "react";
import { MapPin, Briefcase, Mail, Globe } from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "Monil Chourasiya",
    role: "Full Stack Developer",
    location: "NIT Hamirpur, India",
    bio: "Passionate developer skilled in MERN stack, UI/UX design, and building AI-powered applications. Currently working on multiple freelance projects and open to new collaborations.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=monil",
    cover: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "UI/UX Design"],
    projects: [
      {
        title: "Student Life Organizer",
        description: "A productivity app for college students with attendance tracker, task manager, and AI learning assistant.",
      },
      {
        title: "InfraGuard AI",
        description: "AI-powered dashboard for monitoring infrastructure safety and detecting construction fraud.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f3f7fc] flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
        {/* COVER IMAGE */}
        <div className="relative">
          <img
            src={user.cover}
            alt="cover"
            className="w-full h-48 object-cover"
          />
          <img
            src={user.avatar}
            alt={user.name}
            className="w-28 h-28 rounded-full border-4 border-white absolute left-8 bottom-[-2rem] bg-white"
          />
        </div>

        {/* PROFILE INFO */}
        <div className="pt-14 px-8 pb-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.role}</p>
          <div className="flex items-center text-gray-500 text-sm gap-2 mt-1">
            <MapPin size={16} />
            <span>{user.location}</span>
          </div>

          <p className="text-gray-700 text-sm mt-4 leading-relaxed">{user.bio}</p>

          <div className="flex gap-3 mt-5">
            <button className="bg-[#3b78e7] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#336ad1] transition">
              Hire Me
            </button>
            <button className="border border-[#3b78e7] text-[#3b78e7] px-5 py-2 rounded-lg font-medium hover:bg-[#e6efff] transition">
              Message
            </button>
          </div>
        </div>

        {/* SKILLS */}
        <div className="px-8 py-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECTS / EXPERIENCE */}
        <div className="px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Projects & Experience
          </h2>
          <div className="space-y-4">
            {user.projects.map((proj, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
                <h3 className="font-semibold text-gray-800">{proj.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="px-8 py-6 bg-gray-50 rounded-b-xl flex flex-wrap gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-blue-600" />
            <a href="mailto:chaurasiamonil@gmail.com" className="hover:underline">
              chaurasiamonil@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-blue-600" />
            <a href="#" className="hover:underline">
              monil.dev
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-blue-600" />
            <span>Open to Freelance Work</span>
          </div>
        </div>
      </div>
    </div>
  );
}
