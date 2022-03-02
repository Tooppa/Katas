class Program
{
    public static void ValidatePIN(string str)
    {
        bool result = true;
        if (string.IsNullOrEmpty(str) || str.Length > 4 || str.Length < 4) result = false;
        else foreach (char c in str) if (!char.IsDigit(c)) result = false;
        Console.WriteLine(result);
    }
    public static void Main()
    {
        ValidatePIN("1234");// ➞ true

        ValidatePIN("12345");// ➞ false

        ValidatePIN("a234");// ➞ false

        ValidatePIN("");// ➞ false
    }
}