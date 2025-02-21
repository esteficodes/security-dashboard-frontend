# 🔒 Security Dashboard  
A **React + TypeScript + WordPress** application that logs failed login attempts and provides a **secure admin-only dashboard** to monitor security events in real-time.  

🛠 **Built with:**  
- **React + TypeScript** (for a scalable and type-safe frontend)  
- **WordPress + PHP** (for backend logging and authentication)  
- **REST API + Axios** (for secure communication)  

---

## 📌 Features  
✅ **Real-time Security Logs** – Tracks failed logins and other security events.  
✅ **WordPress REST API** – Uses a custom plugin to expose security logs.  
✅ **Admin-Only Access** – Restricts logs to WordPress administrators.  
✅ **Responsive UI** – Mobile-friendly design with automatic adjustments.  
✅ **Secure Authentication** – Uses WordPress authentication with nonces and cookies.  

---

## 📌 Tech Stack  
### **Frontend (React + TypeScript)**  
- ⚡ **Vite** – Fast build tool for modern React apps  
- 🔄 **Axios** – Handles API requests to WordPress  
- 🎨 **CSS & Responsive Design** – Ensures mobile-friendly UI  

### **Backend (WordPress + PHP)**  
- 🔗 **WordPress REST API** – Custom endpoint for fetching logs  
- 🔌 **Custom Plugin** – Logs failed login attempts in the database  
- 🛢 **MySQL (via LocalWP)** – Stores security events  

---

## 🚀 Setup & Installation  

### **1️⃣ Install LocalWP & Set Up WordPress**  
1. **Download & Install [LocalWP](https://localwp.com/)**  
2. **Create a new site** (e.g., `security-dashboard.local`)  
3. **Enable WordPress REST API:** No extra setup needed!  

---

### **2️⃣ Install the Security Dashboard Plugin**  
1. **Go to your LocalWP site directory:**  
   ```sh
   cd ~/Local Sites/security-dashboard/app/public/wp-content/plugins/

2. **Clone the plugin into `wp-content/plugins/`:**  
   ```sh
   git clone https://github.com/yourusername/security-dashboard-plugin.git

## **Activate the Plugin in WordPress Admin:**
1. Login to **[http://security-dashboard.local/wp-admin/](http://security-dashboard.local/wp-admin/)**
2. Go to **Plugins** → **Activate "Security Dashboard"**
3. Activate the Plugin in WordPress Admin:
Login to http://security-dashboard.local/wp-admin/
Go to Plugins → Activate "Security Dashboard"

---

## **3️⃣ Install & Run the React Frontend**
### **Navigate to your frontend directory:**
```sh
cd ~/Desktop/CODE/security-dashboard-frontend


