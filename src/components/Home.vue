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
        Greetings, glad you've decided to take some time out of your day to have
        a look at my portfolio.
      </h3>
      <h3>
        I will make an attempt to keep things short & concise. Here is a little
        bit about me:
      </h3>
      <div id="about-me">
        <img id="profile" src="../assets/images/profile.png" />
        <ul id="about-text">
          <li>I have an almost natural fascination with technology</li>
          <li>I am passionate about many Sports.</li>
          <li>I like mathematics and geometry</li>
          <li>
            I also enjoy cooking (my cooking skills need some brushing up
            though)
          </li>
          <li>
            My current obsession is finding loopholes in gambling markets to
            gain an advantage over bookmakers
          </li>
          <li>
            I am inquisitive by nature, so I enjoy broadening my horizons by
            learning new things
          </li>
        </ul>
      </div>
      <hr />
      <div class="Skills">
        <br />
        <h3>
          I am aspiring to have a Full-Stack's Developer's skill-set but since I
          really enjoying with numbers, my main passion is the data facet. I am
          in my element when working with with sports data/analytics but I
          working with other data as well. Here are some of my skills:
        </h3>
        <div class="skill-icons">
          <span title="HTML"
            ><span class="iconify" data-icon="akar-icons:html-fill"></span
          ></span>
          <span title="CSS"
            ><span class="iconify" data-icon="akar-icons:css-fill"></span
          ></span>
          <span title="MySQL"
            ><span class="iconify" data-icon="simple-icons:mysql"></span
          ></span>
          <span title="JavaScript"
            ><span class="iconify" data-icon="akar-icons:javascript-fill"></span
          ></span>
          <span title="Python"
            ><span class="iconify" data-icon="akar-icons:python-fill"></span
          ></span>
          <span title="Pandas"
            ><span class="iconify" data-icon="simple-icons:pandas"></span
          ></span>
          <span title="R"
            ><span class="iconify" data-icon="carbon:logo-r-script"></span
          ></span>
          <span title="Tableau"
            ><span class="iconify" data-icon="ion:logo-tableau"></span
          ></span>
        </div>

        <h4 id="hover-confuse">
          Hover over the icons if you're unsure of what they are
        </h4>

 </div>
  <div class="proj-container">
   
     <div class="heading">
      <h3>Here are a few of my projects: </h3>
    </div>
    <div class="row">
      <div class="card">
        <div class="card-header">
          <h1>Basic Calculator</h1>
        </div>
        <div class="card-body">
          <p>
            Made a Calculator using Bootstrap and JavaScript. Used DOM manipuation to send data to the HTML and added code to give the calculator some functionality
          </p>
          <a href="https://github.com/kagopooe/Calculator" target="_blank" class="btn">Github</a>
          <a href="https://flamboyant-leavitt-93419a.netlify.app/" class="btn" target="_blank">Live</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h1>Reaction Game</h1>
        </div>
        <div class="card-body">
          <p>
            Created a Reaction Game using a JavaScript Framework called Vue. The game measures the speed of the user's reaction time and reflexes in a simple manner
          </p>
          <a href="https://github.com/kagopooe/reaction-game-vue" class="btn" target="_blank">Github</a>
          <a href="https://unruffled-hugle-da54c4.netlify.app/" class="btn" target="_blank">Live</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h1>Pass Network</h1>
        </div>
        <div class="card-body">
          <p>
            Created a Pass Network visualization using Python and Pandas to derive insights from a local football club. I used coding tools to generate the raw data. 
          </p>
          <a href="#" class="btn" target="_blank">Github</a>
          <a href="#" class="btn" target="_blank">Live</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h1>Data Manipulation</h1>
        </div>
        <div class="card-body">
          <p>
            Used a Python framework to extract pass information in order to gain specific data. The data was used to count a specific metric for a particular football team.
          </p>
          <a href="#" class="btn" target="_blank">Github</a>
          <a href="#" class="btn" target="_blank">Live</a>
        </div>
      </div>
      </div>

  </div>



      <br />
      <hr />

      <div class="testimonials">
        <h3 id="testimonials-header">
          Testimonials from a few people I've enjoyed collaborating with during
          my coding journey:
        </h3>

        <figure class="snip1192">
          <blockquote>
            Kago is a great colleague and shows much potential as a web
            developer. He is well spoken even though he is very reticent"
          </blockquote>
          <div class="author">
            <img src="../assets/images/mbreda.jpg">
            <h4>Mugammad <span>- Classmate</span></h4>
          </div>
        </figure>
        <figure class="snip1192">
          <blockquote>
            "Kago has a great eye for design. From what I have observed, he is
            extremely focused and very attentive. He possesses an exceptional
            work ethic and an insatiable desire for achieving his goals."
          </blockquote>
          <div class="author">
            <img src="../assets/images/ndeem.jpg" />
            <h4>Nadeem <span>- Classmate</span></h4>
          </div>
        </figure>
        <figure class="snip1192">
          <blockquote>
            "Kago is a fellow classmate and he is genuinely a nice person. His
            coding skills are great. I wish him nothing but the best in his
            career."
          </blockquote>
          <div class="author">
            <img src="../assets/images/emihle1.jpg" />
            <h4>Emihle <span>- Classmate</span></h4>
          </div>
        </figure>

        <figure class="snip1192">
          <blockquote>
            "Kago is a talented individual who has good attention to detail. He
            has the potential to do great things."
          </blockquote>
          <div class="author">
            <img src="../assets/images/alex.jpg" alt="sq-sample29" />
            <h4>Alex <span>- Lecturer</span></h4>
          </div>
        </figure>
      </div>

      <hr />

      <div class="contact-section">
        <section id="contact">
          <h3 class="section-header">
            Feel free to get in touch with me by filling in this form:
          </h3>

          <div class="contact-wrapper">
            <!-- Left contact page -->

            <form id="contact-form" class="form-horizontal" role="form" action="https://formspree.io/f/moqredrj"
                method="POST">
              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="NAME"
                    name="name"
                    value=""
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    value=""
                    required
                  />
                </div>
              </div>

              <textarea
                class="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                required
              ></textarea>

              <!-- <button class="btn btn-dark send-button" id="submit" type="submit" value="SEND"> -->
              <button
                type="submit"
                class="btn btn-secondary btn-lg btn-block text-dark"
                style="background-color: #2b2a2e;"
              >
                <div class="#">
                  <i class="fa fa-paper-plane"></i
                  ><span class="send-text"> SEND</span>
                </div>
              </button>
              </form>
    
            
            <div class="social-icons">
              <span title="Email"
                ><a href="mailto:kagopooe@gmail.com" target="_blank">
                  <span class="iconify" data-icon="entypo:email"></span></a
              ></span>
              <span title="Message me on Telegram"
                ><a href="https://t.me/kagopooe" target="_blank">
                  <span
                    class="iconify"
                    data-icon="akar-icons:telegram-fill"
                  ></span></a
              ></span>
              <span title="Github"
                ><a href="https://github.com/kagopooe" target="_blank">
                  <span
                    class="iconify"
                    data-icon="akar-icons:github-fill"
                  ></span
                ></a>
              </span>
            </div> <hr />

          </div>
        </section>
        
      </div>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
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
  /* z-index */
}

main {
  margin-top: 128px;
}

@supports (height: 100vh) {
  body {
    background: linear-gradient(to right top, white 50%, grey 50%);
    background-size: 100% calc(100% - 100vh + 129px);
    background-repeat: no-repeat;
    /* position: fixed; */
    z-index: 999;
  }

  body:before {
    content: "";
    position: fixed;
    top: 128px;
    bottom: 0;
    width: 100%;
    z-index: -999;
    background: #151415;
  }
}

body {
  font-size: 1 rem;
  color: white;
  /* position: relative; */
}
main {
  padding: 10px 10%;
  box-sizing: border-box;
  /* z-index: -10; */
}

header {
  padding-left: 10px;
}

header h2 {
  font-weight: bolder;
  cursor: default;
  width: 407px;
}

header h3 {
  font-style: italic;
  color: silver;
  margin-top: -5px;
  cursor: default;
  width: 450px;
}

#about-me {
  display: flex;
}

#about-me * {
  z-index: -1 !important;
}

#about-me img {
  float: inline-start;
  /* z-index: ; */
  position: relative;
}

#about-text {
  margin: 85px 0px;
  font-size: 1.9rem;
  list-style: none;
  padding-left: 1em;
  font-weight: bold;
}

#about-text li {
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

.author img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
}

.author h4 {
  text-align: center;
}

blockquote {
  font-style: italic;
}

.section-header {
  padding: 5px 0px 15px;
}

button {
  /* color: black */
  background: black;
  color: white;
  padding-top: 10px;
}

/* text-area {
  padding-bottom: 10px;
} */

.social-icons {
  font-size: 110px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
}

a,
a:visited,
a:active {
  color: inherit !important;
  text-decoration: none !important;
}

a:hover {
  color: gray;
}
</style>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    reload() {
      window.location.reload();
    },
  },

  components: {},

  mounted() {





  },
};
</script>
