"use client";

import React from "react";
import { preloadModule } from "react-dom";

const BRIDGE_SCRIPT = "https://core.sanity-cdn.com/bridge.js";

export default function StudioLayout({ children }) {
  // Preload the bridge script for faster dashboard interaction
  preloadModule(BRIDGE_SCRIPT, { as: "script" });

  return (
    <>
      {/* Load the Sanity Bridge */}
      <script src={BRIDGE_SCRIPT} async type="module" />
      {children}
    </>
  );
}
