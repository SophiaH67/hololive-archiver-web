<script context="module">
  export function load({ error, status }) {
      return {
          props: {
              title: `${status}: ${error.message}`
          }
      };
  }
</script>

<script>
  export let title;
</script>

<h1 class="text-xl mx-auto max-w-min whitespace-nowrap">{title}</h1>