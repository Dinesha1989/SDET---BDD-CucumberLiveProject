package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;



public class HRMJJobVacancyCreate {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the HRM page$")
	public void HRMLogin () {
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login");
		driver.findElement(By.id("txtUsername")).sendKeys("orange");
		driver.findElement(By.id("txtPassword")).sendKeys("orangepassword123");
		driver.findElement(By.id("btnLogin")).click();
	}
	
	@When ("^User Navigate to the 'Recruitment' page$")
	public void recruitmentPage()  {
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div[2]/fieldset/div/div/table/tbody/tr/td[2]")));
		driver.findElement(By.id("menu_recruitment_viewRecruitmentModule")).click();
		//driver.findElement(By.id("menu_recruitment_viewRecruitmentModule")).click();
	}
	
	@Then ("^Click on the 'Vacancies' menu item and click on Add button$")
	public void vacanciesMenu() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		Thread.sleep(5000);
		driver.findElement(By.id("menu_recruitment_viewJobVacancy")).click();
		driver.findElement(By.id("btnAdd")).click();
	}
	
	@And ("^Enter all the required details and save it$")
	public void jobVacancyDetails() {
		
		driver.findElement(By.id("addJobVacancy_jobTitle")).click();
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/form/fieldset/ol/li[1]/select/option[2]")).click();
		driver.findElement(By.id("addJobVacancy_name")).sendKeys("D_Auto_Test18");
		driver.findElement(By.id("addJobVacancy_hiringManager")).sendKeys("Deb Kumar");
		driver.findElement(By.id("btnSave")).click();
		
	}
	
	@And ("^Enter Vacancy as \"(.*)\" and manager as \"(.*)\"$")
	public void vacancyDetails(String vacancy, String Manager) {
		
		driver.findElement(By.id("addJobVacancy_jobTitle")).click();
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/form/fieldset/ol/li[1]/select/option[2]")).click();
		driver.findElement(By.id("addJobVacancy_name")).sendKeys(vacancy);
		driver.findElement(By.id("addJobVacancy_hiringManager")).sendKeys(Manager);
		driver.findElement(By.id("btnSave")).click();
	}
	
	@And ("^Verify JoB vacancy \"(.*)\" is created$")
	public void mulitijobCreationVerification(String vacancy) throws InterruptedException {
		
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.id("btnBack")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.id("vacancySearch_hiringManager")).click();
		driver.findElement(By.id("vacancySearch_status")).click();
		Thread.sleep(10000);
		//wait.until(ExpectedConditions.elementToBeClickable(By.id("vacancySearch_jobVacancy")));
		Select dropdown = new Select(driver.findElement(By.id("vacancySearch_jobVacancy")));
		dropdown.selectByVisibleText(vacancy);
		//driver.findElement(By.id("vacancySearch_jobVacancy")).click();
		//driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div[2]/form/fieldset/ol/li[2]/select/option[37]")).click();
		driver.findElement(By.id("btnSrch")).click();
		//String jobTitle = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/form/div[4]/table/tbody/tr[36]/td[2]/a")).getText();
		String jobTitle = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/form/div[4]/table/tbody/tr/td[2]/a")).getText();
		System.out.println(jobTitle);               
		Assert.assertEquals(vacancy, jobTitle);
	}
	
	@And ("^Verify JoB vacancy is created$")
	public void jobCreationVerification() throws InterruptedException {
		
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.id("btnBack")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		//wait.until(ExpectedConditions.elementToBeClickable(By.id("vacancySearch_jobVacancy")));
		driver.findElement(By.id("vacancySearch_hiringManager")).click();
		driver.findElement(By.id("vacancySearch_status")).click();
		Thread.sleep(10000);
		//wait.until(ExpectedConditions.elementToBeSelected(By.id("vacancySearch_jobVacancy")));
		Select dropdown = new Select(driver.findElement(By.id("vacancySearch_jobVacancy")));
		dropdown.selectByVisibleText("D_Auto_Test18");
		//driver.findElement(By.id("vacancySearch_jobVacancy")).click();
		//driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div[2]/form/fieldset/ol/li[2]/select/option[37]")).click();
		driver.findElement(By.id("btnSrch")).click();
		//String jobTitle = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/form/div[4]/table/tbody/tr[36]/td[2]/a")).getText();
		String jobTitle = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/form/div[4]/table/tbody/tr/td[2]/a")).getText();
		System.out.println(jobTitle);               
		Assert.assertEquals("D_Auto_Test18", jobTitle);
	}
	
	@And ("^Close the HRM Browser$")
	public void CloseHRMBrowser() {
		driver.close();
	}
	
	
}
