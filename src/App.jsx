import "./App.css";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./components/Auth/LoginButton/LoginButton";
import LogoutButton from "./components/Auth/LogoutButton/LogoutButton";
import Profile from "./components/Auth/Profile/Profile";
import Header from "./components/Header/Header";

const images = [
  "https://plus.unsplash.com/premium_photo-1684888644431-894ed9ffebb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
  "https://plus.unsplash.com/premium_photo-1684888644431-894ed9ffebb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://plus.unsplash.com/premium_photo-1684888644431-894ed9ffebb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://plus.unsplash.com/premium_photo-1684888644431-894ed9ffebb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://plus.unsplash.com/premium_photo-1684888644431-894ed9ffebb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

function App() {
  return (
    <Auth0Provider
      domain="dev-mugndnatv34x87aa.us.auth0.com"
      clientId="0YOKQru9s4qZXU7Rq91owND4CFMFbk1m"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div>
        <Header />
        <ImageGrid initialImages={images} />
      </div>
    </Auth0Provider>
  );
}

export default App;
