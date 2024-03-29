


const startPage ={
    template: `
    
    <div id="container" >
    <link rel="stylesheet" type="text/css" href="pages/myPage.css">
   
    <img id="logo" src="pages/Images/Studentklinikk logo.png" alt="Høyskolen Kristiania header logo">
  
    <div id="iddiv">
    <img id="idimg" src="pages/Images/ID.png" alt="Min side Ikon">
     <p id="textuser">Bruker:<br>{{user}}</p>

    
    
   </div>
   
    <div id ="myinfo">
    <h3> Min Info: </h3>
    <h5> Navn: </h5>
    <p> {{fullname}} </p>
    <h5> Tlf: </h5>
    <p> {{phone}} </p>
    <h5> E-Post: </h5>
    <p> {{email}}</p>
    <br>
    </div>
    <h3 @click="createorderdiv"> Mine timer: </h3>
    <button @click="deleteorder" id="cancelorder" class ="backbutton">Avbestill Time</button>
    <div  id="ordercontainer" ></div>

   
    <img @click="back" src="pages/Images/back.png" class ="backimg" alt="Tilbake"><br>
    <img @click="linkloggout"  id="logoutimg" src="pages/Images/signout.png" alt="log ut">
    <img id="logo2" src="pages/Images/logo.png" alt="Høyskolen Kristiania footer logo">

</div>
    `,


data(){ 
    return  {
        user:"defaultuser",
        fullname:"",
        phone:"",
        email:"",
        id:"",

        
            }
    },
    methods: {
        
        back:function(){locationorder:this.$router.replace({ path: "/startpage" })},
        linkloggout:function(){locationorder:this.$router.replace({ path: "/logginuser" })},

       
       
        setuser:function(){
            window.scrollTo(0,0);
            for (let i = 0; i < userdata.theuser.length; i++) {
            if (userdata.theuser[i] == null){
                this.user="defaultuser";
                this.fullname="";
                this.phone="";
                this.email="";
                

            }else{this.user= userdata.theuser[i].username;
                this.fullname=userdata.theuser[i].firstname+" "+userdata.theuser[i].lastname;
                this.phone=userdata.theuser[i].phone;
                this.email=userdata.theuser[i].email;
                }}},

               

               

                

               
            createorderdiv:function(){
              
                var order;
                for (var i = 0; i < userdata.orders.length; i++) {
                    if(userdata.orders[i].user == this.user){
                    var id=userdata.orders[i].id;
                    
                    var treatment=userdata.orders[i].treatment;
                    var time=userdata.orders[i].time;
                    var date=userdata.orders[i].date;

                    order = document.createElement('div');
                    order.setAttribute("class", "orders");
                    order.setAttribute("id", id);
                   order.innerHTML = "<h5 class=treatH>Behandling: "+treatment+"</h5>"+
                   "<h5 class=timeH>Tid: "+time+"</h5>"+
                    "<h5 class=dateH>Dato:  "+date+"</h5>"+
                    "<label class=delete>"+"<h4 class=deletetxt>Avbestill</h4>"+
                    "<input class=checkbox value="+id+" checked='' type=checkbox id=inp"+id+" name=cancel"+id+">"+
                    "<span class=labelchk for=cancel"+id+"></span>"+
                  "</label>";
                  
                  
                  
                     console.log( userdata.orders[i].treatment);
                   var appendto=document.getElementById("ordercontainer");
                   console.log(appendto);
                   appendto.appendChild(order);}

                   }
                   var unchecked = document.getElementsByClassName("checkbox");
                  for (var i = 0; i < unchecked.length; i++) {
                      unchecked[i].checked = false;

                  }

             





            },
            deletediv:function(e){{
                e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
            }},




            deleteorder:function(){
                var checkbox = document.getElementsByClassName("checkbox");
               
                for (var i = 0; i < checkbox.length; i++) {
                    if(checkbox[i].checked == true){
                       var deletethis= checkbox[i]
                      var iddiv = document.getElementById(deletethis.id);
                      
                      
                       for (var i = 0; i < userdata.orders.length; i++) {
                           if(deletethis.value == userdata.orders[i].id){
                            for (let i = 0; i < userdata.usernotes.length; i++) {
                                if(deletethis.value == userdata.usernotes[i].id){

                                    userdata.usernotes[i].status= "canceled";
                                    console.log(userdata.usernotes);
                                }
                                
                            }
                            
                            userdata.orders.splice(i,1);
                            this.deletediv(iddiv);
                            }
                           
                          
                       }
                   }
                    
                }
            },

           

    },
    beforeMount(){
        this.setuser()
       },
       mounted() {
           this.createorderdiv()
           
       }
    
    };
    export default startPage;