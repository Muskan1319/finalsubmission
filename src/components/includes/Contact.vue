<template>
  <div>
    <Nav />
    <div id="contact-page" class="container">
      <div class="bg">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="title text-center">Contact <strong>Us</strong></h2>
            <div id="gmap" class="contact-map"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <div class="contact-form">
              <h2 class="title text-center">Get In Touch</h2>
              <div
                class="status alert alert-success"
                style="display: none"
              ></div>
              <form @submit.prevent="handlecontact" id="main-contact-form" class="contact-form row"  method="post">
                <div class="form-group col-md-6">
                  <input
                   v-model="user.name"
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Name"
                     :class="{
                      'is-invalid': submit && $v.user.name.$error,
                    }"
                  />
                    <div
                    v-if="submit && $v.user.name.$error"
                    class="invalid-feedback text-danger font-weight-bold">
                    <span v-if="!$v.user.name.required">name is required</span>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    v-model="user.email_id"
                    name="email_id"
                    class="form-control"
                    placeholder="Email"
                       :class="{
                      'is-invalid': submit && $v.user.email_id.$error,
                    }"
                  />
                    <div
                    v-if="submit && $v.user.email_id.$error"
                    class="invalid-feedback text-danger font-weight-bold">
                    <span v-if="!$v.user.email.required">email is required</span>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <input
                    type="number"
                    v-model="user.number"
                    name="subject"
                    class="form-control"
                    placeholder="Contact number"
                       :class="{
                      'is-invalid': submit && $v.user.number.$error,
                    }"
                  />
                    <div
                    v-if="submit && $v.user.number.$error"
                    class="invalid-feedback text-danger font-weight-bold">
                    <span v-if="!$v.user.number.required">phonenumber is required</span>
                  </div>
                  
                </div>
                <div class="form-group col-md-12">
                  <textarea
                    name="message"
                    id="message"
                    v-model="user.message"
                    class="form-control"
                    rows="8"
                    placeholder="Your Message Here"
                     :class="{
                      'is-invalid': submit && $v.user.message.$error,
                    }"
        
                  ></textarea>
                    <div
                    v-if="submit && $v.user.message.$error"
                    class="invalid-feedback text-danger font-weight-bold">
                    <span v-if="!$v.user.message.required">message is required</span>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <!-- <input
                    type="submit"
                    name="submit"
                    class="btn btn-primary pull-right"
                    value="Submit"
                  /> -->
                  <button name="submit" class="btn btn-primary pull-right">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="contact-info">
              <h2 class="title text-center">Contact Info</h2>
              <address>
                <p>E-Shopper Inc.</p>
                <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                <p>Newyork USA</p>
                <p>Mobile: +2346 17 38 93</p>
                <p>Fax: 1-714-252-0026</p>
                <p>Email: info@e-shopper.com</p>
              </address>
              <div class="social-networks">
                <h2 class="title text-center">Social Networking</h2>
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/#contact-page-->
    <Footer />
  </div>
</template>

<script>
import Nav from "../includes/Nav.vue";
import Footer from "../includes/Footer.vue";
import { required,email} from "vuelidate/lib/validators";
import {usercontact} from "@/common/Service";
export default {
  name: "Contact",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      user: {
        name: "",
        email_id: "",
        number: "",
        message: "",
      },
      submit: false,
    };
  },

      validations:{
        user:{
        name:{required},
        email_id:{required,email},
        number:{required},
        message:{required},
      }
  },

  methods:{
     handlecontact()
     {
       this.submit=true;
        this.$v.user.$touch();
      if (this.$v.user.$invalid) {
        return;
      }
         alert(this.user)

       let formdata={name:this.user.name,
      email_id:this.user.email_id,
      number:this.user.number,
      message:this.user.message};
      console.log(formdata);
      alert(formdata)
      usercontact(formdata)
      .then(res=>{
             if(res.data.msg){
                alert(res.data.msg+"Data send successfully")
      
            }
            else
            {
              alert(res.data.msg+"data not send")
            }
        })
        .catch(err=>{
            console.log("Something Wrong "+err)
        })
      }



  },
};
</script>

<style>
</style>