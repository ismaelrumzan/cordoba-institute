import { Banner } from "@payloadcms/ui/elements/Banner";
import React from "react";

import { SeedButton } from "./SeedButton";
import "./index.scss";

const baseClass = "before-dashboard";

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your dashboard!</h4>
      </Banner>
      <h3>Admin Tasks</h3>
      <ul className={`${baseClass}__instructions`}>
        <li>
          <SeedButton />
          {
            " with a content that you need to manually pass in the script data first"
          }
        </li>
      </ul>
    </div>
  );
};

export default BeforeDashboard;
