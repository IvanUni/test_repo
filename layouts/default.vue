<script setup>
useHead({
  script: [
    { src: '', defer: true }
  ]
})
let levelNames = ref(['Микрошиш', 'Минишиш', 'Малышиш', 'Среднешиш', 'Большиш', 'Шишка', 'Килошиш', 'Мегашиш', 'Гигашиш', 'Шишка-Чемпион'])
let levelIndex = ref(2);
let profitPerHour = ref(5630);

</script>
<template>

  <ClientOnly>
    <main class="bg-[#000] flex justify-center overflow-hidden">
      <div className="w-full bg-[#4488bd] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#97a3b6]">
              <!-- <Hamster size="24" className="text-[#d4d4d4]" /> -->
            </div>
            <div>
              <p className="text-sm">Player</p>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4 mt-1">
            <div className="flex items-center w-1/3">
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-sm">{{ levelNames[levelIndex] }}</p>
                  <p className="text-sm">{{ levelIndex + 1 }} <span className="text-[#95908a]">/
                      {{ levelNames.length }}</span>
                  </p>
                </div>
                <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
                  <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                    <div className="progress-gradient h-2 rounded-full"
                      :style="{ 'width': `${(levelIndex + 1) / levelNames.length * 100}%` }"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
              <img src="~/assets/images/logo.webp" alt="Exchange" className="w-8 h-8" />
              <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
              <div className="flex-1 text-center">
                <p className="text-xs text-[#fffefc] font-medium">Добыча в час</p>
                <div className="flex items-center justify-center space-x-1">
                  <img src="~/assets/images/dollar-coin.png" alt="Dollar Coin" className="w-[18px] h-[18px]" />
                  <p className="text-sm">{{ profitPerHour }}</p>
                  <!-- <Info size={20} className="text-[#43433b]" /> -->
                </div>
              </div>
              <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
              <!-- <Settings className="text-white" /> -->
            </div>
          </div>
        </div>

        <div
          className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0 main-card border-t-2 border-sky-600">
          <div className="absolute top-[0px] left-0 right-0 bottom-0 bg-[#536178bb] rounded-t-[46px]">


            <slot />
          </div>
        </div>

      </div>

      <!--  Bottom fixed div -->
      <div
        className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#2b5a90] flex justify-around items-center z-50 rounded-3xl text-xs">
        <div className="text-center text-[#fffefc] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
          <NuxtLink to="/"><p className="mt-1">Добыча</p></NuxtLink>
         
        </div>
        <div className="text-center text-[#fffefc] w-1/5">

          <p className="mt-1">Профиль</p>
        </div>
        <div className="text-center text-[#fffefc] w-1/5">

          <p className="mt-1">Друзья</p>
        </div>
        <div className="text-center text-[#fffefc] w-1/5">

          <p className="mt-1">
            <NuxtLink to="/earn">Задания</NuxtLink>
          </p>
        </div>
        <div className="text-center text-[#fffefc] w-1/5">
          <img src="~/assets/images/shishCoin.png" alt="Airdrop" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Магазин</p>
        </div>
      </div>

    </main>


  </ClientOnly>

</template>



<style></style>