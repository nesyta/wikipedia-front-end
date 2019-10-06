import { ElementFinder, browser, protractor } from "protractor";

export class Interactor {
    static readonly EC = protractor.ExpectedConditions;

    /**
     * Opens URL page
     * @param url 
     * @param waitForAngular 
     * @param ignoreSynchronization 
     */
    static async goToUrl(url: string, waitForAngular = false, ignoreSynchronization = true) {
        browser.ignoreSynchronization = ignoreSynchronization;
        await browser.waitForAngularEnabled(waitForAngular);
        return browser.get(url);
    }

    /**
     * Send Keys to an input element
     * @param {ElementFinder} locator
     * @param {string} value
     * @param {boolean} sendEnter
     */
    static async sendKeys(locator: ElementFinder, value: string, sendEnter = false) {
        await Interactor.waitToBeDisplayed(locator);
        console.log(`Send keys: "${value}"`);
        await locator.sendKeys(value);
        if (sendEnter) {
            await locator.sendKeys(protractor.Key.ENTER);
        }
    }

    /**
     * Verify whether an element is displayed or not
     * @param {ElementFinder} target
     * @param {string} elementName
     * @returns {Promise<void>}
     */
    static async verifyElementDisplayed(target: ElementFinder, elementName: string, toWait: boolean = true) {
        console.log(`${elementName} should display`);
        if (toWait) {
            await Interactor.waitToBeDisplayed(target);
        }

        await expect(await target.isDisplayed())
            .toBe(true, `${elementName} should be displayed`);
    }

    /**
     * Waits for an element to be clickable
     * @param target
     */
    static async waitToBeClickable(target: ElementFinder) {
        console.log('Wait to be clickable');
        try {
            await browser.wait(this.EC.elementToBeClickable(target),
                25000, target.locator().toString() + ' should be clickable');
        } catch (error) {
            return false;
        }
    }

    /**
     * Waits for an element to be visible
     * @param target
     */
    static async waitToBeDisplayed(target: ElementFinder) {
        console.log('Wait to be visible');
        try {
            return await browser.wait(this.EC.visibilityOf(target),
                25000, target.locator().toString() + ' should be visible');
        } catch (error) {
            return false;
        }
    }
}
