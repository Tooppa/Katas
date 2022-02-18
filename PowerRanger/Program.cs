class Program1
{
    static void PowerRanger(int n, int a, int b)
    {
        int num = 0;
        for (int i = 1; i <= b; i++)
        {
            int square = (int)Math.Pow(i, n);
            if (square <= b && square >= a) num++;
        }
        Console.WriteLine(num);
    }
    static void Main()
    {
        PowerRanger(2, 49, 65);// ➞ 2
                               // 2 squares (n^2) lie between 48 and 65, 49 (7^2) and 64 (8^2)

        PowerRanger(3, 1, 27);// ➞ 3
                              // 3 cubes (n^3) lie between 1 and 27, 1 (1^3), 8 (2^3) and 27 (3^3)

        PowerRanger(10, 1, 5);// ➞ 1
                              // 1 value raised to the 10th power lies between 1 and 5, 1 (1^10)

        PowerRanger(5, 31, 33);// ➞ 1

        PowerRanger(4, 250, 1300);// ➞ 3
    }
}