package stepDefinition;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;



public class createLead {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the CRM page and enter \"(.*)\" and \"(.*)\"$")
	public void openCRMAndlogin(String username, String password) {
		
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("https://alchemy.hguy.co/crm/index.php?action=Login&module=Users");
		driver.findElement(By.id("user_name")).sendKeys(username);
		driver.findElement(By.id("username_password")).sendKeys(password);
		driver.findElement(By.id("bigbutton")).click();
	}
	
	@When ("^Create Lead from sales Menu$")
	public void LeadCreate() throws InterruptedException {
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("dashlet_849b2dac-a202-a5f2-0cf9-5db0c1b02e20")));
		
		WebElement Sales = driver.findElement(By.id("grouptab_0"));
		Actions act = new Actions(driver);
		act.moveToElement(Sales).perform();
		
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@id='grouptab_0']//..//li/a[text()='Leads']")));
		driver.findElement(By.xpath("//a[@id='grouptab_0']//..//li/a[text()='Leads']")).click();
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[3]/div/div/div[1]/ul/li[1]/a/div[2]")));
		driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/ul/li[1]/a/div[2]")).click();
	}
	
	@Then ("^Enter firstName as \"(.*)\", LastName as \"(.*)\" and acccountName as \"(.*)\" and save it$")
	public void leadDetails(String FName, String LName, String account) {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("first_name")));
		driver.findElement(By.id("first_name")).sendKeys(FName);
		driver.findElement(By.id("last_name")).sendKeys(LName);
		driver.findElement(By.id("EditView_account_name")).sendKeys(account);
		driver.findElement(By.id("SAVE")).click();
	}
	
	@And ("^Verify the Leads \"(.*)\" from viewLead page$")
	public void verifyLead(String fullName) {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("tab0")));
		driver.findElement(By.xpath("/html/body/div[2]/div/div/div[1]/ul/li[3]/a/div[2]")).click();
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[4]/div/div[1]/h2")));
		String Lead = driver.findElement(By.xpath("/html/body/div[4]/div/div[3]/form[2]/div[3]/table/tbody/tr[1]/td[3]/b/a")).getText();
		Assert.assertEquals(fullName, Lead);
	}
	
	@And ("^Close the leads Browser$")
	public void browserclose() {
		driver.close();
	}
}
