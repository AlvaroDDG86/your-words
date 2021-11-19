<template>
  <div class="py-2 flex flex-col sm:px-6 lg:px-8 min-w-full">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="align-middle inline-block min-w-full">
        <div class="shadow overflow-hidden border-b border-gray-200">
          <table
            class="
              min-w-full
              divide-y divide-gray-200
              dark:bg-gray-700 dark:text-white
            "
          >
            <thead
              class="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-left
                    md:text-center
                    sticky
                    top-0
                  "
                >
                  Word
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-center
                    hidden
                    sm:table-cell
                  "
                >
                  Definition
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-center
                    hidden
                    sm:table-cell
                  "
                >
                  Marked
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-700 divide-y divide-gray-200">
              <tr
                @click="navigate(word.id)"
                :key="`word-${index}`"
                v-for="(word, index) in list"
                class="
                  group
                  hover:bg-gray-300 hover:text-gray-800
                  dark:hover:bg-gray-300 dark:hover:text-gray-800
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div
                    class="
                      flex flex-col
                      items-start
                      md:flex-row md:items-center
                    "
                  >
                    <div class="ml-0 md:ml-4">
                      <div
                        class="
                          text-xl text-blue-700
                          dark:text-blue-300
                          group-hover:text-blue-700
                          uppercase
                          font-bold
                        "
                      >
                        <span
                          :class="{ 'text-green-600': word.favourite }"
                          class="
                            text-sm text-teal-800
                            font-mono
                            bg-teal-100
                            inline
                            px-2
                            text-gray-300
                            sm:hidden
                          "
                        >
                          <v-icon name="bookmark" /></span
                        >{{ word.list[0].word }}
                      </div>
                    </div>
                    <div class="sm:hidden max-w-sm md:max-w-md truncate">
                      {{ word.list[0].meanings[0].definitions[0].definition }}
                    </div>
                  </div>
                </td>
                <td
                  class="
                    px-2
                    py-4
                    whitespace-nowrap
                    hidden
                    sm:table-cell sm:max-w-sm
                    md:max-w-xl
                    lg:max-w-4xl
                    xl:max-w-7xl
                    text-gray-900
                    dark:text-gray-200
                    group-hover:text-gray-900
                    text-left
                    truncate
                  "
                >
                  {{ word.list[0].meanings[0].definitions[0].definition }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                  <span
                    :class="{ 'text-green-600': word.favourite }"
                    class="
                      text-sm text-teal-800
                      font-mono
                      bg-teal-100
                      inline
                      px-2
                      text-gray-300
                    "
                  >
                    <v-icon name="bookmark"
                  /></span>
                </td>
              </tr>

              <!-- More people... -->
            </tbody>
          </table>
          <div
            v-if="showInfo"
            class="
              fixed
              left-0
              bottom-0
              bg-blue-700 bg-opacity-70
              text-white
              w-screen
              py-6
              block
              md:hidden
            "
          >
            <span
              class="absolute top-2 right-6 cursor-pointer"
              @click="showInfo = false"
            >
              <v-icon name="times" />
            </span>
            On mobile screens, we recomend you to use grid layout <br />
            <a class="cursor-pointer" @click="$router.replace('/auth/profile')"
              ><v-icon name="cogs" /> Go to configuration</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Table",
  data() {
    return {
      showInfo: true,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions("words", ["setWord"]),
    navigate(id) {
      this.setWord(id);
      this.$nextTick(() => {
        this.$router.push({ path: "new" });
      });
    },
  },
};
</script>
