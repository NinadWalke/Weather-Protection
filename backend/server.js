if (process.env.ENVIRONMENT !== "Production") {
  require("dotenv").config();
}

// Requiring packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt"); // requiring bcrypt for secure password passing
const passport = require("passport"); // Passport
const LocalStrategy = require("passport-local"); // Passport strategy
const session = require("express-session"); // Express sessions

// Requiring Mongo Models
const { User } = require("./schemas/User.js");

// MongoDB connection settings
const dbURI = "mongodb://127.0.0.1:27017/atmosalert"; // Local DB url

main()
  .then(() => {
    console.log("Connection to MongoDB successful!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB!\n" + err);
  });

async function main() {
  await mongoose.connect(dbURI);
}

// Session Code
const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  // Cookie options below
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // Current time * No of days * no of hours in one day * no of minutes in an hour * no of seconds in a min * no of milliseconds in a second
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, // For security purposes => Cross scripting attacks are prevented at this step
  },
};

// Express server setup
const app = express();
const port = 8080;

// Server settings here
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true, // 👈 Allow cookies to be sent
  })
);
app.options("*", cors());
app.use(bodyParser.json()); // Since we're working with JSON, bodyParser.json
app.use(session(sessionOptions)); // Using sessions
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes & Server

// Sign Up Route
app.post("/signup", async (req, res) => {
  try {
    let { firstname, lastname, email, username, dob, gender, password } =req.body;
    const regUser = new User({ firstname, lastname, email, username, dob, gender});
    await User.register(regUser, password);
    res.status(201).json({ message: "User successfully registered!" });
  }
  catch (e) {
    console.error("Registration error:", err);
    res.status(400).json({ message: "Error registering user. Try again!" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  // Use passport-local-mongoose's authenticate method
  User.authenticate()(
    req.body.username,
    req.body.password,
    (err, user, options) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: "Server error during authentication" });
      }

      if (!user) {
        // Authentication failed (wrong username or password)
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }
      req.login(user, (err) => {
        if(err) {
          console.error("Login session error: ", err);
          return res.status(500).json({message: "Could not login user!"});
        }
        // Successful login
        res.status(200).json({ message: "Login successful!", user });
      })
    }
  );
});

// Authentication at each page
app.get("/auth/check", async (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.status(200).json({ authenticated: true, user: req.user });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

// Blogs route
app.post("/blog/post", async (req, res) => {
  if(!req.isAuthenticated()) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  const user = req.user;
  console.log(user);
  // If user is invalid
  if (!user) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  const { blogTitle, blogSummary, blogBody } = req.body;
  // If blog data is missing
  if (!blogTitle || !blogSummary || !blogBody) {
    return res.status(400).json({ error: "Missing blog fields" });
  }
  // Push blog
  try {
    user.blogs.push({ blogTitle, blogSummary, blogBody });
    await user.save();
    res.status(200).json({ message: "Blog added", blogs: user.blogs });
  } catch (err) {
    res.status(500).json({ error: "Error saving blog" });
  }
});

app.get("/", (req, res) => {
  res.send("Working!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
