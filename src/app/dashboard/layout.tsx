'use client';

import { UserButton, SignOutButton } from "@clerk/nextjs";
import { Pizza, Home, Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Pizza className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-800">PizzaHub</span>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <Link
              href="/dashboard"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors font-medium ${
                pathname === "/dashboard"
                  ? "bg-orange-100 text-orange-600 font-bold"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <Home className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/orders"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors font-medium ${
                pathname === "/dashboard/orders"
                  ? "bg-orange-100 text-orange-600 font-bold"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <Pizza className="w-5 h-5 mr-3" />
              <span>Orders</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <UserButton afterSignOutUrl="/" />
              <span className="text-sm text-gray-500">Account</span>
            </div>
            <SignOutButton signOutCallback={() => { window.location.href = '/'; }}>
              <button
                className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                type="button"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen transition-all duration-200">
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
} 