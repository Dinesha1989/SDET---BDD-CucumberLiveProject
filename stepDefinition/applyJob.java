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

public class applyJob {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the Jobs page$")
	public  void jobsPage() {
		
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("https://alchemy.hguy.co/jobs/");
		driver.findElement(By.xpath("/html/body/div/header/div/div/div/div/div[3]/div/nav/div/ul/li[1]/a")).click();
	}
	
	@When ("^User Find the Keywords search input field and serach for 'D_testing'$")
	public void searchJob() {
		
		driver.findElement(By.id("search_keywords")).sendKeys("D_testing");
		//driver.findElement(By.xpath("//*[@id=\"job_type_freelance\"]")).click();
		//driver.findElement(By.xpath("//*[@id=\"job_type_internship\"]")).click();
		//driver.findElement(By.xpath("//*[@id=\"job_type_temporary\"]")).click();
		driver.findElement(By.xpath("/html/body/div/div/div/div/main/article/div/div/form/div[1]/div[4]/input")).click();
			
	}
	
	@Then ("^Find the Job Details from the List$")
	public void findJobDetails() {
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.findElement(By.xpath("/html/body/div/div/div/div/main/article/div/div/ul/li/a/div[1]/h3")).click();
	}
	
	
	@And ("^Read the Title of the JoB Details page and print it$")
	public void pageTitle() {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div/div/div/div/main/article/div/div/div/div[3]/input")));
		String Title = driver.getTitle();
		System.out.println("Title of the page is: "+ Title);
		
	}
	
	@And ("^apply for Job$")
	public void applyforJob() {
		
		driver.findElement(By.xpath("/html/body/div/div/div/div/main/article/div/div/div/div[3]/input")).click();
		String message = driver.findElement(By.xpath("/html/body/div/div/div/div/main/article/div/div/div/div[3]/div/p")).getText();
		System.out.println(message);
		Assert.assertEquals("To apply for this job email your details to dinesh@gmail.com", message);
		
	}
	@And ("^Close the Job Browser$")
	public void browserClose1() {
		driver.close();
	}
}
