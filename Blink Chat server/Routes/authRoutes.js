import { Router } from "express";


import {signup, login, getUserInfo, updateProfile, addProfileImage, removeProfileImage, logOut}  from "../controllers/AuthController.js"; // Import all the functions from the AuthController.js file (For authentication and profile setup.)

import { verifyToken } from "../middleware/AuthMiddleware.js"; // import the verifyToken function from middleware (That also shown in this commit.)

const authRoutes = Router(); // Initialize a new router instance

authRoutes.post("/signup", signup); // Define a POST route for "/signup" that calls the signup Function.
authRoutes.post("/login", login); // Define a POST route for "/Login" that calls the login Function.
authRoutes.get('/user-info', verifyToken, getUserInfo) // Define a GET route for "/user-info" that calls the getUserInfo Function and requires a valid JWT token to verify the user.
authRoutes.post('/update-profile', verifyToken, updateProfile) // Define a POST route for "/update-profile" that calls the updateProfile Function and taake all details from user using POST request.
authRoutes.post('/add-profile-image', verifyToken, upload.single('profile-image') , addProfileImage) // Define a POST route for upload a progile image in frontend and also store image address in database.
authRoutes.delete('/remove-profile-image', verifyToken, removeProfileImage) // Define a DELETE route for "/remove-profile-image" that calls the removeProfileImage Function.
authRoutes.post('/logout', logOut) // Define s post route for logout function that used to logout user from the application.


export default authRoutes; // // Export the router to use it in other parts of the application
