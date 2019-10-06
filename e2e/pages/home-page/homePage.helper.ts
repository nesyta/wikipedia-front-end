import { browser } from "protractor";
import { Interactor } from "../../common/interactor";
import { HomePage } from "./homePage.objects";
import { HomePageConstants } from "./homePage.constants";

const { input } = browser.params;

export class HomePageHelper {
    static async verifyPageTitle() {
        const title = await browser.getTitle();
        console.log(`Verify "${title}" should contain "${HomePageConstants.pageTitle}"` );
        expect(title).toContain(HomePageConstants.pageTitle);
    }

    static async enterStringToSearch() {
        await Interactor.sendKeys(HomePage.searchFields.input, input);
    }

    static async verifyStringToSearchEntered() {
        const value = await HomePage.searchFields.input.getAttribute('value');
        console.log(`Verify "${value}" should equal "${input}"` );
        expect(value).toEqual(input);
    }

    static async selectLanguage(language: string) {
        await HomePage.searchFields.languageDropdown.click();
        console.log(`Select "${language}" option` );
        await HomePage.searchFields.languageOption(language).click();
    }

    static async verifySelectedLanguage(language: string) {
        const selected = await HomePage.searchFields.selectedLanguage.getText();
        console.log(`Verfiy "${language}" should equal "${selected}"` );
        expect(selected).toEqual(language);
    }

    static async clickSearchButton() {
        await HomePage.searchFields.searchButton.click();
    }
}
