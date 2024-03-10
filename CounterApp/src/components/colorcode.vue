.<template>
  <input v-model="colorCode" type="text" placeholder="Enter Color Code"/>
</template>

<script>
export default {
    name:'colorCode',
      computed:{
    colorCode:{
      get(){
        return this.$store.state.colorCode
      },
      set(newValue){
        this.$store.dispatch('setColorCode',newValue)
      }
    }
  },
}
</script>

<style>

</style>