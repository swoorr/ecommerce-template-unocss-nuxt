<script setup></script>

<template>
  <div class="bg-#FEF9F4 h-16 lg:h-32 w-full">
    <div class="container mx-auto relative flex flex-col gap-4 pt-6">
      <div class="topbar">
        <span class="text-primary pl-4 text-xl lg:pl-0">E-Commerce</span>
      </div>
      <div class="menubar hidden pt-4 lg:block">
        <ul class="flex list-none flex-row justify-start gap-6">
          <li class="text-center">
            <NuxtLink class="cursor-pointer" hover="text-danger border-0px border-b-4px border-solid border-red"
              >Jewelry & Accessories</NuxtLink
            >
          </li>
          <li class="text-center">
            <NuxtLink class="cursor-pointer" hover="text-danger border-0px border-b-4px border-solid border-red">Clothing & Shoes</NuxtLink>
          </li>
          <li class="text-center">
            <NuxtLink class="cursor-pointer" hover="text-danger border-0px border-b-4px border-solid border-red">Home & Living</NuxtLink>
          </li>
          <li class="text-center">
            <NuxtLink class="cursor-pointer" hover="text-danger border-0px border-b-4px border-solid border-red">Wedding & Party</NuxtLink>
          </li>
          <li class="text-center">
            <NuxtLink class="cursor-pointer" hover="text-danger border-0px border-b-4px border-solid border-red"
              >Art & Collectibles</NuxtLink
            >
          </li>
          <li class="text-center">
            <NuxtLink class="cursor-pointer" hover="text-danger border-0px border-b-4px border-solid border-red"
              >Craft Supplies & Tools</NuxtLink
            >
          </li>
        </ul>
      </div>
      <button class="cursor-pointer block lg:hidden absolute right-4 top-3 rounded border-0 primary h-10 w-10 text-white text-xl flex flex-row items-center justify-center" hover="!bg-orange/75">
        <span class="iconify" data-icon="mdi:menu"></span>
      </button>
    </div>
  </div>
</template>
