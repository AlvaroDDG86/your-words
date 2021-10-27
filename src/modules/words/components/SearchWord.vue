<template>
  <div class="inset-x-auto w-full z-10">
    <div class="w-full mx-auto shadow-md rounded-md p-4 bg-white">
      <div class="flex gap-2 flex-col md:flex-row center">
        <div class="relative flex-1">
          <input
            id="word"
            value=""
            name="word"
            type="text"
            class="
              peer
              h-10
              w-full
              rounded-md
              border border-1.5
              placeholder-transparent
              border-pink-300
              text-pink-900
              focus:outline-none focus:border-pink-600 focus:border-2
              p-3
            "
            placeholder="Word to search"
          />
          <label
            for="word"
            class="
              absolute
              left-2
              px-1
              -top-2.5
              bg-white
              text-pink-600 text-sm
              transition-all
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-pink-900
              peer-placeholder-shown:top-2
              peer-focus:-top-2.5 peer-focus:text-pink-600 peer-focus:text-sm
            "
            >Word or Expresion :</label
          >
        </div>
      </div>
      <div class="relative flex justify-center mt-6">
        <button
          class="
            bg-pink-900
            text-white
            font-extrabold
            text-lg
            rounded-full
            px-6
            py-3
          "
        >
          Search
        </button>
        <div class="absotule bottom-10 right-10">
          <!-- <toggle-button
            :value="true"
            :labels="{ checked: 'Favo', unchecked: 'Bar' }"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchWord",
};
</script>
