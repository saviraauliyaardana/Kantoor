<template>
  <div class="breadcrumb">
    <b-card>
        <b-breadcrumb>
          <b-breadcrumb-item to="/beranda">Beranda</b-breadcrumb-item>
          <b-breadcrumb-item v-for="item in items" :key="item.path" :to="item.path">{{item.name}}</b-breadcrumb-item>
        </b-breadcrumb>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'breadCrumbComponent',
data () {
    return {
      items:[],
    }
  },
  watch:{
    $route(){
      this.getRoute();
    }
  },
  methods:{
    getRoute(){
      this.items = this.$route.matched;
      console.log(this.$route);
    }
  },
  created(){
    this.getRoute();
  },
}
</script>

<style scoped>
body {
  background-color: #ccc !important;
}
.card-body {
  padding: 17px 0px 8px 20px !important;
}
div.breadcrumb{
  margin-right: 25px;
  margin-left: 25px;
  margin-top: 10px;
  display: block;
  
}
.breadcrumb>li+li:before {
  color: #ccc !important;
  content: "> " !important;
}
a{
text-decoration: none !important;
color: #0E562D;
font-weight: 400;
}
a:hover{
  color: #09af51;
}
</style>