package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.TechGlobalBase;
import pages.TechGlobalFrontendTestingHomePage;
import pages.TechGlobalPaginationPage;
import utils.Driver;

import java.util.List;

public class TechGlobalSteps {

    WebDriver driver;
    TechGlobalFrontendTestingHomePage techGlobalFrontendTestingHomePage;
    TechGlobalPaginationPage techGlobalPaginationPage;
    TechGlobalBase techGlobalBase;

    @Before
    public void setup() {
        driver = Driver.getDriver();
        techGlobalFrontendTestingHomePage = new TechGlobalFrontendTestingHomePage();
        techGlobalPaginationPage = new TechGlobalPaginationPage();
        techGlobalBase = new TechGlobalBase();
    }

    @Given("user is on {string}")
    public void user_is_on(String url) {
        driver.get(url);
    }

    @When("user moves to Practices header dropdown")
    public void user_moves_to_Practices_header_dropdown() {
        techGlobalBase.headerDropdown.click();
    }

    @When("user clicks on Frontend Testing header dropdown option")
    public void user_clicks_on_Frontend_Testing_header_dropdown_option() {
        techGlobalBase.headerDropdownOptions.get(0).click();
    }

    @Then("user should be navigated to {string}")
    public void user_should_be_navigated_to(String url) {
        Assert.assertEquals(url, driver.getCurrentUrl());
    }

    @Then("user clicks on {string} card")
    public void user_clicks_on_card(String cardName) {
        techGlobalFrontendTestingHomePage.clickOnCard(cardName);
    }

    @Then("user should see {string} heading")
    public void user_should_see_heading(String heading) {
        switch (heading) {
            case "Pagination":
                Assert.assertEquals(heading, techGlobalPaginationPage.heading.getText());
                break;
            case "World City Populations 2022":
                Assert.assertEquals(heading, techGlobalPaginationPage.subHeading.getText());
                break;
            default:
                throw new IllegalStateException("No such heading exception!!!");
        }
    }

    @Then("user should see {string} paragraph")
    public void user_should_see_paragraph(String paragraph) {
        Assert.assertEquals(paragraph, techGlobalPaginationPage.paragraph.getText());
    }

    @Then("user should see {string} button is disabled")
    public void user_should_see_button_is_disabled(String button) {
        switch (button) {
            case "Previous":
                Assert.assertFalse(techGlobalPaginationPage.previousOption.isEnabled());
                break;
            case "Next":
                Assert.assertFalse(techGlobalPaginationPage.nextOption.isEnabled());
                break;
            default:
                throw new IllegalStateException("Such option is unavailable!!!");
        }
    }

    @Then("user should see {string} button is enabled")
    public void user_should_see_button_is_enabled(String button) {
        switch (button) {
            case "Previous":
                Assert.assertTrue(techGlobalPaginationPage.previousOption.isEnabled());
                break;
            case "Next":
                Assert.assertTrue(techGlobalPaginationPage.nextOption.isEnabled());
                break;
            default:
                throw new IllegalStateException("Such option is unavailable!!!");
        }

    }

    @When("user clicks on Next button")
    public void user_clicks_on_Next_button() {
        techGlobalPaginationPage.nextOption.click();
    }

    @When("user clicks on Next button till it becomes disabled")
    public void user_clicks_on_Next_button_till_it_becomes_disabled() {
        while (techGlobalPaginationPage.nextOption.isEnabled()) {
            techGlobalPaginationPage.nextOption.click();
        }
    }

    @Then("user should see city with info below and an image")
    public void user_should_see_city_with_info_below_and_an_image(DataTable info) {
        Assert.assertTrue(techGlobalPaginationPage.image.isDisplayed());
        for (int i = 0; i < info.asList().size(); i++) {
            Assert.assertEquals(techGlobalPaginationPage.citiesInfo.get(i).getText(), info.asList().get(i));
        }
        techGlobalPaginationPage.nextOption.click();
    }


    @And("user should see {string} city with info below and an image")
    public void userShouldSeeCityWithInfoBelowAndAnImage(String city, DataTable info) {
        List<String> cityInformation = info.asList();
        String cityName = techGlobalPaginationPage.citiesAllInfo.get(0).getText();
        Assert.assertEquals(city, city.substring(city.indexOf(":") + 1));
        for (int i = 0; i < techGlobalPaginationPage.citiesInfo.size(); i++) {
            Assert.assertEquals(cityInformation.get(i), techGlobalPaginationPage.citiesAllInfo.get(i).getText());
            Assert.assertTrue(techGlobalPaginationPage.image.isDisplayed());
        }
        if (techGlobalPaginationPage.nextOption.isEnabled()) {
            techGlobalPaginationPage.nextOption.click();
        }
    }
}
