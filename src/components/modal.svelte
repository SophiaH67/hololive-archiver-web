<script lang="ts">
  export let open;
</script>

{#if open}
  <div class="w-screen h-screen fixed bg-opacity-40 left-0 top-0 bg-black z-20 flex justify-center items-center">
    <slot />
  </div>
{/if}
