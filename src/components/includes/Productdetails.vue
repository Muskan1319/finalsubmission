<template>
  <div>
    <Nav />
    <div class="container">
      <div class="row">
        <div class="col-sm-9 padding-right"
        v-for="(items, index) in item"
              v-bind:key="index"
              v-bind:class="index == 0 ? 'item active' : 'item'">
          <div class="product-details">
            <!--product-details-->

            <div class="col-sm-3">
              <div class="view-product">
                <img :src="'http://127.0.0.1:8000/uploads/'+items.image1" alt=""  style="width:200px;" />
                <h3>ZOOM</h3>
              </div>
             
            </div>
            <div class="col-sm-8">
              <div class="product-information">
                <!--/product-information-->
                <img
                  src="/images/product-details/new.jpg"
                  class="newarrival"
                  alt=""
                />
                <h2>{{items.productname}}</h2>
                <!-- <p>Web ID: 1089772</p> -->
                <img src="/images/product-details/rating.png" alt="" />
                <span>
                  <span>{{items.price}}</span>
                  <label>Quantity:</label>
                  <input type="text" v-model="items.quantity1" />
                  <button type="button" class="btn btn-fefault cart" @click="addToCart(item.id)">
                    <i class="fa fa-shopping-cart"></i>
                    Add to cart
                  </button>
                </span>
                <p><b>Condition:</b> New</p>
                <p><b>Brand:</b> {{items.brand}}</p>
                <a href=""
                  ><img
                    src="images/product-details/share.png"
                    class="share img-responsive"
                    alt=""
                /></a>
              </div>
              <!--/product-information-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/product-details-->
    <Footer />
  </div>
</template>

<script>
import Footer from "../includes/Footer.vue";
import Nav from "../includes/Nav.vue";
import {productDetails} from "@/common/Service";
export default {
  name: "Productdetails",
  components: {
    Nav,
    Footer,
  },
  data(){
      return{
          pid: this.$route.params.id,
          item:"",
      };
    
  },
  mounted(){
      productDetails(this.pid).then((res)=>{
          console.log(res.data);
         // alert(this.pid);
          this.item=res.data;         
         
      });
  },

  methods:{
  addToCart(id){
           var c=0
          if(localStorage.getItem('myCart')!=undefined){
               let arr=JSON.parse(localStorage.getItem('myCart'))
               for(let i=0;i<arr.length;i++)
               {
                 if(id==arr[i]['pid'])
                 {
                   arr[i]['quantity']++;
                   c=1;
                 }
               }
               if(c==0)
               {  
                 let obj={pid:id,quantity:1}
                arr.push(obj);
               }
               localStorage.setItem('myCart',JSON.stringify(arr));
               this.$store.dispatch('addToCart',arr)
               this.$swal('Added to cart','','success');
          }
          else {
              let arr=[]
              let obj={pid:id,quantity:1}
              arr.push(obj);
              localStorage.setItem('myCart',JSON.stringify(arr));
              this.$store.dispatch('addToCart',arr)
              this.$swal('Added to cart','','success');
          }

   }
  },
 
};
</script>
<style>
</style>