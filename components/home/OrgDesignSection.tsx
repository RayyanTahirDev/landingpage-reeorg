"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const OrgDesignSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section
      id="org-design"
      ref={sectionRef}
      className="py-24 bg-gradient-to-tl from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className="order-2 md:order-1 transition-all duration-700 opacity-0 translate-y-8"
          >
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-500">Org Structure</span>
                <h3 className="text-xl font-bold">Departments & Roles</h3>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg mb-2">
                      <div className="font-medium">Usman Ahmed</div>
                      <div className="text-xs">Head of Product</div>
                    </div>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <div className="flex space-x-12">
                      <div className="flex flex-col items-center">
                        <div className="w-px h-6 bg-gray-300"></div>
                        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                          <div className="font-medium">Muzammil</div>
                          <div className="text-xs">Product Manager</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-px h-6 bg-gray-300"></div>
                        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                          <div className="font-medium">Rayyann</div>
                          <div className="text-xs">Product Designer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Skill Gap Analysis</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Required Skill
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User Skill
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Gap
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-sm">
                        <tr>
                          <td className="px-3 py-2">Product Manager</td>
                          <td className="px-3 py-2">Leadership</td>
                          <td className="px-3 py-2">Intermediate</td>
                          <td className="px-3 py-2">
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                              Major Gap
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2">Product Designer</td>
                          <td className="px-3 py-2">UI Design</td>
                          <td className="px-3 py-2">Advanced</td>
                          <td className="px-3 py-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                              No Gap
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={textRef}
            className="order-1 md:order-2 max-w-xl transition-all duration-700 opacity-0 translate-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Organizational Design & Skills Management
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Optimize your organizational structure and ensure the right skills
              are in the right places.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">
                  Org Structure Visualization
                </h3>
                <p className="text-gray-600">
                  Interactive org charts that show reporting lines, team
                  compositions, and skill distribution.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Skill Gap Analysis</h3>
                <p className="text-gray-600">
                  Identify skill gaps within teams and departments to inform hiring
                  and upskilling decisions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">
                  Role Requirement Planning
                </h3>
                <p className="text-gray-600">
                  Define skill requirements for roles and track how well your
                  current team meets those requirements.
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Explore Org Design Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgDesignSection;