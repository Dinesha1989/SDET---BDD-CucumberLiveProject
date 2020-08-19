package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class CRMCountDashlet {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the CRM page$")
	public void openCRM() {
		
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("https://alchemy.hguy.co/crm/index.php?action=Login&module=Users");
	}
	
	@When ("^user enter \"(.*)\" and \"(.*)\"$")
	public void login(String username, String password) {
		
		driver.findElement(By.id("user_name")).sendKeys(username);
		driver.findElement(By.id("username_password")).sendKeys(password);
		driver.findElement(By.id("bigbutton")).click();
	}
	
	@Then ("^Count the number of Dashlets on the homepage and print the Count and each Dashlettitle$")
	public void countDashlet() {
		
		//driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("dashlet_849b2dac-a202-a5f2-0cf9-5db0c1b02e20")));
		//int dashletno = driver.findElements(By.id("dashlet_849b2dac-a202-a5f2-0cf9-5db0c1b02e20")).size();
		List<WebElement> List = driver.findElements(By.xpath("/html/body/div[3]/div/div/div[1]/div[2]/div/div[2]/div/table"));
		System.out.println(List);
		int dashletno = driver.findElements(By.xpath("/html/body/div[3]/div/div/div[1]/div[2]/div/div[2]/div/table")).size();
		System.out.println("Number of Dashlets are: "+dashletno);
		//String title1 = driver.findElement(By.id("dashlet_849b2dac-a202-a5f2-0cf9-5db0c1b02e20")).getText();
		String title1 = driver.findElement(By.id("dashlet_849b2dac-a202-a5f2-0cf9-5db0c1b02e20")).getText();
		System.out.println(title1);
		
	}
	
	@And ("^Close the CRM Browser$")
	public void crmBrowserClose() {
		
		driver.close();
		
	}
}
