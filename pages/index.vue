<template>
  <div>
    <div class="container mx-auto">
      <div class="mt-8 grid grid-cols-2 gap-4 p-4 lg:grid-cols-5 lg:p-0">
        <ShopCard img="https://snipboard.io/gMJFi5.jpg" />
        <ShopCard img="https://snipboard.io/e1T3fJ.jpg" title="Womens Cognac Leather Elastic Straps" price="100 $" />
        <ShopCard img="https://snipboard.io/gMJFi5.jpg" />
        <ShopCard img="https://snipboard.io/e1T3fJ.jpg" title="Womens Cognac Leather Elastic Straps" price="100 $" />
        <ShopCard img="https://snipboard.io/ZmahQq.jpg" title="Blue Topaz Bangle 24K Gold Plated Handmade" />
      </div>

      <div class="lg:h-20rem info bg-#5959D9 mt-8 lg:rounded">
        <span class="pl-1rem lg:pl-112px c-white block pt-14 text-xl">
          Yes!
          <br />
          Send me exclusive offers, unique gift ideas, and personalized <br />
          tips for shopping and selling on Commerce.
        </span>

        <div class="flex w-full justify-center py-12">
          <form action="" class="w-75% lg:w-55%">
            <div class="input-group relative w-full">
              <input type="text" class="h-14 w-full rounded-full border-0 pl-8 text-xl" />
              <button
                class="bg-#DD893E hover:bg-orange absolute -right-6 top-2 flex h-10 cursor-pointer flex-row items-center gap-4 rounded-full border-0 px-8 text-white"
              >
                <span>Subscribe</span>
                <span class="iconify" data-icon="mdi:arrow-right"></span>
              </button>
            </div>
            <div class="mt-2 w-full text-center">
              <a href="" class="text-white">First order only. You’re ready?</a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="footer-bar-divider lg:h-48px bg-#F5F6F8 mb-4 mt-4 flex w-full flex-row items-center justify-center">
      <span class="p-4 text-center"> Commerce, is powered by 100% renewable electricity. </span>
    </div>
  </div>
</template>
