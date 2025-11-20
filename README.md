The **MERN stack** (MongoDB, Express.js, React.js, Node.js) was used to create this straightforward Task Manager application.  
Tasks can be created, viewed, updated, and deleted by users.  **Render** (backend) and **Vercel** (frontend) are used in the deployment of this project.

**Core Features**

- Add a new task (title, description, status)
- Edit and update existing tasks
- Delete tasks
- List all tasks
- Validation for empty title and description

**Bonus Features**

- Filter tasks by status: All / Pending / In Progress / Completed
- Pagination for task list
- Deployed backend (Render) and frontend (Vercel)

**Tech Stack**

- **Frontend:** React.js (Create React App)  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Atlas)  
- **API Testing:** Postman
- **Version Control:** GitHub

**Project Structure**

project-root/
├─ backend/
│ ├─ server.js
│ ├─ .env
│ ├─ models/
│ │ └─ Task.js
│ ├─ routes/
│ │ └─ taskRoutes.js
│ └─ controllers/
│ └─ taskController.js
├─ frontend/
│ ├─ package.json
│ ├─ src/
│ │ ├─ components/
│ │ ├─ pages/
│ │ └─ services/
│ │ └─ api.js
│ └─ public/
└─ README.md

**Setup & Installation**
### Backend

1. Navigate to backend folder:
        cd backend

2. Install dependencies:
        npm install

3. Create a .env file with:
        MONGO_URI=your-mongodb-connection-string(as shown in Atlas)
        PORT=5000

4. Run backend:
        npm start

5. Test API with Postman:
        GET /api/tasks
        POST /api/tasks
        PUT /api/tasks/:id
        DELETE /api/tasks/:id

### Frontend

1. Navigate to Frontend folder:
        cd Frontend

2. Install dependencies:
        npm install

3. Create .env.local with
        REACT_APP_API_URL=https://your-render-backend.onrender.com(YOUR RENDER LINK)

4. Run frontend:
        npm start

5. Open in browser:
        http://localhost:3000
        
**Deployment**

Backend: Deployed on Render
Frontend: Deployed on Vercel
Make sure environment variables are set in both platforms.

**Push to GitHub**

1. Initialize Git (if not done):
        git init

2. Add all files:
        git add .


3. Commit changes:
        git commit -m "Initial commit: MERN Task Manager App"


4. Create GitHub repository (e.g., mern-task-manager).
        Add remote:
        git remote add origin https://github.com/your-username/mern-task-manager.git


5. Push to GitHub:
        git branch -M main
        git push -u origin main

Live demo link deployed ----> https://task-manager-murex-three.vercel.app/
