using System;
class Program
{
    void existsHigher(int[] arr, int num)
    {
        foreach (int i in arr)
        {

        }
    }
    void Main()
    {
        existsHigher([5, 3, 15, 22, 4], 10);
        existsHigher([1, 2, 3, 4, 5], 8);
        existsHigher([4, 3, 3, 3, 2, 2, 2], 4);
        existsHigher([-10, -99, -57, -4], -4);
        existsHigher([5], 5);
        existsHigher([99, 99], 99);
        existsHigher([], 5);
    }
}