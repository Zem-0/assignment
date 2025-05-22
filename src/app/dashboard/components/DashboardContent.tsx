'use client';

import { Pizza, Clock, TrendingUp, Star } from "lucide-react";
import Link from "next/link";

interface UserData {
  firstName: string | null;
  lastName: string | null;
  email: string;
  imageUrl: string;
}

const mockOrders = [
  {
    id: "ORD001",
    pizza: "Margherita",
    status: "Delivered",
    time: "2 hours ago",
  },
  {
    id: "ORD002",
    pizza: "Pepperoni",
    status: "Preparing",
    time: "1 hour ago",
  },
  {
    id: "ORD003",
    pizza: "Vegetarian",
    status: "Out for Delivery",
    time: "30 minutes ago",
  },
];

const stats = [
  {
    title: "Total Orders",
    value: "1,234",
    change: "+12%",
    icon: Pizza,
    color: "text-orange-500",
  },
  {
    title: "Average Time",
    value: "25 min",
    change: "-5%",
    icon: Clock,
    color: "text-blue-500",
  },
  {
    title: "Order Growth",
    value: "23%",
    change: "+8%",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    title: "Customer Rating",
    value: "4.8",
    change: "+0.2",
    icon: Star,
    color: "text-yellow-500",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Preparing: "bg-blue-100 text-blue-800",
  "Out for Delivery": "bg-purple-100 text-purple-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

interface DashboardContentProps {
  user: UserData | null;
}

export function DashboardContent({ user }: DashboardContentProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.firstName || "User"}! 👋
        </h1>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your pizza orders today.
        </p>
        <div className="mt-4">
          <Link
            href="/dashboard/orders"
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            View All Orders
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm font-medium text-green-600">
                {stat.change}
              </span>
              <span className="text-sm text-gray-600"> from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Orders
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {order.pizza}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Order #{order.id}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusColors[order.status as keyof typeof statusColors]
                    }`}
                  >
                    {order.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    {order.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 