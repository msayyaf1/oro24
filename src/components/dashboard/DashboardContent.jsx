import { useEffect, useState } from "react";
import Block from "./Block";
import FloorLayout from "./FloorLayout";
import Footer from "../Footer/Footer";

const DashboardContent = () => {
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(null);
  const [selectedUnits, setSelectedUnits] = useState([]);

  const fetchInventory = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://oro24world.com/api/HandOverProjectDelivery/inventory/floor-inventory-byBlock",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-app-id": "KYCTY",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ProjectID: 1,
            apt_type: "All",
            block: "All",
            ProjectDeliveryStatusID: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? "Invalid email or password"
            : "Something went wrong. Please try again."
        );
      }

      const data = await response.json();
      const filteredData = data.slice(0, 2);
      setInventory(filteredData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div className="flex-1 space-y-4">
      <div className="rounded-xl bg-white p-8 w-full">
        <div className="border-gray-200 border-b mb-8">
          <div className="border-b-[#B89058] border-b-2 w-28 pl-4">
            Ready Unit
          </div>
        </div>
        <div className="inline-flex w-full justify-between items-center">
          <div className="font-light text-lg">Torino by ORO24</div>
          <Block />
        </div>
        <div className="w-full flex justify-center items-start h-full space-x-4">
          <div className="w-1/2">
            <FloorLayout
              floorNo={1}
              units={inventory[0]?.ProjectDeliveries}
              selectedUnits={selectedUnits}
              setSelectedUnits={setSelectedUnits}
            />
          </div>
          <div className="w-1/2">
            <FloorLayout
              floorNo={2}
              units={inventory[1]?.ProjectDeliveries}
              selectedUnits={selectedUnits}
              setSelectedUnits={setSelectedUnits}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F8EEE1]  py-4 px-6 flex justify-center items-center gap-4">
        <span className="text-gray-700">
          You selected{" "}
          <span className="font-semibold">{selectedUnits.length} units</span>
        </span>
        <button className="bg-[#B89058] text-white px-6 py-2 rounded-lg hover:bg-[#a17e4a] transition-colors">
          Assign Check list
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardContent;
