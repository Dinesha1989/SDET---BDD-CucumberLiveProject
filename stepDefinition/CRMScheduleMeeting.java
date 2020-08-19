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

public class CRMScheduleMeeting {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the CRM login page and enter \"(.*)\" and \"(.*)\"$")
	public void openCRMAndlogin(String username, String password) {
		
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("https://alchemy.hguy.co/crm/index.php?action=Login&module=Users");
		driver.findElement(By.id("user_name")).sendKeys(username);
		driver.findElement(By.id("username_password")).sendKeys(password);
		driver.findElement(By.id("bigbutton")).click();
	}
	
	@When ("^Open 'Activities' then 'meeting' and click on schedule meeting$")
	public void openMeeting() {
		
	    wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("dashlet_849b2dac-a202-a5f2-0cf9-5db0c1b02e20")));
		
		WebElement Activities = driver.findElement(By.id("grouptab_3"));
		Actions act = new Actions(driver);
		act.moveToElement(Activities).perform();
		
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@id='grouptab_3']//..//li/a[text()='Meetings']")));
		driver.findElement(By.xpath("//a[@id='grouptab_3']//..//li/a[text()='Meetings']")).click();
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[3]/div/div/div[1]/ul/li[1]/a/div[2]")));
		driver.findElement(By.xpath("/html/body/div[3]/div/div/div[1]/ul/li[1]/a/div[2]")).click();
		
	}
	
	@Then ("^Enter all the details with sub \"(.*)\"$")
	public void meetingDetails(String sub) {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("save_and_send_invites_header")));
		driver.findElement(By.id("name")).sendKeys(sub);
		
	}
	
	@And ("^Search for the memeber \"(.*)\"and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" add them to meeting and save it$")
	public void memberAdd(String fName1, String LName1, String fName2, String LName2, String fName3, String LName3 ) {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("search_first_name")));
		driver.findElement(By.id("search_first_name")).sendKeys(fName1);
		driver.findElement(By.id("search_last_name")).sendKeys(LName1);
		driver.findElement(By.id("invitees_search")).click();
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[4]/div/form/div[3]/div[3]/table/tbody/tr[2]/td[2]")));
		driver.findElement(By.id("invitees_add_1")).click();
		driver.findElement(By.id("search_first_name")).clear();
		driver.findElement(By.id("search_first_name")).sendKeys(fName2);
		driver.findElement(By.id("search_last_name")).clear();
		driver.findElement(By.id("search_last_name")).sendKeys(LName2);
		driver.findElement(By.id("invitees_search")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("invitees_add_1")));
		driver.findElement(By.id("invitees_add_1")).click();
		driver.findElement(By.id("search_first_name")).clear();
		driver.findElement(By.id("search_first_name")).sendKeys(fName3);
		driver.findElement(By.id("search_last_name")).clear();
		driver.findElement(By.id("search_last_name")).sendKeys(LName3);
		driver.findElement(By.id("invitees_search")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("invitees_add_1")));
		driver.findElement(By.id("invitees_add_1")).click();	
		driver.findElement(By.id("SAVE_HEADER")).click();
	}
	
	@And ("^Open the View meeting page and confirm \"(.*)\" meeting creation$")
	public void meetingConfirmation(String Meeting) {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("tab0")));
		driver.findElement(By.xpath("/html/body/div[2]/div/div/div[1]/ul/li[2]/a/div[2]")).click();
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[4]/div/div[1]/h2")));
		String meetingsub = driver.findElement(By.xpath("/html/body/div[4]/div/div[3]/form[2]/div[3]/table/tbody/tr[1]/td[4]/b/a")).getText();
		Assert.assertEquals(Meeting, meetingsub);
		
	}
	
	@And ("^Close the meeting browser$")
	public void closeMeetingBrowser() {
		driver.close();
	}
}
