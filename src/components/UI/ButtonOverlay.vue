<template>
  <!-- transparent layer -->
  <div class="absolute inset-0 flex justify-end items-end p-4">
    <!-- container for buttons -->
    <div class="flex flex-col items-end space-y-4 mb-10">
      <!-- C button -->
      <button
        class="rounded-full bg-blue-500 opacity-70"
        :class="[
          actionButton.size.height,
          actionButton.size.width,
          actionButton.rounded.true,
        ]"
      >
        C
      </button>
      <div class="flex space-x-4">
        <!-- A button -->
        <button
          class="bg-blue-500 opacity-70"
          :class="[
            actionButton.size.height,
            actionButton.size.width,
            actionButton.rounded.true,
          ]"
        >
          A
        </button>
        <!-- B button -->
        <button
          class="w-24 h-16 rounded-full bg-blue-500 opacity-70"
          :class="[
            actionButton.size.height,
            actionButton.size.width,
            actionButton.rounded.true,
          ]"
        >
          B
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

//consts
const x = 24;

//action button
const actionButton = {
  size: {
    width: `w-${x}`,
    height: `h-${x}`,
  },
  rounded: {
    true: "rounded-full",
    false: "rounded-none",
  },
};
</script>
