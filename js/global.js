// import {account} from '../appwrite'

const { Client, Account } = Appwrite;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("stelingpavillion");

const account = new Account(client);

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const profileScreen = document.getElementById("profile-screen");
const loginScreen = document.getElementById("login-screen");

async function handleLogin() {
  account.createOAuth2Session(
    "google",
    "https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/account/dashboard.html",
    "https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/account/fail.html"
  );
}

async function getUser() {
  try {
    const user = await account.get();
    renderProfileScreen(user);
  } catch (error) {
    renderLoginScreen();
  }
}

function renderLoginScreen() {
  loginScreen.classList.remove("visually-hidden");
}

async function renderProfileScreen(user) {
  document.getElementById("username").textContent = user.name;

  profileScreen.classList.remove("visually-hidden");
}

async function handleLogout() {
  account.deleteSession("current");
  profileScreen.classList.add("visually-hidden");
  renderLoginScreen();
}

loginBtn?.addEventListener("click", handleLogin);
logoutBtn?.addEventListener("click", handleLogout);

getUser();
