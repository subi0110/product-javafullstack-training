import java.util.Scanner;
public class Employee{
public static void main(String[] args){
       int employeeId;
       String employeeName;
       Double employeeSalary;

       Scanner sc = new Scanner(System.in); 

       System.out.println("enter the employee id");
       employeeId=sc.nextInt();

       System.out.println("enter the employee name");
       employeeName=sc.next();

       System.out.println("enter the employee salary");
       employeeSalary=sc.nextDouble();

       System.out.println("enter the employee id:" + employeeId);
       System.out.println("enter the employee name:" + employeeName);
       System.out.println("enter the employee salary:" + employeeSalary);


       

    }
}