<script lang="ts">
  export let label: string;
  export let value: string;
  export let disabled: boolean;
</script>

<div class="w-1/2 px-1">
  <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" for={label}>
    {label}
  </label>
  <input
    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 disabled:cursor-not-allowed"
    type="text"
    disabled={disabled}
    bind:value
    on:input={(e) => console.log(e.target)}
  />
</div>