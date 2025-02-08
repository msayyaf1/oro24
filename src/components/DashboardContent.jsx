import { useEffect, useState } from "react";

const DashboardContent = ({ children }) => {
  const [inventory,setInventory] = useState([]);


  const fetchInventory = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://oro24world.com/api/HandOverProjectDelivery/inventory/floor-inventory-byBlock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-app-id": "KYCTY",
          "Authorization": `Bearer ${token}`, 

        },
        body: JSON.stringify({
          "ProjectID": 1,
          "apt_type": "All",
          "block": "All",
          "ProjectDeliveryStatusID": 1
      }
      ),
      });

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? "Invalid email or password"
            : "Something went wrong. Please try again."
        );
      }

      const data = await response.json();
      console.log("data", data);
      setInventory(data)
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div className="rounded-xl bg-white p-8 w-full ">
      <div className="border-gray-200 border-b mb-8">
      <div className="border-b-[#B89058] border-b-2 w-28 pl-4">Ready Unit</div>
      </div>
      <div className="font-light text-lg">Torino by ORO24</div>
      <div className="w-full flex justify-center items-start h-full space-x-4 ">
        <div className="w-1/2 bg-[#F3F6F9] h-full rounded-lg">
        Floor 1

        </div>
        <div className="w-1/2 bg-[#F3F6F9] h-full rounded-lg">Floor 2</div>

      </div>
    </div>
  );
};

export default DashboardContent;
