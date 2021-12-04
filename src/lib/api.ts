import Job from "../classes/job";
import type BaseJob from "../classes/baseJob";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const getAllJobs = async () => {
  const response: Job[] = await (await fetch(`${API_URL}/job`)).json();
  return response.map((job) => new Job(job));
};

export const getJob = async (id: string) => {
  const response: Job = await (await fetch(`${API_URL}/job/${id}`)).json();
  return new Job(response);
};

export const createJob = async (job: BaseJob) => {
  const response: Job = await (
    await fetch(`${API_URL}/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    })
  ).json();
  return new Job(response);
};

export const updateJob = async (job: Job) => {
  const response: Job = await (
    await fetch(`${API_URL}/job/${job.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    })
  ).json();
  return new Job(response);
};
