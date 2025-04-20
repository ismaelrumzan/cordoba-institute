import { Banner } from "@payloadcms/ui/elements/Banner";
import React from "react";

import { SeedButton } from "./SeedButton";
import "./index.scss";
import { querySeed } from "@/lib/queries/modules";
import { Module } from "@/payload-types";

const baseClass = "before-dashboard";

const BeforeDashboard: React.FC = async () => {
  const { modules } = await querySeed();
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your dashboard!</h4>
      </Banner>
      <div className={`${baseClass}__quiz`}>
        <h3>Quizzes</h3>
        <SeedButton modules={modules as Module[]} />
      </div>
    </div>
  );
};

export default BeforeDashboard;
