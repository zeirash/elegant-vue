<template>
  <div>
    <sidebar></sidebar>
  </div>
</template>

<script>
import HeaderDashboard from '../components/header_dashboard'
import Sidebar from '../components/sidebar'

export default {
  components: {
    'header-dashboard': HeaderDashboard,
    'sidebar': Sidebar
  },
  data () {
    return {}
  }
}
</script>