import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Clock, Tag, User } from "lucide-react";
import Sidebar from "@/components/ui/SideBar";

export default function ProjectDetailsPage() {
  return (
    <div className="min-h-screen flex justify-center items-start py-10 bg-transparent">
      <div className="w-full max-w-4xl">
        {/* Project Header */}
        <Card className="shadow-md border border-gray-300 rounded-2xl mb-6">
          <CardContent className="p-6">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Website Redesign for Tech Startup
            </h1>
            <p className="text-gray-600 mb-4">
              We are looking for a creative front-end developer to redesign our company website
              using React and Tailwind CSS. The design should be modern, responsive, and user-friendly.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-500" />
                Posted by <strong className="ml-1">Ananya Sharma</strong>
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-500" />
                Category: <strong className="ml-1">Web Development</strong>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                Posted 3 days ago
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Budget and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="border border-gray-300 rounded-2xl">
            <CardContent className="p-5">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-500" />
                Budget
              </h2>
              <p className="text-gray-700 text-lg">₹20,000 - ₹30,000</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-300 rounded-2xl">
            <CardContent className="p-5">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-500" />
                Required Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "UI/UX", "Responsive Design"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Apply Section */}
        <Card className="border border-gray-300 rounded-2xl">
          <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Interested in this project?</h3>
              <p className="text-gray-600">Submit your proposal and showcase your portfolio.</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mt-4 md:mt-0">
              Apply Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
