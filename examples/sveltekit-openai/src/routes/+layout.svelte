<script lang="ts">
  import { createAIContext } from '@ai-toolkit/svelte';
  import '../app.css';
  const { children } = $props();

  createAIContext();
</script>

{@render children()}
