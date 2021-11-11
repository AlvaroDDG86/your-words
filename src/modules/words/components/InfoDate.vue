<template>
  <div>
    <button
      v-popover.right="{ name: `infoDate${id}` }"
      class="text-blue-900 bg-white font-extrabold text-lg rounded px-2 py-1"
    >
      <v-icon name="user-clock" />
    </button>
    <popover :name="`infoDate${id}`" event="click" :width="300">
      <div class="text-black text-xs">
        <span class="font-bold">Last updated:</span>
        {{ updated.toDate().toLocaleString() }}
      </div>
      <div class="text-black text-xs">
        <span class="font-bold">Created:</span>
        {{ created.toDate().toLocaleString() }}
      </div>
    </popover>
  </div>
</template>
<script>
export default {
  name: "InfoDate",
  props: {
    created: {
      type: Object,
      require: true,
    },
    updated: {
      type: Object,
      require: true,
    },
    id: {
      type: Number,
      require: true,
    },
  },
};
</script>
