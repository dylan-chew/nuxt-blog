<template>
  <div v-if="totalpages > 1" class="col-12 pagination">
    <button
      :disabled="pagenumber <= 1"
      @click="clickedPrev"
      class="btn pagination-btn prev-btn"
    >
      Prev
    </button>
    <div class="current-page-display">
      Page {{ pagenumber }} of {{ totalpages }}
    </div>
    <button
      :disabled="pagenumber >= totalpages"
      @click="clickedNext"
      class="btn pagination-btn next-btn"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: ['pagenumber', 'totalpages'],
  name: 'Pagination',
  methods: {
    clickedNext() {
      this.$emit('increasePageNumber');
    },
    clickedPrev() {
      this.$emit('decreasePageNumber');
    }
  }
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  .pagination-btn {
    background: white;
  }
}
</style>
