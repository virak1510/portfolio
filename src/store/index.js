import { writable } from "svelte/store";
import { browser } from "$app/environment";

const dark = writable(browser && (localStorage.getItem('dark') || false));
dark.subscribe((val)=> browser && localStorage.setItem('dark', val))
const theme = writable('dark')
const drawerStat = writable(false)
export{
  dark,
  theme,
  drawerStat,
}