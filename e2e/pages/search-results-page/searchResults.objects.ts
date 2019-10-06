import { by, element } from "protractor";
import { SearchResultsConstants } from "./searchResults.constants";

const { classes, ids } = SearchResultsConstants;

export class SearchResults {
    static get pageFields() {
        return {
            pageTitle: element(by.id(ids.heading)),
            moreLanguages: element(by.css(`button.${classes.moreLanguages}`)),
            menuLanguage: (lang: string) =>
                element(by.xpath(`//a[@class="${classes.interLanguage}"][@lang="${lang.toLowerCase()}"]`)),
            selectLanguage: (lang: string) =>
            element(by.xpath(`(//a[@class="${classes.autonym}"][@lang="${lang.toLowerCase()}"])[1]`)),
            searchInput: element(by.id(ids.searchLang)),
        };
    }
}
