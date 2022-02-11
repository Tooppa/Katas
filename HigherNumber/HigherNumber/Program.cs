using System;
class Program
{
    static void Main()
    {
        Console.WriteLine(existsHigher(new int[] { 5, 3, 15, 22, 4 }, 10));
        Console.WriteLine(existsHigher(new int[] { 1, 2, 3, 4, 5 }, 8));
        Console.WriteLine(existsHigher(new int[] { 4, 3, 3, 3, 2, 2, 2 }, 4));
        Console.WriteLine(existsHigher(new int[] { -10, -99, -57, -4 }, -4));
        Console.WriteLine(existsHigher(new int[] { 5 }, 5));
        Console.WriteLine(existsHigher(new int[] { 99, 99 }, 99));
        Console.WriteLine(existsHigher(new int[] { }, 5));
    }

    static bool existsHigher(int[] arr, int num)
    {
        foreach (int i in arr)
        {
            if (i > num) return true;
        }
        return false;
    }
}