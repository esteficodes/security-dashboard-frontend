import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface LogEntry {
  id: number;
  ip_address: string;
  username: string;
  event_type: string;
  event_time: string;
}

const App: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {


        // 🔹 Step 1: Encode username and application password
        const auth = btoa(`${import.meta.env.VITE_API_USER}:${import.meta.env.VITE_API_PASSWORD}`);



  
        // 🔹 Step 2: Fetch user data using Basic Authentication
        const userResponse = await axios.get("http://security-dashboard.local/wp-json/wp/v2/users/me", {
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json",
          },
        });
  
        console.log("User response:", userResponse.data);
  
        // 🔹 Step 3: Fetch security logs using the same authentication
        const logsResponse = await axios.get("http://security-dashboard.local/wp-json/security-dashboard/v1/logs", {
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json",
          },
        });
  
        console.log("Logs received:", logsResponse.data);
        setLogs(logsResponse.data);
      } catch (error) {
        console.error("Error fetching logs:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);
  
  
  
  

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Security Dashboard</h1>
      {loading ? <p>Loading logs...</p> : null}
      <div className="security-table-container">
  <table className="security-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>IP Address</th>
        <th>Username</th>
        <th>Event Type</th>
        <th>Event Time</th>
      </tr>
    </thead>
    <tbody>
      {logs.length > 0 ? (
        logs.map((log) => (
          <tr key={log.id}>
            <td>{log.id}</td>
            <td>{log.ip_address}</td>
            <td>{log.username}</td>
            <td>{log.event_type}</td>
            <td>{log.event_time}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No logs found</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default App;
