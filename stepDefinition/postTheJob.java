package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class postTheJob {
	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the page$")
	public  void jobsPage() {
		
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("https://alchemy.hguy.co/jobs/");
		
	}
	
	@When ("^User click on 'Post a Job'$")
	public void enterPostJobPage() {
		
		driver.findElement(By.xpath("/html/body/div[1]/header/div/div/div/div/div[3]/div/nav/div/ul/li[3]/a")).click();
		
	}
	
	@Then ("^Enter email as \"(.*)\", position as \"(.*)\" and Location as \"(.*)\" and description as \"(.*)\"$")
	public void jobDetails(String email, String Title, String Location, String desc) {
		
		driver.findElement(By.id("create_account_email")).sendKeys(email);
		driver.findElement(By.id("job_title")).sendKeys(Title);
		driver.findElement(By.id("job_location")).sendKeys(Location);
		driver.findElement(By.id("job_description_ifr")).sendKeys(desc);
		
	}
	
	@And ("^application email as \"(.*)\", Company name as \"(.*)\" and Website as \"(.*)\"$")
	public void companyDetails(String appemail, String company, String website) {
		driver.findElement(By.id("application")).sendKeys(appemail);
		driver.findElement(By.id("company_name")).sendKeys(company);
		driver.findElement(By.id("company_website")).sendKeys(website);
	}
	@And ("^Click on Submit$")
	public void submit() {
		driver.findElement(By.name("submit_job")).click();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.id("job_preview_submit_button")).click();
		String message = driver.findElement(By.xpath("/html/body/div[2]/div/div/div/main/article/div")).getText();
		System.out.println(message);
	}
	
	@And ("^Find the Job on Jobs page$")
	public void FindJob() {
		driver.findElement(By.xpath("/html/body/div[2]/header/div/div/div/div/div[3]/div/nav/div/ul/li[1]/a")).click();
		driver.findElement(By.id("search_keywords")).sendKeys("D_testing");
		driver.findElement(By.xpath("/html/body/div/div/div/div/main/article/div/div/form/div[1]/div[4]/input")).click();
		String JobTitle = driver.findElement(By.xpath("/html/body/div[2]/div/div/div/main/article/div/div/ul/li/a/div[1]/h3")).getText();
		Assert.assertEquals("D_testing", JobTitle);
	}
	
	@And ("^Close the Job Post Browser$")
	public void browserPostClose () {
		driver.close();
	}
}
