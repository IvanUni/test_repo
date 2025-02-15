<template>
 <UModal v-model="isResultModalOpen" class="custom-modal">
  <UCard class="p-4">
    <!-- Заголовок -->
    <h2 class="text-2xl font-bold text-center mb-4">{{ userLevel.title }}</h2>
    <!-- Описание уровня -->
    <p class="text-gray-500 text-center mb-4">{{ userLevel.description }}</p>
    <!-- Картинка -->
    <img
      src="https://placehold.co/300x200"
      alt="Гусь"
      class="mx-auto mb-4 w-full max-w-[300px]"
    />
    <!-- Результат -->
    <p class="text-gray-500 text-center mb-4">
      Ты ответил правильно на {{ correctAnswers }} из {{ questions.length }} вопросов.
    </p>

    <!-- Кнопки -->
    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <UButton color="primary" icon="i-heroicons-home" class="w-full sm:w-auto" @click="goToHome">
        На главную
      </UButton>
      <UButton
        :disabled="isRetryDisabled"
        icon="i-heroicons-refresh"
        class="w-full sm:w-auto"
        @click="restartQuiz"
      >
        Перепройти тест (через {{ retryTimer }})
      </UButton>
    </div>
  </UCard>
</UModal>
  <UContainer class="py-6">
    <UCard class="p-4">
      <h1 class="text-3xl font-bold text-center mb-6">Тест на уровень знаний</h1>

      <!-- Прогресс -->
      <div class="mb-6">
        <p class="text-gray-500">
          Вопрос {{ currentQuestion + 1 }} из {{ questions.length }}
        </p>
        <UProgress :value="progress" class="mt-2" />
      </div>

      <!-- Вопрос -->
      <div v-if="currentQuestion < questions.length" class="mb-6">
        <h2 class="text-xl font-bold mb-4">
          {{ questions[currentQuestion].question }}
        </h2>
        <div class="space-y-2">
          <UButton v-for="(option, index) in questions[currentQuestion].options" :key="index" color="gray"
            variant="outline" class="w-full text-left" @click="selectAnswer(option)">
            {{ option }}
          </UButton>
        </div>
      </div>

      <!-- Результат -->
      <div v-else class="text-center">
        <h2 class="text-2xl font-bold mb-4">Результат</h2>
        <p class="text-gray-500">
          Вы ответили правильно на {{ correctAnswers }} из {{ questions.length }} вопросов.
        </p>
        <UButton color="primary" class="mt-4" @click="restartQuiz">
          Пройти тест снова
        </UButton>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import questions from '~/assets/questions.json'

// Состояние
const currentQuestion = ref(0)
const correctAnswers = ref(0)
const selectedAnswer = ref(null)
const isResultModalOpen = ref(false)
const userLevel = ref(null)
const retryTimer = ref("7 дней")
const isRetryDisabled = ref(true)

// Уровни
const levels = [
  { level: 1, title: "Гусёнок-джун", description: "Ты только начинаешь свой путь! Учись, и скоро станешь настоящим гусь-кодером!" },
  { level: 2, title: "Юный гусь", description: "Ты уже кое-что знаешь, но впереди ещё много интересного!" },
  { level: 3, title: "Гусь-стажёр", description: "Ты на правильном пути! Продолжай в том же духе!" },
  { level: 4, title: "Гусь-новичок", description: "Ты уже неплохо разбираешься, но есть куда расти!" },
  { level: 5, title: "Серьёзный селезень", description: "Ты уже уверенно стоишь на ногах! Так держать!" },
  { level: 6, title: "Гусь-кодер", description: "Ты настоящий профессионал! Продолжай развиваться!" },
  { level: 7, title: "Гусь-мастер", description: "Ты почти достиг вершины! Осталось совсем чуть-чуть!" },
  { level: 8, title: "Гусь-гуру", description: "Ты настоящий эксперт! Поделись своими знаниями с другими!" },
  { level: 9, title: "Гусь-легенда", description: "Ты легенда! Твой код — это искусство!" },
  { level: 10, title: "Гусь-бог", description: "Ты достиг вершины! Ты — бог кода!" }
]

// Прогресс
const progress = computed(() => {
  return ((currentQuestion.value + 1) / questions.length) * 100
})

// Выбор ответа
const selectAnswer = (option) => {
  selectedAnswer.value = option
  if (option === questions[currentQuestion.value].correctAnswer) {
    correctAnswers.value++
  }
  nextQuestion()
}

// Переход к следующему вопросу
const nextQuestion = () => {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++
  } else {
    userLevel.value = getUserLevel(correctAnswers.value)
    isResultModalOpen.value = true
    startRetryTimer()
  }
}

// Определение уровня
const getUserLevel = (correctAnswers) => {
  const percentage = (correctAnswers / questions.length) * 100
  if (percentage < 10) return levels[0]
  if (percentage < 20) return levels[1]
  if (percentage < 30) return levels[2]
  if (percentage < 40) return levels[3]
  if (percentage < 50) return levels[4]
  if (percentage < 60) return levels[5]
  if (percentage < 70) return levels[6]
  if (percentage < 80) return levels[7]
  if (percentage < 90) return levels[8]
  return levels[9]
}

// Перезапуск теста
const restartQuiz = () => {
  currentQuestion.value = 0
  correctAnswers.value = 0
  selectedAnswer.value = null
  isResultModalOpen.value = false
}

// Переход на главную
const goToHome = () => {
  // Логика перехода на главную
}

// Таймер для перепрохождения теста
const startRetryTimer = () => {
  const endTime = new Date()
  endTime.setDate(endTime.getDate() + 7) // Таймер на одну неделю

  const updateTimer = () => {
    const now = new Date()
    const diff = endTime - now

    if (diff <= 0) {
      isRetryDisabled.value = false
      retryTimer.value = "Готово!"
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    retryTimer.value = `${days}д ${hours}ч ${minutes}м ${seconds}с`
    setTimeout(updateTimer, 1000)
  }

  updateTimer()
}
</script>

<style scoped>
.custom-modal {
  max-width: 90%;
  margin: 0 auto;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>