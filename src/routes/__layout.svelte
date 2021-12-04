<script>
  import Bar from "../components/bar.svelte";
  import { settings } from "$lib/stores"

  const htmlElement = document.getElementsByTagName("html")[0];
  settings.subscribe(settings => {
    if (settings.darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  });

  import "../app.css";
</script>

<div class="bg-white dark:bg-gray-900 min-h-screen">
  <Bar />
  <slot />
</div>