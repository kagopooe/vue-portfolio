<template>
  <div class="home">
    <header>
      <div class="header">
        <h2 @click="reload()">My Portfolio // Kago Pooe</h2>
        <h3 @click="reload()">Aspiring Web Developer & Data Analyst</h3>
      </div>
    </header>
    <main>
      <h3>
       Greetings, glad you've decided to take some time out of your day to have a look at my portfolio.
      </h3>
      <h3>
        I will make an attempt to keep things short & concise. Here is a little bit about me:
      </h3>
      <div id="about-me">
      <img  id="profile" src="../assets/images/profile.png">  
      <ul id="about-text">
        <li>I like technology</li>
        <li>I am passionate about many Sports</li>
        <li>I like mathematics and geometry</li>
        <li>I also enjoy cooking (my cooking skills need some brushing up though)</li>
        <li>My current obsession is finding loopholes in gambling markets to gain an advantage over bookmakers</li>
        <li>I am inquisitive by nature, so I enjoy broadening my horizons by learning new things</li>
    </ul>
      </div>
      <hr />
      <div class="Skills">
        <br>
        <h3>I am aspiring to have a Full-Stack's Developer's skill-set but since I really enjoying with numbers, my main passion is the data facet. 
           I am in my element when working with with sports data/analytics but I working with other data as well. Here are some of my  skills: 
        </h3>
          <div class="skill-icons">
            <span title="HTML"><span class="iconify" data-icon="akar-icons:html-fill"></span></span>
            <span title="CSS"><span class="iconify" data-icon="akar-icons:css-fill"></span></span>
            <span title="MySQL"><span class="iconify" data-icon="simple-icons:mysql"></span></span>
            <span title="JavaScript"><span class="iconify" data-icon="akar-icons:javascript-fill"></span></span>
            <span title="Python"><span class="iconify" data-icon="akar-icons:python-fill"></span></span>
            <span title="Pandas"><span class="iconify" data-icon="simple-icons:pandas"></span></span>
            <span title="R"><span class="iconify" data-icon="carbon:logo-r-script"></span></span>
            <span title="Tableau"><span class="iconify" data-icon="ion:logo-tableau"></span></span>
          </div>
          
          <h4 id="hover-confuse">Hover over the icons if you're unsure of what they are</h4>
        </div>
        
        <br>
        <hr />
      
      <div class="testimonials">
      <h3 id='testimonials-header'>Testimonials from a few people I've enjoyed collaborating with during my coding journey:</h3>
          
         <figure class="snip1192">
  <blockquote>Kago is a great colleague and shows much potential as a web developer. He is well spoken even though he is very reticent"</blockquote>
  <div class="author">
    <img src="src/assets/images/mbreda.jpg" alt="sq-sample1"/>
    <h5>Mugammad<span> Classmate</span></h5>
  </div>
</figure>
<figure class="snip1192 hover">
  <blockquote>"Kago has a great eye for design. From what I have observed, he is extremely focused and very attentive. He possesses an exceptional work ethic and an insatiable desire for achieving his goals."</blockquote>
  <div class="author">
    <img src="src/assets/images/ndeem.jpg" alt="sq-sample24"/>
    <h5>Nadeem<span> Classmate</span></h5>
  </div>
</figure>
<figure class="snip1192">
  <blockquote>"Kago is a talented individual who has good attention to detail. He has the potential to do great things."</blockquote>
  <div class="author">
    <img src="src/assets/images/alex.jpg" alt="sq-sample29"/>
    <h5>Alex<span> Lecturer</span></h5>
  </div>
</figure>
</div>


<hr /><br><br><br>

      <div class='contact-section'>
<section id="contact">
  
  <h3 class="section-header">Contact</h3>
  
  <div class="contact-wrapper">
  
  <!-- Left contact page --> 
    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  <!-- Left contact page --> 
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Cape Town, South Africa</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">kagopooe@gmail.com</a></span></i></li>
          
        </ul>

        <hr>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr>

        <!-- <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div> -->

      </div>
    
  </div>
  
  
</section>  
  
</div>
  
  
      
      
      
      
      
      
      
    </main>
  </div>
</template>

<style>
* {
  /* margin:0; */
  padding:0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  scroll-behavior: smooth;
}
header {
  position: fixed;
  top: 0;
  height: 120.5px;
  width: 100%;
  background: #151415;
  color: white;
}

main {
  margin-top: 128px;
}

@supports (height: 100vh) {
  body {
    background: linear-gradient(to right top, white 50%, grey 50%);
    background-size: 100% calc(100% - 100vh + 129px);
    background-repeat: no-repeat;
  }

  body:before {
    content: "";
    position: fixed;
    top: 128px;
    bottom: 0;
    width: 100%;
    z-index: -1;
    background: #151415;
  }
}

body {
  font-size: 1 rem;
  color: white;
}
main {
  padding: 10px 10%;
  box-sizing: border-box;
}

header {
  padding-left: 10px;
  
}

header h2 {
  font-weight: bolder;
  cursor: cell;
  width: 407px;
}

header h3 {
  font-style: italic;
  color: silver;
  margin-top: -5px;
  cursor: cell;
  width: 450px;
}

#about-me {
  display: flex;
}

#about-me img {
  float: inline-start;
  z-index: -1;
}

#about-text {
  margin: 85px 0px;
  font-size: 1.3rem;
  list-style: none;
  padding-left: 1em;
  font-weight: bold;
  

}

#about-text  li{
padding-top: 20px;
}

#about-text > li:before {
  content: "–";
  position: absolute;
  margin-left: -1.1em; 
  z-index: -1;
  font-weight: bold;

}

hr {
  border: 3px solid grey;
  border-radius: 3px;
}

.skill-icons {
   font-size: 135px;
   display: flex;
    align-items: center;
    justify-content: center;
}

.iconify {
  /* padding-right: 10px; */
  padding: 15px 15px 0px 15px;
}






</style>

<script>
  


export default {

  
  
  data() {
      return {
            
        };
    




  },
  
  
  methods: {
    reload() {
      window.location.reload();
    }


  },
  
  components: {}}

  


    
  





</script>