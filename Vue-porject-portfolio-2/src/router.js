import Vue from "vue";
import Router from "vue-router";
import IPhone16ProMax3 from "./components/IPhone16ProMax3";
import Desktop2 from "./components/Desktop2";
import IPhone16ProMax1 from "./components/IPhone16ProMax1";
import Desktop3 from "./components/Desktop3";
import IPhone16ProMax2 from "./components/IPhone16ProMax2";
import Desktop1 from "./components/Desktop1";
import {
  iPhone16ProMax3Data,
  desktop2Data,
  iPhone16ProMax1Data,
  desktop3Data,
  iPhone16ProMax2Data,
  desktop1Data,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/iphone-16-pro-max-3",
      component: IPhone16ProMax3,
      props: { ...iPhone16ProMax3Data },
    },
    {
      path: "/desktop-2",
      component: Desktop2,
      props: { ...desktop2Data },
    },
    {
      path: "/iphone-16-pro-max-1",
      component: IPhone16ProMax1,
      props: { ...iPhone16ProMax1Data },
    },
    {
      path: "/desktop-3",
      component: Desktop3,
      props: { ...desktop3Data },
    },
    {
      path: "/iphone-16-pro-max-2",
      component: IPhone16ProMax2,
      props: { ...iPhone16ProMax2Data },
    },
    {
      path: "*",
      component: Desktop1,
      props: { ...desktop1Data },
    },
  ],
});
