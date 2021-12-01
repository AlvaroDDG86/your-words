<template>
  <section class="bg-animated">
    <h1 class="text-white text-2xl md:text-7xl font-bold py-4 md:py-8 xl:py-10">
      About us
    </h1>
    <div class="flex justify-center items-center">
      <img class="w-full md:w-2/5 z-50" :src="require('@/assets/hero.png')" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div
        class="
          text-3xl
          flex
          justify-center
          items-center
          bg-transparent
          text-white
          py-4
          md:py-0
        "
      >
        Why?
      </div>
      <p class="text-justify bg-white p-2 md:p-8">
        This application was born by the <strong>necessity</strong> of saving
        all the new words you are learning in a unique place. It doesn't matter
        if you are on your way to work, studying at a library, or just listening
        a podcast on spotify, once you want to save a new word, open the app,
        seek the work, type your examples, and if you don't know the meaning,
        just click the button and viola!.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <p class="text-justify order-2 md:order-1 bg-white p-2 md:p-8">
        You can use the application since you signup, this is an alive
        application, I'm always trying to improve its features.
      </p>
      <div
        class="
          text-3xl
          flex
          justify-center
          items-center
          order-1
          md:order-2
          text-white
          py-4
          md:py-0
        "
      >
        When?
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div
        class="
          text-white text-3xl
          flex
          justify-center
          items-center
          py-4
          md:py-0
        "
      >
        Where?
      </div>
      <p class="text-justify bg-white p-2 md:p-8">
        This is a web application, you only need a browser and Internet, if you
        use the application from a mobile/smartphone, you can install it, and
        the look and feel would be the same as a native app. You can search and
        save your word in your laptop whilst you are studying, and review the
        last word whilst chilling on the sofa.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <p class="text-justify order-2 md:order-1 bg-white p-2 md:p-8">
        I'm Álvaro, I work as a Software Engineer in Spain, I'm a learning
        English too, and I really love it.
      </p>
      <div
        class="
          text-3xl
          flex
          justify-center
          items-center
          order-1
          md:order-2
          text-white
          py-4
          md:py-0
        "
      >
        Who?
      </div>
    </div>
  </section>
</template>
