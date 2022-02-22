public class Program
{
    public static int SumFF(int num, int depth)
    {
        List<int> factorials = new List<int>();
        if (depth == 2) return num;
        else factorials.Append(0);
        for (int i = 2; i < num; i++)
        {
            if(num % i == 0)
            {
                factorials.Append(SumFF(i, depth + 1));
            }
        }
        return factorials.Sum();
    }
    public static void Main()
    {
        Console.WriteLine(SumFF(69, 0));// ➞ 3, 23 ➞ 0
                                     // Both 3 and 23 are prime numbers and have no factors
                                     // other than 1 and themselves so the result is 0.

        Console.WriteLine(SumFF(12, 0));// ➞ 2, 3, 4, 6 ➞ (0) + (0) + (2) + (2+3) ➞ 7

        Console.WriteLine(SumFF(420, 0));// ➞ 2,4, 6, 10, 12 ... ➞ (2) + (2+3) + (2+5) + (2+3+4+6) ... ➞ 1175

        Console.WriteLine(SumFF(619, 0));// ➞ ___ ➞ 0
        // 619 doesn't have any factors (other than 1 and 619).
    }
}