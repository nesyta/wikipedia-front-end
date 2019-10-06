import { CommonConstants } from '../../../common/common.constants';
import { Interactor } from '../../../common/interactor';
import { HomePageConstants } from '../../../pages/home-page/homePage.constants';
import { HomePageHelper } from '../../../pages/home-page/homePage.helper';
import { SearchResultsHelper } from '../../../pages/search-results-page/searchResults.helper';

const { consoleColors: colors } = CommonConstants;

describe('Health Suite - Front-End', () => {

  beforeAll(async () => {
    console.log(colors.yellow,'**Precondition** Navigate to Wikipedia.org');
    await Interactor.goToUrl(HomePageConstants.url);
  });
  
  it('Should verify the search functionality of Wikipedia', async() => {
    console.log('1.1 Verify page title');
    await HomePageHelper.verifyPageTitle();

    console.log(colors.cyan,'2.1 Type in the string given as parameter in the search input field');
    await HomePageHelper.enterStringToSearch();
    console.log(colors.magenta,'2.2 Verify string entered');
    await HomePageHelper.verifyStringToSearchEntered();

    console.log(colors.cyan,'3.1 Select English as the search language');
    await HomePageHelper.selectLanguage(HomePageConstants.languages.english);
    console.log(colors.magenta,'3.2 Verify English selected');
    await HomePageHelper.verifySelectedLanguage(HomePageConstants.languages.englishAbbr);

    console.log(colors.cyan,'4.1 Click the search button');
    await HomePageHelper.clickSearchButton();
    console.log(colors.magenta,'4.2 Validate that the first heading of the search results page matches the search string (ignoring the case)');
    await SearchResultsHelper.verifyNavigation();

    console.log(colors.cyan,'5.1 Change language');
    await SearchResultsHelper.changeLanguage();
    console.log(colors.magenta,'5.2 Verify that the search results page is available in a language given as parameter.');
    await SearchResultsHelper.verifyPageLanguage();

    console.log(colors.magenta,'6.1 Validate that the search results page in the new language includes a link to the version in English.');
    await SearchResultsHelper.verifyEnglishLanguageAvailable();
  });
});
