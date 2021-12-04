<script lang="ts">
  import type Job from "../classes/job";

  export let job: Job;
</script>

<tr class="h-12 border border-white font-sans text-gray-900 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
  <td class="sm:pl-4">
    {job.id}
  </td>
  <td>
    {job.url}
  </td>
  <td>
    {job.status}
  </td>
</tr>
