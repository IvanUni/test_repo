<template>


  <div className="px-4 mt-6 flex justify-between gap-2">
    <div className="bg-[#2b5a90] rounded-lg px-4 py-2 w-full relative">
      <div className="dot"></div>
      <img src="~/assets/images/daily-reward.png" alt="Daily Reward" className="mx-auto w-12 h-12" />
      <p className="text-[10px] text-center text-white mt-1">Ежедневная награда</p>
      <p className="text-[10px] font-medium text-center text-gray-400 mt-2">100</p>
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

  <div className="px-4 mt-4 flex justify-center">
    <div className="px-4 py-2 flex items-center space-x-2">
      <img src="~/assets/images/dollar-coin.png" alt="Dollar Coin" className="w-10 h-10" />
      <p className="text-4xl text-white">{{ Math.floor(coins).toLocaleString() }}</p>
    </div>
  </div>

  <div className="px-4 mt-4 flex justify-center">
    <div className="w-80 h-80 p-8 rounded-full circle-outer" @touchstart="coinTap" @mousedown="coinTap">
      <div className="w-full h-full rounded-full circle-inner">
        <img src="~/assets/images/microshish.png" alt="Main Character" className="w-full h-full main-character" />
      </div>
    </div>
  </div>


  <transition appear name="float" v-for="click in clicks" :key="click.id">
    <div className="absolute text-5xl opacity-0 font-bold text-white pointer-events-none" :style="{
        top: `${click.y - 42}px`,
        left: `${click.x - 28}px`,
      }
        ">
      +1
    </div>
  </transition>

</template>

<script setup lang="ts">
import { ref } from 'vue';

let levelNames = ref(['Микрошиш', 'Минишиш', 'Малышиш', 'Среднешиш', 'Большиш', 'Шишка', 'Килошиш', 'Мегашиш', 'Гигашиш', 'Шишка-Чемпион'])
let levelIndex = ref(2);
let profitPerHour = ref(5630);
let coins = ref(0);
let tapValue = ref(1);
let clicks: any = ref([])

function coinTap(evt: Event | any) {
  console.log(evt)

  handleCardClick(evt)
  coins.value += tapValue.value;
  let id = Date.now()
  if (evt.touches) {
    for (let i = 0; i < evt.touches.length; i++) {
      clicks.value.push({ id: id, x: evt.touches[i].x, y: evt.touches[i].x })
      id = Date.now()
    }
    // evt.touches.forEach(touch => {
    //   clicks.value.push({ id: id, x: touch.pageX, y: touch.pageY })
    // });

  } else {
    clicks.value.push({ id: id, x: evt.pageX, y: evt.pageY })
  }
  setTimeout(() => { clicks.value = clicks.value.filter(click => click.id !== id) }, 2000)
}

// // Разобраться с хуками анимаций. Хуки завершения анимки не работают. Но так вроде норм работает. 
// function onAfterEnter(el) {
//   // el.remove() // работает. хз как
//   // console.log("el.remove")
//   // Вот эта строчка вообще ничем не отличается от pop или shift. vue всё равно как хочет удаляет из дома. 
//   //clicks.value = clicks.value.filter(click => click.id !== id)
// }

// function onLeave(el, done) {


// }

const handleCardClick = (e: Event) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;

  setTimeout(() => {
    card.style.transform = '';
  }, 100);


};

setInterval(() => { coins.value += profitPerHour.value / 60 / 60 }, 1000)

</script>

<style>
/* * {
  outline: 5px solid rgb(255, 0, 0);
} */
.progress-gradient {
  /* background: linear-gradient(to right, #90ef89, #d692dd, #726edd); */
  background: linear-gradient(to right, #e6a544, #92a5dd, #5193ff);
}

.top-glow {
  box-shadow: 0 -26px 20px rgba(243, 145, 47, 0.3);
}

/* Define the keyframes for the blinking animation */
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* Apply the animation to the dot class */
.dot {
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  animation: blink 1s infinite;
}

.circle-outer {
  background: linear-gradient(to bottom, #32beff, rgb(65 80 100));
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 90vw;
  max-width: 360px;
  max-height: 360px;
}

.circle-inner {
  background: radial-gradient(circle, #0086ff, #3e4761);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.main-character {
  pointer-events: none;
  user-select: none;
}

.float-enter-active {
  animation: float-in 1s ease;
}

.float-leave-active {
  animation: float-in 0.5s ease;
}

.main-card {
  background-image: url("~/assets/images/intro-inter-progressive.jpg");
  background-position: center;

}

@keyframes float-in {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
}
</style>