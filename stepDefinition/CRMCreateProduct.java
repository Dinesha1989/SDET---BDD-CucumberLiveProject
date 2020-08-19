package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CRMCreateProduct {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the CRM login Page and enter \"(.*)\" and \"(.*)\"$")
	public void openCRMAndlogin(String username, String password) {
		
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("https://alchemy.hguy.co/crm/index.php?action=Login&module=Users");
		driver.findElement(By.id("user_name")).sendKeys(username);
		driver.findElement(By.id("username_password")).sendKeys(password);
		driver.findElement(By.id("bigbutton")).click();
	}
	
	@When ("^Open 'All' then 'Products' and click on 'Create Product'$")
	public void productCreate() throws InterruptedException {
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("dashlet_849b2dac-a202-a5f2-0cf9-5db0c1b02e20")));
		
		WebElement All = driver.findElement(By.id("grouptab_5"));
		Actions act = new Actions(driver);
		act.moveToElement(All).perform();
		
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@id='grouptab_5']//..//li/a[text()='Products']")));
		driver.findElement(By.xpath("//a[@id='grouptab_5']//..//li/a[text()='Products']")).click();
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[3]/div/div/div[1]/ul/li[1]/a/div[2]")));
		driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/ul/li[1]/a/div[2]")).click();
	}
	
	@Then ("^Enter \"(.*)\" and \"(.*)\" and \"(.*)\" and save it$")
	public void productDetails(String product, String category, String price) {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("SAVE")));
		driver.findElement(By.id("name")).sendKeys(product);
		driver.findElement(By.id("aos_product_category_name")).sendKeys(category);
		driver.findElement(By.id("price")).sendKeys(price);
		driver.findElement(By.id("SAVE")).click();
			
	}
	
	@And ("^Verify the \"(.*)\" is created$")
	public void verifyProduct(String product) {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[3]/div/div/div[2]/ul/li[2]/a")));
		driver.findElement(By.xpath("/html/body/div[2]/div/div/div[1]/ul/li[2]/a/div[2]")).click();
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[4]/div/div[1]/h2")));
		String productname = driver.findElement(By.xpath("/html/body/div[4]/div/div[3]/form[2]/div[3]/table/tbody/tr[1]/td[3]/b/a")).getText();
		Assert.assertEquals(product, productname);
	}
	
	@And ("^Close the product Browser$")
	public void browserclose() {
		driver.close();
	}
}
