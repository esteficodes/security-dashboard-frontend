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
  
  useEffect(() => {
    axios.get("http://security-dashboard.local/wp-json/security-dashboard/v1/logs")
      .then(response => setLogs(response.data))
      .catch(error => console.error("Error fetching logs:", error));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Security Dashboard</h1>
      <table border={1} cellPadding={10}>
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
          {logs.length > 0 ? logs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.ip_address}</td>
              <td>{log.username}</td>
              <td>{log.event_type}</td>
              <td>{log.event_time}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan={5}>No logs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
