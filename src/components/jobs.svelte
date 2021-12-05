<script lang="ts">
import { browser } from "$app/env";

  import { getAllJobs, getJob, updateJob } from "$lib/api";
  import { jobs } from "$lib/stores";
  import Job from "./job.svelte";
  import type JobClass from "../classes/job";
  import { onMount } from "svelte";
  import Modal from '../components/modal.svelte';
  import Input from "./input.svelte";

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

  let modalJob: JobClass | null = null;
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
        <Job job={job} on:click={()=>modalJob=job} />
    {/each}
  </tbody>
</table>

<!-- A modal to view and edit the job
  A user can edit the following:
    - URL
    - Status
    - automatic
    - final_location
    - Handler
    - Error
    - IP
    - hostname
  If automatic is true, everything is readonly except for automatic
-->
<Modal
  open={!!modalJob}
>
<div class="max-w-7xl w-full bg-white dark:bg-gray-800">
  <header class="px-2 py-4 border-b flex justify-between">
    <h2 class="text-4xl">Job #{modalJob.id}</h2>
    <!-- Close button -->
    <button
      class="text-gray-600 dark:text-gray-400"
      on:click={() => modalJob = null}
    >
      Close
    </button>
  </header>
    <!-- Inputs -->
    <div class="px-2 py-4 flex flex-wrap">
      <!-- URL -->
      <Input
        label="URL"
        bind:value={modalJob.url}
        disabled={modalJob.automatic}
      />
      <!-- Final location -->
      <Input
        label="Final Location"
        bind:value={modalJob.final_location}
        disabled={modalJob.automatic}
      />
      <!-- Handler -->
      <Input
        label="Handler"
        bind:value={modalJob.handler}
        disabled={modalJob.automatic}
      />
      <!-- Status -->
      <Input
        label="Status"
        bind:value={modalJob.status}
        disabled={modalJob.automatic}
      />
      <!-- Error -->
      <Input
        label="Error"
        bind:value={modalJob.error}
        disabled={modalJob.automatic}
      />
      <!-- IP -->
      <Input
        label="IP"
        bind:value={modalJob.ip}
        disabled={modalJob.automatic}
      />
      <!-- Hostname -->
      <Input
        label="Hostname"
        bind:value={modalJob.hostname}
        disabled={modalJob.automatic}
      />
  </div>
  <!-- Actions -->
  <div class="px-2 py-4 flex justify-around w-full">
    <!-- Automatic toggle button -->
    <div>
    <label 
      for="automatic"
      class="flex items-center cursor-pointer"
    >
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="automatic" bind:checked={modalJob.automatic} on:change={async ()=>{
          if (modalJob.automatic) modalJob = await getJob(modalJob.id);
        }} type="checkbox" class="sr-only" />
        <!-- line -->
        <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <!-- dot -->
        <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
      </div>
      <!-- label -->
      <div class="ml-3 text-gray-700 dark:text-gray-400">
        Automatic
      </div>
    </label>
    
  </div>
    <!-- Save Button -->
    <button
      class="text-gray-600 dark:text-gray-400"
      on:click={async () => {
        await updateJob(modalJob);
        modalJob = null;
      }}
    >Save</button>
  </div>
</Modal>

<style>
  th {
    text-align: left;
  }
  input:checked ~ .dot {
    transform: translateX(100%);
    @apply bg-purple-500;
  }
</style>