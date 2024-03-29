
 
const logginnPage ={
    template: `
    
    <div id = "container" >
   
    <link rel="stylesheet" href="pages/logginn.css">
   
    <img id="logo" src="pages/Images/Studentklinikk logo.png" alt="Høyskolen kristiania header logo">
    
    <h1 id="logginntxtH1">Logg inn:</h1>

    
    
   
    <div id="logginndiv" v-bind:style="{'display':hidelogin}" >
        <form  class="loginform"  >
        
        <input class="loginformfield" type="text" v-model="usernameinp" placeholder="Brukernavn" required><br>
        <input class="loginformfield" id="passloginn" type="password" v-model="passwordinp" placeholder="Passord" required><br>
       
        <input @click="loginn(user)" class="loginformfield" id="subloginn" type="submit" value="Logg inn">
        <br>
        <br>
        <br>
        <button @click="makenewuser" class="loginformfield" id="newuserbtn">Opprett Bruker</button>
        
        </form>
        
        </div>
       
    <form class="newuserform" v-bind:style="{'display':hidenewform}" >
    
        <input class="newuserfield" id="newuserfirstname" type="text" 
        v-model="firstname" placeholder="Navn" required><br>

        <input class="newuserfield" id="newuserlastname" type="text" 
        v-model="lastname" placeholder="Etternavn" required><br>

        <input class="newuserfield" id="newuserphone" type="text" 
        v-model="phone" placeholder="Mobilnummer" required><br>
        
        <input class="newuserfield" id="newusermail" type="text" 
        v-model="email" placeholder="Epost" required><br>

        <input class="newuserfield" id="newusername" type="text" 
        v-model="Cusername" placeholder="Skriv ditt brukernavn" required><br>

        <input class="newuserfield" id="newpassloginn" type="text" 
        v-model="Cpassword" type="password" placeholder="Skriv ditt Passord" required><br>

        <input @click="clickregister" class="newuserfield" id="register" type="submit" value="Registrer"><br>
        
        <button @click="abortmakenewuser" class="newuserfield" id="abort">Avbryt</button>


    </form>
    <img id="logo2" src="pages/Images/logo.png" alt="Høyskolen Kristiania footer logo">

 </div>
    `,

 

data(){ 
    
    return  {
            hidenewform:"none",
            hidelogin:"",
            
           usernameinp:"",
            passwordinp:"",
         

            firstname:"",
            lastname:"",
            phone:"",
            email:"",
            Cusername:"",
            Cpassword:"",

            }

            
            
    },
    methods: {
                
            
                makenewuser: function() {
                    this.hidelogin="none";
                    this.hidenewform="";
                },   
               
               abortmakenewuser: function() {
                this.hidelogin="";
                this.hidenewform="none";
               },

               clickregister: function(){
                userdata.users.push(
                    {firstname:this.firstname,
                    lastname:this.lastname,
                    phone:this.phone,
                    email:this.email,
                    Cusername:this.Cusername,
                    Cpassword:this.Cpassword
                    });  
                    console.log(userdata.users);
                    this.hidelogin="";
                this.hidenewform="none";
                },
                loginn:function(){
                    var usernamechk =false;
                    var passwordchk =false;
                    const password=this.passwordinp;
                    const username=this.usernameinp;
                    for (var i = 0; i < userdata.users.length; i++) {

                        if(userdata.users[i].Cusername==username && userdata.users[i].Cpassword==password){
                            usernamechk = true;
                            passwordchk = true;
                            const user={firstname:userdata.users[i].firstname,
                                        lastname:userdata.users[i].lastname,
                                        phone:userdata.users[i].phone,
                                        email:userdata.users[i].email,
                                        username:userdata.users[i].Cusername,
                                     
                                        }
                            userdata.theuser.push(user);
                           console.log(userdata.theuser);
                        }
                        
                    }
                    
                    if(usernamechk==true && passwordchk ==true){
                        this.$router.replace({ path: "/startpage" });
                    
                }else{
                    alert("Feil Brukernavn eller Passord")}
                    
                        
                    

                        
                            
                        
                
                }, 

    }

};
    
    export default logginnPage;