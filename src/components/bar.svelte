<script lang="ts">
  import { settings } from '$lib/stores'
</script>

<nav class="bg-purple-500 h-12 mb-2 shadow-lg flex px-4 justify-between items-center">
  <h2 class="text-white text-xl my-auto whitespace-nowrap">Hololive Archiver</h2>
  <div>
    <a href="/" class="text-white text-sm">JOBS</a>
    <a href="/" class="text-white text-sm">OPTIONS</a>
    <button
      class="text-white text-sm"
      on:click={() => {
        settings.update(settings => ({
          ...settings,
          darkMode: !settings.darkMode,
        }))
      }}
      >D</button>
  </div>
</nav>