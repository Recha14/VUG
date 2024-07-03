// Kroki scenariuszy

import { LoginPage } from "../pageObjects/LoginPage"

Given(/^Zakładając, że jestem na stronie logowania$/, async (elementTitle: string) => {
    await LoginPage.clickAddArticle();
})