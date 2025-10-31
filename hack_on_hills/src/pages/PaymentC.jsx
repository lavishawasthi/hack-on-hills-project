import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, RefreshCcw, Clock } from "lucide-react";

const Payments = () => {
  const escrows = [
    {
      project: "Website Redesign",
      freelancer: "John Doe",
      amount: "₹15,000",
      status: "In Escrow",
    },
    {
      project: "Mobile App Backend",
      freelancer: "Sarah Smith",
      amount: "₹20,000",
      status: "In Escrow",
    },
  ];

  const transactions = [
    { date: "28 Oct 2025", project: "Portfolio Website", freelancer: "Amit Verma", amount: "₹12,000", status: "Released" },
    { date: "22 Oct 2025", project: "E-commerce UI", freelancer: "Riya Sharma", amount: "₹18,000", status: "Released" },
    { date: "14 Oct 2025", project: "Logo Design", freelancer: "Kunal Singh", amount: "₹5,000", status: "Refunded" },
  ];

  return (
    <div className="p-6 bg-[#f5f3ff] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Payments</h2>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
          + Add Funds
        </Button>
      </div>

      {/* Wallet Overview */}
      <Card className="mb-6 border-none shadow-md rounded-2xl">
        <CardContent className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-4 rounded-full">
              <Wallet className="text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Wallet Balance</h3>
              <p className="text-2xl font-bold text-purple-700">₹45,000</p>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCcw size={16} />
            Reconnect Wallet
          </Button>
        </CardContent>
      </Card>

      {/* Active Escrows */}
      <h3 className="text-lg font-semibold mb-4">Active Escrows</h3>
      <div className="grid gap-4 mb-8">
        {escrows.map((item, index) => (
          <Card key={index} className="border-none shadow-sm rounded-2xl">
            <CardContent className="p-5 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-gray-800">{item.project}</h4>
                <p className="text-sm text-gray-500">
                  Freelancer: {item.freelancer}
                </p>
                <p className="font-medium text-purple-700 mt-1">{item.amount}</p>
              </div>
              <div className="flex gap-3">
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  Release Payment
                </Button>
                <Button
                  variant="outline"
                  className="text-gray-700 border-gray-300 rounded-lg"
                >
                  Cancel Escrow
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Transaction History */}
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Clock size={18} className="text-purple-600" />
        Transaction History
      </h3>
      <div className="bg-white shadow-sm rounded-2xl overflow-hidden">
        <table className="w-full text-base">
          <thead className="bg-purple-100 text-gray-700">
            <tr>
              <th className="py-4 px-6 text-left font-medium">Date</th>
              <th className="py-4 px-6 text-left font-medium">Project</th>
              <th className="py-4 px-6 text-left font-medium">Freelancer</th>
              <th className="py-4 px-6 text-left font-medium">Amount</th>
              <th className="py-4 px-6 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr
                key={i}
                className="border-t border-gray-100 hover:bg-purple-50 transition"
              >
                <td className="py-4 px-6">{t.date}</td>
                <td className="py-4 px-6">{t.project}</td>
                <td className="py-4 px-6">{t.freelancer}</td>
                <td className="py-4 px-6 font-medium text-gray-800">
                  {t.amount}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      t.status === "Released"
                        ? "bg-green-100 text-green-700"
                        : t.status === "Refunded"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
