import { browser } from "protractor";
import { Interactor } from "../../common/interactor";
import { HomePageConstants } from "../home-page/homePage.constants";
import { SearchResults } from "./searchResults.objects";
import { SearchResultsConstants } from "./searchResults.constants";

const { input, lanAbbr } = browser.params;

export class SearchResultsHelper {
    static async verifyNavigation() {
        const title = await SearchResults.pageFields.pageTitle.getText();
        console.log(`Verify "${title}" should contain "${input}"` );
        expect([input.toLowerCase(), SearchResultsConstants.labels.searchResults]).toContain(title.toLowerCase());
    }

    static async verifyPageLanguage(language: string = lanAbbr) {
        const current = await SearchResults.pageFields.pageTitle.getAttribute('lang');
        console.log(`Verify "${current}" should equal "${language}"` );
        expect(current.toLowerCase()).toEqual(language.toLowerCase());
    }

    static async changeLanguage() {
        console.log('Click more languages');
        await SearchResults.pageFields.moreLanguages.click();
        console.log('Wait for languages to load');
        await browser.sleep(2000);
        console.log(`Select ${lanAbbr}`);
        await SearchResults.pageFields.selectLanguage(lanAbbr).click();
    }

    static async verifyEnglishLanguageAvailable() {
        await Interactor.verifyElementDisplayed(SearchResults.pageFields.menuLanguage(HomePageConstants.languages.englishAbbr),
            HomePageConstants.languages.english);
    }
}
