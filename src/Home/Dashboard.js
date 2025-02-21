import React, { useState } from "react";
import Area from "./visualizing/Area";
import Bar from "./visualizing/Bar";
import "./CSS/Style.css"

const Dashboard = () => {
  const [panels, setPanels] = useState([
    { id: 1, title: "Sales Data" },
    { id: 2, title: "Revenue Trends" },
    { id: 3, title: "Sales Data" },
    { id: 4, title: "Revenue Trends" },
    { id: 1, title: "Sales Data" },
    { id: 2, title: "Revenue Trends" },
    { id: 3, title: "Sales Data" },
    { id: 4, title: "Revenue Trends" },
    { id: 1, title: "Sales Data" },
    { id: 2, title: "Revenue Trends" },
    { id: 3, title: "Sales Data" },
    { id: 4, title: "Revenue Trends" }
  ]);

 

  return (
    <div>
       <div className="dashboard-grid">
        {panels.map((panel) => (
          <div key={panel.id} className="panel">
            <h3>{panel.title}</h3>
        {panel.title == "Sales Data" ?<Bar/>:<Area/>}
             </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
