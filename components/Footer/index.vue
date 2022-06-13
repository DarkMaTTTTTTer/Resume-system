<template>
  <footer :class="`${!hideBGCOLOR ? 'sub-bg' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <span class="icon pe-7s-map-marker"></span>
                <div class="cont">
                  <h6>Officeal Address</h6>
                  <p>355 Talus Way, Reno NV</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-mail"></span>
                <div class="cont">
                  <h6>Email</h6>
                  <p>dimitri@dimitrishepherd.com</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-call"></span>
                <div class="cont">
                  <h6>Cell</h6>
                  <p>+1(775)-232-4378</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>Recent Articles</h5>
            </div>
            <ul>
              <li>
                <div class="img">
                  <NuxtLink to="#latest1">
                    <img src="/img/blog/1.jpg" alt=""
                  /></NuxtLink>
                </div>
                <div class="sm-post">
                  <NuxtLink to="#latest1">
                    <p>
                      This is a demo article
                    </p>
                    <span class="date">June 13th, 2022</span>
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="img">
                  <NuxtLink to="#latest2">
                    <img src="/img/blog/2.jpg" alt="" />
                  </NuxtLink>
                </div>
                <div class="sm-post">
                  <NuxtLink to="#latest2">
                    <p>
                      Demo Article 2
                    </p>
                    <span class="date">June 13th, 2022</span>
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="subscribe">
                  <input type="text" placeholder="Type Your Email" />
                  <span class="subs pe-7s-paper-plane"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="logo">
              <img src="/img/logo-light.png" alt="logo" />
            </div>
            <div class="social">
              <NuxtLink to="github">
                <i class="fab fa-github"></i>
              </NuxtLink>
              <NuxtLink to="twitter">
                <i class="fab fa-twitter"></i>
              </NuxtLink>
              <NuxtLink to="instagram">
                <i class="fab fa-instagram"></i>
              </NuxtLink>
              <NuxtLink to="youtube">
                <i class="fab fa-youtube"></i>
              </NuxtLink>
            </div>
            <div class="copy-right">
              <p>
                © 2022, Dimitri Shepherd. Licensed under
                <a href="https://creativecommons.org/" target="blank">Creative Commons</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    props: ['hideBGCOLOR']
};
</script>

<style scoped>
</style>