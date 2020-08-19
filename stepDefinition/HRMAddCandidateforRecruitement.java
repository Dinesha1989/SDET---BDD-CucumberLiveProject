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

public class HRMAddCandidateforRecruitement {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given ("^User is on the HRM jobs page$")
	public void HRMLogin () {
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver, 20);
		driver.get("http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login");
		driver.findElement(By.id("txtUsername")).sendKeys("orange");
		driver.findElement(By.id("txtPassword")).sendKeys("orangepassword123");
		driver.findElement(By.id("btnLogin")).click();
	}
	
	@When ("^User Navigate to the Recruitment page and click on the Add button$")
	public void navigateToRecruitement() {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div[2]/fieldset/div/div/table/tbody/tr/td[2]")));
		driver.findElement(By.id("menu_recruitment_viewRecruitmentModule")).click();
		driver.findElement(By.id("btnAdd")).click();
	}
	
	@Then ("^Enter all required information$")
	public void CandidateInfo() {
		
		driver.findElement(By.id("addCandidate_firstName")).sendKeys("chethan6");
		driver.findElement(By.id("addCandidate_lastName")).sendKeys("Kumar");
		driver.findElement(By.id("addCandidate_email")).sendKeys("ram232@gmail.com");
		driver.findElement(By.id("addCandidate_vacancy")).click();
		driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div[2]/form/fieldset/ol[2]/li[1]/select/option[17]")).click();
		
	}
	
	@And ("^Upload Resume to the form and save it$")
	public void resumeUpload() {
		
		driver.findElement(By.id("addCandidate_resume")).sendKeys("C:\\Users\\Dineshas\\Desktop\\din_resume.docx");
		driver.findElement(By.id("btnSave")).click();
		
	}
	
	@And ("^Verify Candidate is added$")
	public void candidateVerification() {
		driver.findElement(By.id("btnBack")).click();
		driver.findElement(By.id("candidateSearch_candidateName")).sendKeys("chethan6 Kumar");
		driver.findElement(By.id("btnSrch")).click();
		String candidate = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/form/div[4]/table/tbody/tr[1]/td[3]/a")).getText();
		System.out.println(candidate);
		Assert.assertEquals("chethan6 Kumar", candidate);
				
	}
	
	@And ("^Close the HRM Job Browser$")
	public void CloseHRMBrowser() {
		driver.close();
	}
	
}
