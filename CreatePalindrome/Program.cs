
class Program
{
    static bool IsPalindrome(string str)
    {
        return str.SequenceEqual(str.Reverse());
    }
    static void MinPalindromeSteps(string str, int moves)
    {
        if (IsPalindrome(str))
        {
            Console.WriteLine(str);
            return;
        }
        else
        {
            string newString = "";
            if (moves == 0)
            {
                newString = str + str[moves];
            }
            else
            {
                newString = str.Insert(str.Length - moves,str[moves].ToString());
            }
            MinPalindromeSteps(newString, moves + 1);
        }
    }
    static void Main()
    {
        MinPalindromeSteps("race",0);
        MinPalindromeSteps("mada",0);
        MinPalindromeSteps("mirror",0);
    }
}