<script setup lang="ts">
import { ref } from 'vue';
const open=ref(false);
const links=[['/','首页'],['/solutions/','解决方案'],['/about/','关于坤晟'],['/founder/','创始人'],['/blog/','技术博客'],['/contact/','联系我们']];
</script>
<template>
 <header class="sticky top-0 z-50 bg-paper/95 backdrop-blur-xl border-b border-ink/10">
  <nav class="wrap flex items-center justify-between h-[76px]" aria-label="主导航">
   <a href="/" class="flex items-center gap-3" aria-label="坤晟科技首页"><span class="w-10 h-10 rounded-xl bg-ink text-mint grid place-items-center font-bold text-xl">K<span class="text-gold">.</span></span><span class="font-bold tracking-wide text-lg">坤晟科技<span class="block text-[10px] tracking-[.19em] text-jade font-medium">KUNSHINETECH</span></span></a>
   <button class="md:hidden border border-ink/20 rounded-lg px-3 py-2" type="button" :aria-expanded="open" aria-controls="site-links" @click="open=!open">{{open?'关闭':'菜单'}} ☰</button>
   <div id="site-links" :class="open?'flex':'hidden'" class="absolute md:static top-[76px] left-0 right-0 bg-paper md:bg-transparent flex-col md:flex-row md:flex items-start md:items-center gap-0 md:gap-7 shadow-lg md:shadow-none p-5 md:p-0">
    <a v-for="l in links" :key="l[0]" :href="l[0]" @click="open=false" class="block py-3 md:py-0 text-sm font-medium text-ink/75 hover:text-jade">{{l[1]}}</a>
   </div>
  </nav>
 </header>
</template>
