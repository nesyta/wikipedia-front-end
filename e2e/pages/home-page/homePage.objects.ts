import { element, by } from "protractor";
import { HomePageConstants } from "./homePage.constants";

const { classes, ids } = HomePageConstants;

export class HomePage {

    static get searchFields() {
        return {
            input: element(by.id(ids.searchInput)),
            languageDropdown: element(by.id(ids.languageDropdown)),
            selectedLanguage: element(by.id(ids.selectedLanguage)),
            languageOption: (lan: string) => 
                element.all(by.cssContainingText(`#${ids.languageDropdown} option`, lan)).first(),
            searchButton: element(by.css(`.${classes.searchContainer} button`)),
        };
    }
}
