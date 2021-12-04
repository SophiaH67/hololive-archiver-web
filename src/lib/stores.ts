import { writable } from "svelte/store";
import { persist, localStorage } from "@macfja/svelte-persistent-store";
import type Job from "src/classes/job";

export const jobs = writable([] as Job[]);
export const settings = persist(
  writable({ darkMode: false }),
  localStorage(),
  "settings"
);
