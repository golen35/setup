import { SignugControllers } from "@controllers/AuthControllers";
import { Router } from "express";


export const signugControllers = new SignugControllers();

// Rourer Categoris


export const routes = (router: Router) => {
  router.get("/v1/signug", (signugControllers.handle));
};