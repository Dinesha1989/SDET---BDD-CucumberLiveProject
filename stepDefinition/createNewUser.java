package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class createNewUser {
	
	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the Login page$")
	public void loginPage() {
		
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("https://alchemy.hguy.co/jobs/wp-login.php?");
		
	}
	
	@When ("^User enter \"(.*)\" and \"(.*)\"$")
	public void login(String Username, String Password) {
		
		driver.findElement(By.id("user_login")).sendKeys(Username);
		driver.findElement(By.id("user_pass")).sendKeys(Password);
		driver.findElement(By.id("wp-submit")).click();
	}
	
	@Then ("^User click the menu item that says 'Users' on DashBoard$")
	public void userMenuItem () {
		
		driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[2]/ul/li[11]/a/div[3]")).click();
	}
	
	@And ("^Click on 'Add New' button$")
	public void addNewUser() {
		
		driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[2]/ul/li[11]/ul/li[3]/a")).click();
		
	}
	
	@And ("^Fill all the necessary details and click the 'Add New User' button$")
	public void fillTheDetails() {
		
		driver.findElement(By.id("user_login")).sendKeys("DSample2");
		driver.findElement(By.id("email")).sendKeys("DSample2@gmail.com");
		driver.findElement(By.id("first_name")).sendKeys("Dinesh");
		driver.findElement(By.id("last_name")).sendKeys("S");
		driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div[1]/div[4]/form/table/tbody/tr[6]/td/button")).click();
		driver.findElement(By.id("pass1")).clear();
		driver.findElement(By.id("pass1")).sendKeys("Password123");
		driver.findElement(By.name("pw_weak")).click();
		driver.findElement(By.id("createusersub")).click();
		
	}
	
	@And ("^Verify that the user was created$")
	public void userCreated() {
		
		driver.findElement(By.id("user-search-input")).sendKeys("DSample1");
		driver.findElement(By.id("search-submit")).click();
		String User = driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div[1]/div[4]/form/table/tbody/tr[1]/td[1]/strong/a")).getText();
		Assert.assertEquals("DSample1", User);
	}
	
	@And ("^Close the Browser$")
	public void browserClose() {
		driver.close();
	}
}
