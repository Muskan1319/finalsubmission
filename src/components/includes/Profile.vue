<template>
  <div>
    <Nav />
    <div class="container col-10">
      <div class="col-sm-10 container bordered">
        <div class="fontweight-bold text-center">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            height="100"
            width="150"
            class="img-circle"
          />
           <h2 class="text-warning">Welcome : {{user.firstname}}</h2>
        </div><br>

        <div class="container">
          <div class="col-sm-4 col-sm-offset-3">
             <h3>Your Details</h3><br>
            <div class="h4 text-info">
              <label>Firstname</label> : &ensp;<i>{{ user.firstname }}</i><br><br>
            </div>
            <div class="h4 text-info">
              <label>Lastname</label> : &ensp;<i>{{ user.lastname }}</i><br><br>
            </div>
            <div class="h4 text-info">
              <label>Email</label> : &ensp;<i>{{ user.email }}</i><br><br>
            </div>
          </div>
        </div>
      </div>
    </div><br><br><br><br>
    <Footer />
  </div>
</template>

<script>
import Nav from "../includes/Nav.vue";
import Footer from "./Footer.vue";
import axios from "axios";
import { getToken } from "@/common/Jwttoken";
import { user} from '@/common/Url';
export default {
  name: "Profile",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      token: "",
      mytoken: "",
      user: "",
     
    };
  },
  mounted() {
    this.mytoken = getToken("access_token", this.token);
    axios.get(user, { headers: { "Authorization": `Bearer ${this.mytoken}` } })
      .then((res) => {
        this.user = res.data;
        localStorage.setItem('fname',res.data.firstname)
        localStorage.setItem('lname',res.data.lastname)
        console.log(res.data);
      });
  },
};
</script>

<style>
</style>