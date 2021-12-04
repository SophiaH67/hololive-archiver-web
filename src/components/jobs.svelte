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

  onMount(() => {
    if (!browser) return;
    updateJobs();
    setInterval(updateJobs, 5000);
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

<div class="bg-white border rounded-none container min-w-max mx-auto shadow-md  mb-2">
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
      <tr>
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
</div>
<style>
  th {
    text-align: left;
    @apply border font-sans font-normal text-gray-800 px-4 py-2;
  }
</style>