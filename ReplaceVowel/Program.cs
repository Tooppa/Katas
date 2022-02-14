class Program
{
    static void replaceVowel(string str)
    {
        string newStr = "";
        foreach (char c in str)
        {
            switch (Char.ToLower(c))
            {
                case 'a':
                    newStr += "1";
                    break;
                case 'e':
                    newStr += "2";
                    break;
                case 'i':
                    newStr += "3";
                    break;
                case 'o':
                    newStr += "4";
                    break;
                case 'u':
                    newStr += "5";
                    break;
                default:
                    newStr += c;
                    break;
            }
        }
        Console.WriteLine(newStr);
    }
    static void Main()
    {
        replaceVowel("karAchi");
        replaceVowel("chEmBur");
        replaceVowel("khandbari");
        replaceVowel("LexiCAl");
        replaceVowel("fuNctionS");
        replaceVowel("EASY");
    }
}