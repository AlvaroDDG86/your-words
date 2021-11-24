<template>
  <footer class="bg-brand">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 flex justify-center">
          <img class="max-h-20" src="@/assets/Logo_white2.png" alt="Logo" />
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-200 font-bold md:mb-6">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                @click="$router.push('/landing/faqs')"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >FAQ</a
              >
            </li>
            <!-- <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Help</a
              >
            </li> -->
            <!-- <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Support</a
              >
            </li> -->
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-200 font-bold md:mb-6">Legal</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Terms</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Privacy</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-200 font-bold md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li
              class="
                mt-2
                inline-block
                mr-2
                md:block md:mr-0
                cursor-pointer cursor-pointer
              "
            >
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Facebook</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/%C3%A1lvaro-de-dios-garc%C3%ADa/"
                target="_blank"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Linkedin</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 cursor-pointer">
              <a
                href="https://twitter.com/AlvaroDDG86/"
                target="_blank"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Twitter</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-200 font-bold md:mb-6 cursor-pointer">
            Company
          </p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Official Blog</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 cursor-pointer">
              <a
                href="#"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >About Us</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 cursor-pointer">
              <a
                href="mailto:alvarod5d8os@gmail.com"
                class="
                  no-underline
                  hover:underline
                  text-gray-200
                  hover:text-red-600
                "
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <a
      href="https://www.freepik.com/free-photos-vectors/background"
      class="text-gray-200 font-bold"
      >Background vector created by freepik - www.freepik.com</a
    >
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
