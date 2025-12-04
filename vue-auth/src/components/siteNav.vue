<template>
<nav class="navbar navbar-expand-lg fixed-top h-auto">
      <div class="container-fluid">
        <a class="navbar-brand me-auto" href="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/"><img
            src="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/assets/images/global/logo.png" alt="logo"
            height="80px"></a>
        <div class="offcanvas offcanvas-top h-100" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close me-4 mt-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav  justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link mx-lg-2 active" aria-current="page"
                  href="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2"
                  href="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/reservations.html">Reservations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2"
                  href="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/dining/dining.html">Dining</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2"
                  href="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/experiences.html">Experiences</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2"
                  href="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/about-us.html">Meet the
                  Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2"
                  href="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/get-in-touch.html">Get
                  in touch</a>
              </li>
            </ul>
          </div>
        </div>
        <a href="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/account/login.html"
          class="login-button btn-sm btn-outline-primary me-4">Login</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
</template>

<script>
    export default{
        name:'siteNav'
    }
</script>