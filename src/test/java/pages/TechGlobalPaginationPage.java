package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class TechGlobalPaginationPage extends TechGlobalBase {

    public TechGlobalPaginationPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "main_heading")
    public WebElement heading;

    @FindBy(id = "sub_heading")
    public WebElement subHeading;

    @FindBy(id = "content")
    public WebElement paragraph;

    @FindBy(id = "previous")
    public WebElement previousOption;

    @FindBy(id = "next")
    public WebElement nextOption;

    @FindBy(className = ".city_image")
    public WebElement image;

    @FindBy(css = "div[class*= pagBodyData]>p")
    public List<WebElement> citiesAllInfo;

    @FindBy(css = "div[class*= pagBodyData]>p>strong")
    public List<WebElement> citiesInfo;
}