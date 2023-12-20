import { useState, useEffect } from "react";
import "./App.css";
import Story from "./components/Story";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import Globe from "./components/Globe";

function App() {
  const cities = [
    {
      name: "Tokyo–Yokohama",
      latitude: 35.5147457,
      longitude: 139.4839981,
      population: 37339804,
      img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Delhi",
      latitude: 28.6517178,
      longitude: 77.2219388,
      population: 31181376,
      img: "https://images.unsplash.com/photo-1594455615933-c19828af39b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mumbai",
      latitude: 18.9387711,
      longitude: 72.8353355,
      population: 20667656,
      img: "https://images.unsplash.com/photo-1594146032116-80033545b0b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mexico City",
      latitude: 19.4326296,
      longitude: -99.1331785,
      population: 21918936,
      img: "https://images.unsplash.com/photo-1599067821475-c47c29093bf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dhaka",
      latitude: 23.7593572,
      longitude: 90.3788136,
      population: 21741090,
      img: "https://images.unsplash.com/photo-1582555599578-5068e6474677?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Osaka–Kobe–Kyoto",
      latitude: 34.8038695,
      longitude: 135.5156628,
      population: 19110616,
      img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cairo",
      latitude: 30.048819,
      longitude: 31.243666,
      population: 21322750,
      img: "https://images.unsplash.com/photo-1595979904086-471704dc0e81?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Beijing",
      latitude: 39.906217,
      longitude: 116.3912757,
      population: 20896820,
      img: "https://images.unsplash.com/photo-1614089814037-7bc29cdcff6e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "São Paulo",
      latitude: -23.5506507,
      longitude: -46.6333824,
      population: 22237472,
      img: "https://images.unsplash.com/photo-1572894234976-d961418c709d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shanghai",
      latitude: 31.2252985,
      longitude: 121.4890497,
      population: 27795702,
      img: "https://images.unsplash.com/photo-1535356795203-50b2eb73f96c?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [count, setCount] = useState(0);
  const [coord, setCoord] = useState(cities);

  return (
    <div className="bg-gray-400">
      <Story citiesData={coord} />
    </div>
  );
}

export default App;
