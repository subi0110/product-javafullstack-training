import java.util.*;
class MainS{
 static boolean isPrime(int num) {
    boolean isprime = false;
    for (int i = 2; i < num; i++) {
        if (num % 2 == 0) {
            isprime = true;
            break;
        }
    }
    return isprime;
}
public static void main(String[] args) {
    System.out.println(MainS.isPrime(56)); 
}
}