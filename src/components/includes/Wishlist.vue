<template>
  <div>
  <Nav/>
   <section id="cart_items">
      <div class="container">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active">Shopping Cart</li>
          </ol>
        </div>
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="description"></td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td><td></td>
              </tr>
            </thead>
             <tbody>
              <tr v-for="i in item" :key="i.id">
                <td class="cart_product">
                  <img
                      :src="'http://127.0.0.1:8000/uploads/' + i.image1"
                      alt=""
                      height="50"
                      width="50"
                  />
                </td>
                <td class="cart_description">
                  <h4><a href="">{{ i.name }}</a></h4>
                  <p>Web ID: 1089772</p>
                </td>
                <td class="cart_price">
                  <p>₹ {{ i.price }}</p>
                </td>
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <a class="cart_quantity_up" href=""> {{ i.quantity }} </a>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">₹ {{ i.price * i.quantity }}</p>
                </td>
                <td>
                    <button class="btn btn-default update" @click="moveToCart(i)">Move to cart</button>
                </td>
                <td class="cart_delete">
                  <a class="cart_quantity_delete" href="" @click="deleted(i)"
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  <Footer/>
  </div>
</template>

<script>
import Nav from '../includes/Nav.vue';
import Footer from './Footer.vue';

export default {
name:'Profile',
components:{
    Nav,
    Footer,
},
data() {
    return {
      item: undefined,
    };
  },
  methods: {
    deleted(del) {
      let index = this.item.indexOf(del);
      this.item.splice(index, 1);
      let arr = JSON.stringify(this.item);
      localStorage.setItem("mywishlist", arr);
    },
     moveToCart(i) {
      if (localStorage.getItem("myCart") != undefined) {
        let arr = JSON.parse(localStorage.getItem("myCart"));
        let obj = {
          pid: i.id,
          quantity: 1,
          price: i.price,
          name: i.productname,
          image1: i.image1,
        };
         
       
        const found = arr.some((item) => item.pid == i.id);
        if (found) {
          this.$swal("Already  added", "", "error");
        } else
         {
          arr.push(obj);
          localStorage.setItem("myCart", JSON.stringify(arr));
          this.$store.dispatch("addToCart", arr);
          this.$swal("Moved to cart", "", "success");
          localStorage.removeItem('mywishlist');
          //location.reload();
        }
      } else
       {
        let arr = [];
        let obj = {
         pid: i.id,
          quantity: 1,
          price: i.price,
          name: i.productname,
          image1: i.image1,
        };
        arr.push(obj);
        localStorage.setItem("myCart", JSON.stringify(arr));
        this.$store.dispatch("addToCart", arr);
        this.$swal("Moved to cart", "", "success");
        
        //location.reload();
        // this.$router.push("/cart");
      }
    },

  },
  mounted() {
    this.item = JSON.parse(localStorage.getItem("mywishlist"));
    console.log(this.item);
  },
}
</script>

<style>

</style>