<script lang="ts">
  import type Job from "../classes/job";

  export let job: Job;
</script>

<tr class="h-12 border font-sans text-gray-900 bg-white hover:bg-gray-100">
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
