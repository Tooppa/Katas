using System;
class Program
{
    static void Main()
    {
        existsHigher(new int[] { 5, 3, 15, 22, 4 }, 10);
        existsHigher(new int[] { 1, 2, 3, 4, 5 }, 8);
        existsHigher(new int[] { 4, 3, 3, 3, 2, 2, 2 }, 4);
        existsHigher(new int[] { -10, -99, -57, -4 }, -4);
        existsHigher(new int[] { 5 }, 5);
        existsHigher(new int[] { 99, 99 }, 99);
        existsHigher(new int[] { }, 5);
    }

    static void existsHigher(int[] arr, int num)
    {
        foreach (int i in arr)
        {
            Console.WriteLine(i);
        }
    }
}