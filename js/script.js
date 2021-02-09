var app = new Vue({
  el:'#app',
  data: {
    albums:[],
    generi:[]
  },
  mounted(){
    axios
    get('https://flynn.boolean.careers/exercises/api/array/music')
    then((result)=> {
      this.albums =result.data.response;

      this.albums.forEach(element, index) =>{
        if(!this.generi.includes(element.genre)){
          this.generi.push(element.genre);
        }
      }
    });
  }
});
