<script>
  import Bar from "../components/bar.svelte";
  import { settings } from "$lib/stores"

  settings.subscribe(settings => {
    if (!browser) return
    const htmlElement = document.getElementsByTagName("html")[0];
    if (settings.darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  });
  

  import "../app.css";
import { browser } from "$app/env";
</script>

<div class="bg-white dark:bg-gray-900 min-h-screen pb-2">
  <Bar />
  <div class="con bg-white border rounded-none container min-w-max mx-auto shadow-md text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
    <slot />
  </div>
</div>

<style>
  .con {
    max-width: 95%;
  }
</style>