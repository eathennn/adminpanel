<template>
<div class="wui-side-menu open pinned" data-wui-theme="dark">
  <div class="wui-side-menu-header">
    <a href="#" class="wui-side-menu-trigger"><i class="fa fa-bars"></i></a>
    <a href="#" class="wui-side-menu-pin-trigger">
      <i class="fa fa-thumb-tack"></i>
    </a>
  </div>    
  <ul class="wui-side-menu-items">
    <!-- <li>
      <a href="#" class="wui-side-menu-item">
        <i class="box-ico fa fa-music fa-fw"></i> 
        <span class="box-title">Songs</span> 
      </a>
    </li> -->
    <li>
      
        <i class="box-ico fa fa-list-ol fa-fw"></i>
        <router-link to="/home" class="wui-side-menu-item">
          <span class="box-title">Home</span> 
        </router-link>
      
    </li>
    <li>
      
        <i class="box-ico fa fa-users fa-fw"></i>
        <router-link to="/teacher" class="wui-side-menu-item">
        <span class="box-title">Teachers</span> 
        </router-link>
     
    </li>
    <li>
        <router-link to="/works" class="wui-side-menu-item">
          <i class="box-ico fa fa-list-alt fa-fw"></i>
          <span class="box-title">Works</span> 
        </router-link>
    </li>
    <li>
      <router-link to="/courses" class="wui-side-menu-item">
        <i class="box-ico fa fa-search fa-fw"></i>
        <span class="box-title">Courses</span> 
      </router-link>
    </li>
    <li>
      <router-link to="/news" class="wui-side-menu-item">
        <i class="box-ico fa fa-cog fa-fw"></i>
        <span class="box-title">News</span> 
      </router-link>

    </li>
  </ul>
</div>


<!-- <div class="wui-content">
  <div class="wui-content-header">
    <a href="#" class="wui-side-menu-trigger"><i class="fa fa-bars"></i></a>
    <span class="wui-title">Responsive left side menu with pin state</span>
  </div> 
  <div class="wui-content-main">
    <p>Main content goes here</p>
    <p>Events</p>
    <div id="events"></div>
  </div>
</div> -->
<!-- <div class="wui-overlay"></div>
            <div class="input-group">
    <input type="text" class="form-control" placeholder="Search this blog">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div> -->
  

  <router-view></router-view>
    
</template>

<script>

export default {
  
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.search{
  width: 350px; 
  height: 100px; 
  position: absolute;
  top: 10px;
  margin-left: 580px;

}
.search::placeholder{
  color: #292e34;
}
.wui-side-menu {
  position:fixed;
  top:0;
  left:0;
  width:220px;
  height:100%;
  backface-visibility:hidden;
  z-index:3;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);  
  -webkit-transition: webkit-transform 220ms ease-in-out;
  transition: transform 220ms ease-in-out;
}
.wui-side-menu.open {-webkit-transform: translateX(0);transform: translateX(0);} 
.wui-side-menu.open ~ .content .side-menu-trigger {display:none;}
.wui-side-menu.open {box-shadow: 2px 0 16px 0 rgba(0,0,0,0.3);}
.wui-side-menu .header, 
.wui-content-header {vertical-align:baseline;line-height:50px;}
.wui-side-menu-pin-trigger, 
    .wui-side-menu-trigger {width:50px;height:50px;text-align:center;display: inline-block;font-size:18px;line-height: 50px;}

.wui-side-menu .wui-side-menu-pin-trigger    {display:none;float: right;}
.wui-side-menu .wui-side-menu-pin-trigger i  {-webkit-transition:all 0.22s ease-out;-moz-transition:all 0.22s ease-out;
                                                      -o-transition:all 0.22s ease-out;     transition:all 0.22s ease-out;}
.wui-side-menu .wui-side-menu-items {overflow-y:auto;height: calc(100% - 50px);}
.wui-side-menu .wui-side-menu-item {
   display:block;
   width:100%;
   padding:15px 12px ;
   border-left:5px solid transparent;
}
.wui-side-menu .wui-side-menu-item {height:50px}
.wui-side-menu .wui-side-menu-item i.box-ico {margin-right:4px;}

/* overlay */
.wui-overlay {position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background-color: rgba(0, 0, 0, 0.1);opacity:0.5;display:none;}
.wui-side-menu.open ~ .wui-overlay, .wui-overlay.active {display:block;} 

/* content */
.wui-content {z-index:1;position:absolute;top:0;right:0;bottom:0;left:0;
             -webkit-transition:all 0.22s ease-out;-moz-transition:all 0.22s ease-out;
             -o-transition:all 0.22s ease-out;transition:all 0.22s ease-out;padding:0 10px;}
.wui-content .wui-side-menu-trigger {margin-left:-10px;}
@media only screen and (min-width:768px){
    .wui-side-menu .wui-side-menu-pin-trigger {display:inline-block;} 
    .wui-side-menu.open {box-shadow: initial;}
    .wui-side-menu.open ~ .wui-overlay {display:none;} 
    .wui-side-menu.open ~ .wui-content .wui-side-menu-trigger {display:none;} 
    .wui-side-menu.open:not(.pinned) ~ .wui-overlay {display:block;}
    .wui-side-menu.open:not(.pinned) {box-shadow: 2px 0 16px 0 rgba(0,0,0,0.3);}
    .wui-side-menu.open.pinned ~ .wui-content {left:220px;}
}
ul.wui-side-menu-items {list-style: none;padding:0}

.wui-side-menu {background-color: #292e34;color:#ddd;}
.wui-side-menu .wui-side-menu-trigger:hover,
.wui-side-menu-item:hover,
.wui-side-menu-pin-trigger:hover
    {color: #fff;background-color: #383f45;}

.wui-side-menu a 
 {color:#ccc;text-decoration:none}
.wui-side-menu .wui-side-menu-item.active
    {border-left-color: #158439; color:#158439}
.wui-content a {color:#000;}


/* demo */
body {margin:0; font-family:'arial';font-weight:100;}
*, *:after, *:before {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
#events {background-color:#ccc;}



.router-link-exact-active{
  border-left-color: #158439 !important; color:#158439 !important;
}

</style>