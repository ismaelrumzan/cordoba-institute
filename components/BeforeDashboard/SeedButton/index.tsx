"use client";

import React, { Fragment, useCallback, useState } from "react";
import { toast } from "@payloadcms/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lesson, Module } from "@/payload-types";

import "./index.scss";

const SuccessMessage: React.FC = () => (
  <div>
    Database seeded! You can now{" "}
    <a target="_blank" href="/">
      visit your website
    </a>
  </div>
);

interface SeedButtonProps {
  modules: Module[];
}

export const SeedButton: React.FC<SeedButtonProps> = ({ modules }) => {
  const [loading, setLoading] = useState(false);
  const [seeded, setSeeded] = useState(false);
  const [error, setError] = useState(null);
  const [selectedModule, setSelectedModule] = useState<string>("");
  const [selectedLesson, setSelectedLesson] = useState<string>("");

  const handleClick = useCallback(
    async (filename: string, e: React.MouseEvent) => {
      e.preventDefault();

      if (loading) {
        toast.info("Seeding already in progress.");
        return;
      }
      if (error) {
        toast.error(`An error occurred, please refresh and try again.`);
        return;
      }

      setLoading(true);

      try {
        toast.promise(
          new Promise((resolve, reject) => {
            try {
              fetch(`/next/seed?file=${filename}`, {
                method: "POST",
                credentials: "include",
              })
                .then((res) => {
                  if (res.ok) {
                    resolve(true);
                    setSeeded(true);
                    setLoading(false);
                  } else {
                    reject("An error occurred while seeding.");
                  }
                })
                .catch((error) => {
                  reject(error);
                });
            } catch (error) {
              reject(error);
            }
          }),
          {
            loading: "Seeding with data....",
            success: <SuccessMessage />,
            error: "An error occurred while seeding.",
          }
        );
      } catch (err: any) {
        setError(err);
      }
    },
    [loading, seeded, error]
  );

  let message = "";
  if (loading) message = " (seeding...)";
  if (seeded) message = " (done!)";
  if (error) message = ` (error: ${error})`;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModule(e.target.value);
    setSelectedLesson("");
  };

  const handleChangeLesson = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLesson(e.target.value);
  };

  return (
    <Fragment>
      <div>
        <label htmlFor="mod-select">
          <h4>Select a module & lesson</h4>
        </label>
      </div>
      <div className="dropdown">
        <select id="mod-select" value={selectedModule} onChange={handleChange}>
          <option value="">-- Modules --</option>
          {modules.map((item) => (
            <option value={item.slug as string}>{item.title}</option>
          ))}
        </select>
        {modules.filter((item) => item.slug === selectedModule).length > 0 && (
          <select
            id="lesson-select"
            value={selectedLesson}
            onChange={handleChangeLesson}>
            <option value="">-- Lessons --</option>
            {modules
              .filter((item) => item.slug === selectedModule)[0]
              .lessons?.map((item) => {
                const thisLesson = item as Lesson;
                return (
                  <option
                    value={`${thisLesson.slug}-${thisLesson.level}` as string}>
                    {thisLesson.title} | {thisLesson.level}
                  </option>
                );
              })}
          </select>
        )}
      </div>
      {selectedLesson !== "" && (
        <>
          <div>
            Make sure you have the following json file in the <b>public/data</b>{" "}
            folder: {`${selectedLesson}.json`}
          </div>
          <div>
            <button
              className="seedButton"
              onClick={(e) => handleClick(selectedLesson, e)}>
              Seed your database with {`${selectedLesson}.json`}
            </button>
            {message}
          </div>
        </>
      )}
    </Fragment>
  );
};
