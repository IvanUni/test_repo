<template>
  <div className="px-4 mt-6 flex flex-col gap-2">
    <div className="bg-[#2b5a90] rounded-lg px-4 py-2 w-full relative flex gap-5">
      <div className="dot"></div>
      <div class="m-5">
        <p className="text-[18px] text-center text-white mt-1">Подписаться на ютуб канал</p>
        <p className="text-[14px] text-center text-gray-200 align-middle flex items-center justify-center space-x-1">Награда:<span className="text-yellow-300 ms-1">10000</span><img src="~/assets/images/dollar-coin.png" alt="Dollar Coin" class="w-[18px] h-[18px]"></p>
      </div>
      <img src="~/assets/images/daily-reward.png" alt="Daily Reward" className="ms-auto m-5 w-12 h-12" />
    </div>
    <div className="bg-[#2b5a90] rounded-lg px-4 py-2 w-full relative">
      <div className="dot"></div>
      <img src="~/assets/images/daily-cipher.png" alt="Daily Cipher" className="mx-auto w-12 h-12" />
      <p className="text-[10px] text-center text-white mt-1">Задача дня</p>
      <p className="text-[10px] font-medium text-center text-gray-400 mt-2">100</p>
    </div>
    <div className="bg-[#2b5a90] rounded-lg px-4 py-2 w-full relative">
      <div className="dot"></div>
      <img src="~/assets/images/daily-combo.png" alt="Daily Combo" className="mx-auto w-12 h-12" />
      <p className="text-[10px] text-center text-white mt-1">Вопросы дня</p>
      <p className="text-[10px] font-medium text-center text-gray-400 mt-2">100</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>