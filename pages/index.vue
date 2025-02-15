<template>
  <UContainer class="py-6">
    <!-- Переключатель темы -->
    <div class="flex justify-end mb-6">
      <UButton :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" color="gray" variant="ghost"
        @click="toggleTheme" />
    </div>

    <UCard class="p-4">
      <!-- Заголовок и информация о пользователе -->
      <!-- Данные из Telegram -->
      <div class="mb-6">
        <h2 class="text-xl font-bold mb-4">Данные из Telegram</h2>
        <UCard class="p-4">
          <p v-if="userData" class="text-gray-500 dark:text-gray-400">
            Имя: {{ userData.first_name }}<br>
            Фамилия: {{ userData.last_name }}<br>
            Юзернейм: {{ userData.username }}<br>
            Язык: {{ userData.language_code }}
          </p>
          <p v-else class="text-gray-500 dark:text-gray-400">
            Данные не загружены.
          </p>
        </UCard>
      </div>

      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold">Goose Coder</h1>
        <p class="text-gray-600 dark:text-gray-300 mt-2">Ivan</p>
        <p class="text-gray-500 dark:text-gray-400">Member since Jan 2021</p>
      </div>

      <!-- Информация о навыках и локации -->
      <div class="flex justify-center space-x-2 mb-6">
        <UTag color="primary">Fullstack</UTag>
        <UTag color="green">Middle</UTag>
        <UTag color="blue">Moscow</UTag>
      </div>

      <!-- Кнопка "Пройди тест на свой уровень" -->
      <div class="text-center mb-6">
        <UButton color="primary" size="lg" class="w-full sm:w-auto">
          Пройди тест на свой уровень
        </UButton>
        <p class="text-gray-500 dark:text-gray-400 mt-2">Fullstack | J.S., Python</p>
      </div>

      <!-- Кнопка "Начать" -->
      <div class="text-center mb-6">
        <NuxtLink to="quiz">
          <UButton color="green" size="lg" class="w-full sm:w-auto">
            Начать
          </UButton>
        </NuxtLink>
      </div>

      <!-- Список подходящих вакансий -->
      <div class="mb-6">
        <h2 class="text-xl font-bold mb-4">Подходящие вакансии</h2>
        <div class="space-y-4">
          <!-- Вакансия 1 -->
          <UCard class="p-4">
            <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div>
                <h3 class="font-bold">Frontend Developer (Vue3)</h3>
                <p class="text-gray-500 dark:text-gray-400">0OO KOUIEJTEK</p>
                <p class="text-gray-500 dark:text-gray-400">Всего 10 откликов</p>
              </div>
              <UButton color="primary" class="w-full sm:w-auto">Откликнуться</UButton>
            </div>
          </UCard>

          <!-- Вакансия 2 -->
          <UCard class="p-4">
            <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div>
                <h3 class="font-bold">Fullstack Developer (Vue3 + Nuxt)</h3>
                <p class="text-gray-500 dark:text-gray-400">Сбербанк</p>
                <p class="text-gray-500 dark:text-gray-400">Выложили вчера</p>
              </div>
              <UButton color="primary" class="w-full sm:w-auto">Откликнуться</UButton>
            </div>
          </UCard>

          <!-- Вакансия 3 -->
          <UCard class="p-4">
            <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div>
                <h3 class="font-bold">Middle Frontend Developer</h3>
                <p class="text-gray-500 dark:text-gray-400">Тонkeeper</p>
                <p class="text-gray-500 dark:text-gray-400">Подходит по навыкам</p>
              </div>
              <UButton color="primary" class="w-full sm:w-auto">Откликнуться</UButton>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Кнопки "Прокачать ХАРДЫ" и "Прокачать СОФТЫ" -->
      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <UButton color="blue" class="w-full sm:w-auto">Прокачать ХАРДЫ</UButton>
        <UButton color="purple" class="w-full sm:w-auto">Прокачать СОФТЫ</UButton>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WebApp from '@twa-dev/sdk'

// Инициализация Telegram Web App
// init()

// Данные пользователя
const userData = ref(null)

// Получаем данные пользователя из Telegram
onMounted(() => {
  if (WebApp.initDataUnsafe.user) {
    userData.value = WebApp.initDataUnsafe.user
  }
})

// Используем хук useColorMode из @nuxtjs/color-mode
const colorMode = useColorMode()

// Вычисляемое свойство для проверки текущей темы
const isDark = computed(() => colorMode.value === 'dark')

// Функция для переключения темы
const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<style scoped>
/* Добавь кастомные стили, если нужно */
</style>