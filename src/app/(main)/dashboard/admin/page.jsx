"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Card, Chip } from "@heroui/react";

const API =  process.env.NEXT_PUBLIC_SERVER_URL;

const AdminHome = () => {
  const { data: session, isPending } = useSession();

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch(`${API}/admin-dashboard`);

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard");
        }

        const data = await response.json();

        setDashboard(data);
      } catch (error) {
        console.error("DASHBOARD FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (isPending || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-zinc-400">
          Loading dashboard...
        </p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card className="bg-zinc-950 border border-zinc-800 p-6">
          <h2 className="text-xl font-bold text-red-400">
            Access Denied
          </h2>

          <p className="text-zinc-400 mt-2">
            You must be logged in as an admin.
          </p>
        </Card>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-red-400">
          Failed to load dashboard data.
        </p>
      </div>
    );
  }

  const {
    stats,
    lessonGrowth,
    userGrowth,
    contributors,
    recentLessons,
    recentUsers,
    recentReports,
  } = dashboard;

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-8">
          <p className="text-indigo-400 text-sm font-medium">
            ADMIN PANEL
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mt-1">
            Welcome back, {session.user?.name}
          </h1>

          <p className="text-zinc-500 mt-2">
            Monitor your Digital Life Lessons platform.
          </p>
        </div>


        {/* ========================= */}
        {/* STATISTICS */}
        {/* ========================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* USERS */}

          <Card className="bg-zinc-950 border border-zinc-800 shadow-lg p-5">

            <div className="flex items-center justify-between">
              <span className="text-zinc-400 text-sm">
                Total Users
              </span>

              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                👥
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-4">
              {stats.totalUsers.toLocaleString()}
            </h2>

            <p className="text-zinc-500 text-sm mt-2">
              Registered users
            </p>

          </Card>


          {/* PUBLIC LESSONS */}

          <Card className="bg-zinc-950 border border-zinc-800 shadow-lg p-5">

            <div className="flex items-center justify-between">
              <span className="text-zinc-400 text-sm">
                Public Lessons
              </span>

              <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
                📚
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-4">
              {stats.publicLessons.toLocaleString()}
            </h2>

            <p className="text-zinc-500 text-sm mt-2">
              Available publicly
            </p>

          </Card>


          {/* REPORTS */}

          <Card className="bg-zinc-950 border border-zinc-800 shadow-lg p-5">

            <div className="flex items-center justify-between">
              <span className="text-zinc-400 text-sm">
                Reported Lessons
              </span>

              <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center">
                🚨
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-4">
              {stats.reportedLessons}
            </h2>

            <p className="text-red-400 text-sm mt-2">
              Needs moderation
            </p>

          </Card>


          {/* TODAY */}

          <Card className="bg-zinc-950 border border-zinc-800 shadow-lg p-5">

            <div className="flex items-center justify-between">
              <span className="text-zinc-400 text-sm">
                Today's Lessons
              </span>

              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center">
                ✨
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-4">
              {stats.todaysLessons}
            </h2>

            <p className="text-zinc-500 text-sm mt-2">
              Created today
            </p>

          </Card>


          {/* PREMIUM */}

          <Card className="bg-zinc-950 border border-zinc-800 shadow-lg p-5">

            <div className="flex items-center justify-between">
              <span className="text-zinc-400 text-sm">
                Premium Users
              </span>

              <div className="w-10 h-10 rounded-xl bg-yellow-600/20 flex items-center justify-center">
                ⭐
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-4">
              {stats.premiumUsers}
            </h2>

            <p className="text-zinc-500 text-sm mt-2">
              Active Premium members
            </p>

          </Card>

        </div>


        {/* ========================= */}
        {/* CHARTS */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          {/* LESSON GROWTH */}

          <Card className="bg-zinc-950 border border-zinc-800 p-6">

            <div className="flex justify-between items-center mb-6">

              <div>
                <h2 className="text-xl font-bold">
                  Lesson Growth
                </h2>

                <p className="text-sm text-zinc-500">
                  Lessons created over the last 6 months
                </p>
              </div>

              <Chip
                color="primary"
                variant="flat"
              >
                Live
              </Chip>

            </div>


            <div className="h-64 flex items-end gap-4">

              {lessonGrowth.map((item) => {

                const max = Math.max(
                  ...lessonGrowth.map((x) => x.value),
                  1
                );

                const height =
                  (item.value / max) * 100;

                return (
                  <div
                    key={item.month}
                    className="flex-1 h-full flex flex-col justify-end items-center gap-2"
                  >

                    <span className="text-xs text-zinc-400">
                      {item.value}
                    </span>

                    <div
                      className="w-full max-w-10 bg-indigo-600 rounded-t-lg hover:bg-indigo-500 transition"
                      style={{
                        height: `${Math.max(height, 3)}%`,
                      }}
                    />

                    <span className="text-xs text-zinc-500">
                      {item.month}
                    </span>

                  </div>
                );
              })}

            </div>

          </Card>


          {/* USER GROWTH */}

          <Card className="bg-zinc-950 border border-zinc-800 p-6">

            <div className="flex justify-between items-center mb-6">

              <div>
                <h2 className="text-xl font-bold">
                  User Growth
                </h2>

                <p className="text-sm text-zinc-500">
                  Registered users over the last 6 months
                </p>
              </div>

              <Chip
                color="success"
                variant="flat"
              >
                Live
              </Chip>

            </div>


            <div className="h-64 flex items-end gap-4">

              {userGrowth.map((item) => {

                const max = Math.max(
                  ...userGrowth.map((x) => x.value),
                  1
                );

                const height =
                  (item.value / max) * 100;

                return (
                  <div
                    key={item.month}
                    className="flex-1 h-full flex flex-col justify-end items-center gap-2"
                  >

                    <span className="text-xs text-zinc-400">
                      {item.value}
                    </span>

                    <div
                      className="w-full max-w-10 bg-emerald-600 rounded-t-lg hover:bg-emerald-500 transition"
                      style={{
                        height: `${Math.max(height, 3)}%`,
                      }}
                    />

                    <span className="text-xs text-zinc-500">
                      {item.month}
                    </span>

                  </div>
                );
              })}

            </div>

          </Card>

        </div>


        {/* ========================= */}
        {/* BOTTOM */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-2 gap-6 mt-6">


          {/* CONTRIBUTORS */}

          <Card className="bg-zinc-950 border border-zinc-800 p-6">

            <div className="flex justify-between items-center mb-5">

              <div>
                <h2 className="text-xl font-bold">
                  Most Active Contributors
                </h2>

                <p className="text-sm text-zinc-500">
                  Top lesson creators
                </p>
              </div>

            </div>


            <div className="space-y-4">

              {contributors.length === 0 ? (
                <p className="text-zinc-500">
                  No contributors yet.
                </p>
              ) : (

                contributors.map((person, index) => (

                  <div
                    key={person.email}
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
                  >

                    <div className="flex items-center gap-3">

                      {person.image ? (
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      )}

                      <div>

                        <p className="font-medium">
                          {person.name || "Unknown User"}
                        </p>

                        <p className="text-xs text-zinc-500">
                          {person.totalLessons} lessons
                        </p>

                      </div>

                    </div>


                    <Chip
                      size="sm"
                      color={
                        index === 0
                          ? "warning"
                          : "default"
                      }
                      variant="flat"
                    >
                      {index === 0
                        ? "Top Contributor"
                        : "Contributor"}
                    </Chip>

                  </div>

                ))
              )}

            </div>

          </Card>


          {/* RECENT ACTIVITY */}

          <Card className="bg-zinc-950 border border-zinc-800 p-6">

            <h2 className="text-xl font-bold">
              Recent Activity
            </h2>

            <p className="text-sm text-zinc-500 mb-5">
              Latest platform activity
            </p>


            <div className="space-y-5">

              {/* LESSONS */}

              {recentLessons.slice(0, 3).map((lesson) => (

                <div
                  key={lesson._id}
                  className="flex gap-3"
                >

                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />

                  <div>

                    <p className="text-sm">

                      New lesson{" "}

                      <span className="text-indigo-400">
                        "{lesson.title}"
                      </span>{" "}
                      was created.

                    </p>

                    <p className="text-xs text-zinc-600 mt-1">
                      {formatTime(lesson.createdAt)}
                    </p>

                  </div>

                </div>

              ))}


              {/* USERS */}

              {recentUsers.slice(0, 2).map((user) => (

                <div
                  key={user._id}
                  className="flex gap-3"
                >

                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" />

                  <div>

                    <p className="text-sm">

                      New user{" "}

                      <span className="text-emerald-400">
                        {user.name || user.email}
                      </span>{" "}
                      joined the platform.

                    </p>

                    <p className="text-xs text-zinc-600 mt-1">
                      {formatTime(user.createdAt)}
                    </p>

                  </div>

                </div>

              ))}


              {/* REPORT */}

              {recentReports.slice(0, 1).map((report) => (

                <div
                  key={report._id}
                  className="flex gap-3"
                >

                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />

                  <div>

                    <p className="text-sm">

                      A lesson was{" "}

                      <span className="text-red-400">
                        reported
                      </span>.

                    </p>

                    <p className="text-xs text-zinc-600 mt-1">
                      {formatTime(report.createdAt)}
                    </p>

                  </div>

                </div>

              ))}


              {recentLessons.length === 0 &&
                recentUsers.length === 0 &&
                recentReports.length === 0 && (
                  <p className="text-zinc-500">
                    No recent activity.
                  </p>
                )}

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
};


// ============================
// TIME FORMATTER
// ============================

function formatTime(date) {

  if (!date) {
    return "Unknown time";
  }

  const time = new Date(date);

  const diff =
    Math.floor(
      (Date.now() - time.getTime()) / 1000
    );

  if (diff < 60) {
    return "Just now";
  }

  if (diff < 3600) {
    return `${Math.floor(diff / 60)} minutes ago`;
  }

  if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hours ago`;
  }

  if (diff < 604800) {
    return `${Math.floor(diff / 86400)} days ago`;
  }

  return time.toLocaleDateString();
}

export default AdminHome;