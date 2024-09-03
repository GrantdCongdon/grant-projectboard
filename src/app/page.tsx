"use client";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";

const tabs: { [key: string]: React.ComponentType } = {
  "default": About,
  "calibrate": Projects,
}

export default function Home() {
  const [tab, setTab] = useState("default");
  const PageComponent = tabs[tab];
  return (
    <main className="content">
      <div className="header">
        <h1 className="Title">Grant's Project Board</h1>
      </div>
      <div className="navbar-div">
        <Tabs className="tabs" centered>
          <Tab label="About" className="navbar-tab" onClick={() => setTab("default")}/>
          <Tab label="Projects" className="navbar-tab" onClick={() => setTab("calibrate")}/>
        </Tabs>
      </div>
      <div className="tab-content">
          {PageComponent ? <PageComponent/> : <div>Page not found</div>}
      </div>
    </main>
  );
}
