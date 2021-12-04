<script lang="ts">
import { browser } from "$app/env";

  import { getAllJobs } from "$lib/api";
  import { jobs } from "$lib/stores";
  import Job from "./job.svelte";
  import { onMount } from "svelte";

  const updateJobs = async () => {
    const newJobs = await getAllJobs();
    jobs.set(newJobs);
  };

  let interval;

  onMount(() => {
    if (!browser || interval) return;
    updateJobs();
    interval = setInterval(updateJobs, 5000);
  });

  let filterText = "";

  $: filteredJobs = $jobs.filter(
    (job) =>
      job.url.toLowerCase().includes(filterText.toLowerCase()) ||
      job.status.toLowerCase().includes(filterText.toLowerCase()) ||
      job.id.toString() === filterText
  );
  $: sortedJobs = filteredJobs.sort((a, b) => b.id - a.id);
</script>

<!-- Toolbar -->
<header>
  <input
    type="text"
    placeholder="Search"
    class="border-none bg-transparent outline-none w-full m-1 p-0.5"
    bind:value={filterText}
  />
    
</header>
<!-- Jobs -->
<table class="w-full border-collapse">
  <thead>
    <tr class="border font-sans text-gray-800 font-normal px-4 py-2 dark:border-gray-700 dark:text-gray-300">
      <th class="sm:pl-4">#</th>
      <th>URL</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {#each sortedJobs as job}
        <Job job={job} />
    {/each}
  </tbody>
</table>

<style>
  th {
    text-align: left;
  }
</style>