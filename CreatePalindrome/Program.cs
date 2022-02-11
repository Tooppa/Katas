
class Program
{
    static void minPalindromeSteps(string str)
    {
        char temp = ' ';
        int i = 0;
        foreach (char c in str)
        {
            if (c == temp)
            {
                Console.WriteLine(str[i]);
                return;
            }
            i++;
            temp = c;
        }
    }
    static void Main()
    {
        minPalindromeSteps("race");
        minPalindromeSteps("mada");
        minPalindromeSteps("mirror");
    }
}