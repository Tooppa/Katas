class Program
{
    static void Decode(string str)
    {
        string newStr = "";
        foreach(char c in str)
        {
            if (Char.IsDigit(c))
            {
                for(int i = 1; i < (c - '0'); i++)
                {
                    newStr += newStr.Last();
                }
                continue;
            }
            newStr += c;
        }
        Console.WriteLine(newStr);
    }
    static void Main()
    {
        Decode("A4B5C2");//AAAABBBBBCC
        Decode("C2F1E5");//CCFEEEEE
        Decode("T4S2V2");//TTTTSSVV
        Decode("A1B2C3D4");//ABBCCCDDDD
    }
}