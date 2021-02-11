<template>
  <div>
    <div class="side-nav">
      <div class="header-sidenav">
        <div class="logo-content">
          <div class="icon-sidebar"><img src="../assets/icon.png" width="30px" /></div>
          <span class="text-sidebar">Elegant Jaya</span>
        </div>
      </div>
      <div class="item-sidenav">
        <a href="#" class="item-content">
          <div class="icon-sidebar"><img src="../assets/list.png" width="30px" /></div>
          <span class="text-sidebar">Display List</span>
        </a>
      </div>
      <div class="item-sidenav">
        <a href="#" class="item-content">
          <div class="icon-sidebar"><img src="../assets/add.png" width="30px" /></div>
          <span class="text-sidebar">Create New</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scope>
.side-nav {
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: #314732;
  overflow-x: hidden;
}

.item-sidenav {
  padding: 10px 25px;
}

.header-sidenav {
  padding: 30px 25px;
}

.logo-content, .item-content {
  display: flex;
  align-items: center;
}

.text-sidebar {
  padding-left: 25px;
  color: #fff;
}
</style>