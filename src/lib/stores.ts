import { writable } from "svelte/store";
import { persist, localStorage } from "@macfja/svelte-persistent-store";

export const jobs = writable([]);
export const settings = persist(writable({}), localStorage(), "settings");
