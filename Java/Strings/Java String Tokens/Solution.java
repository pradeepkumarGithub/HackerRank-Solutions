import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        // Write your code here.
        s = s.trim();
        String[] tokens = s.split("[^\\p{Alpha}]+");
        int tokenCount = (s.isEmpty()) ? 0 : tokens.length;
        System.out.println(tokenCount);
        for (String token : tokens) {
            System.out.println(token);
        }
        scan.close();
    }
}
