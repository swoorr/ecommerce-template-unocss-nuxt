<script setup>
const props = defineProps({ img: { required: true }, title: { required: false }, price: { required: false } });
</script>

<template>
  <div class="p-8px border-1px border-color-#eee relative rounded border-solid shadow">
    <div class="fav-btn right-1rem top-1rem group absolute">
      <button
        class="border-color-#eee h-40px w-40px text-18px flex cursor-pointer items-center justify-center rounded-full border-solid bg-transparent text-center bg-white"
        hover="!bg-gray-400 !color-white"
      >
        <span class="iconify group-hover:text-white" data-icon="mdi:cards-heart-outline"></span>
      </button>
    </div>

    <div class="img align-center h-30 md:h-40 xl:h-250px mb-8 flex items-center justify-center overflow-hidden">
      <img :src="props.img" alt="" class="w-90%" />
    </div>

   <div class="flex flex-col justify-between h-18 mb-2">
    <div class="title">
      <h3 class="lg:text-16px font-300 text-sm">{{ props.title || "Distressed Tote Leather Bag Leather Bag" }}</h3>
    </div>

    <div class="p-info mt-4">
      <span class="price text-16px font-500"> {{ props.price || "216,27 $" }} </span>
    </div>
   </div>
  </div>
</template>
