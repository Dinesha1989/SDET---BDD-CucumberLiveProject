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


public class HRMAddMultipleEmployees {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the HRM Login page$")
	public void HRMLogin () {
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login");
		driver.findElement(By.id("txtUsername")).sendKeys("orange");
		driver.findElement(By.id("txtPassword")).sendKeys("orangepassword123");
		driver.findElement(By.id("btnLogin")).click();
	}
	
	@When ("^User Click on PIM option in Menu$")
	public void clickPIM () {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div[2]/fieldset/div/div/table/tbody/tr/td[2]")));
		driver.findElement(By.id("menu_pim_viewPimModule")).click();
		
	}
	
	@Then ("^Click on Add Employee Button$")
	public void clickAddEmployee() {
		
		driver.findElement(By.id("btnAdd")).click();
	}
	
	@And ("^Fill all the necessary Details like \"(.*)\" and \"(.*)\"$")
	public void employeeeDetails(String firstName, String lastName) {
		
		driver.findElement(By.id("firstName")).sendKeys(firstName);
		driver.findElement(By.id("lastName")).sendKeys(lastName);
		
	}
	
	@And ("^Check CreateLoginDetails checkbox and Enter \"(.*)\" and \"(.*)\" and save it$")
	public void loginDetails(String userName, String password) {
		
		
		driver.findElement(By.name("chkLogin")).click();
		driver.findElement(By.id("user_name")).sendKeys(userName);
		driver.findElement(By.id("user_password")).sendKeys(password);
		driver.findElement(By.id("re_password")).sendKeys(password);
		driver.findElement(By.id("btnSave")).click();
	}
	
	@And ("^Verify Employee is created by using \"(.*)\" and \"(.*)\"$")
	public void verifyEmployee(String firstName, String lastName) throws InterruptedException {
		
		String name = firstName+ lastName;
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[1]/div[3]/div/div[1]/ul/li[2]/a")));
		driver.findElement(By.id("menu_pim_viewPimModule")).click();
		//wait.until(ExpectedConditions.elementToBeClickable(By.id("empsearch_employee_name_empName")));
		//driver.findElement(By.name("empsearch[employee_name][empName]")).clear();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.id("empsearch_employee_status")).click();
		driver.findElement(By.id("empsearch_termination")).click();
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div[2]/form/fieldset/ol/li[4]/select/option[1]")).click();
		driver.findElement(By.id("empsearch_job_title")).click();
		driver.findElement(By.id("empsearch_sub_unit")).click();
		Thread.sleep(10000);
		driver.findElement(By.name("empsearch[employee_name][empName]")).sendKeys(firstName);
		driver.findElement(By.id("searchBtn")).click();
		String emp = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/form/div[4]/table/tbody/tr/td[3]/a")).getText();
		System.out.println(emp);
		Assert.assertEquals(firstName, emp);
	}
	
	@And ("^Close the Employee Broswer$")
	public void browserClose() {
		driver.close();
	}
}

