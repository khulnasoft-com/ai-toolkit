<script lang="ts">
  import { Chat } from '../chat.svelte.js';
  import { createAIContext } from '../context-provider.js';

  const { id }: { id?: string } = $props();

  createAIContext();
  const chat1 = new Chat({ id });
  const chat2 = new Chat({ id });

  export { chat1, chat2 };
</script>
