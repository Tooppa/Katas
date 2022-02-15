class Program
{
    static void Reverse(string str)
    {
        static char reverseCase(char c) => Char.IsUpper(c) ? Char.ToLower(c) : Char.ToUpper(c);
        Console.WriteLine(String.Concat(str.Select(c => reverseCase(c))));
    }
    static void Main()
    {
        Reverse("Happy Birthday");
        Reverse("MANY THANKS");
        Reverse("sPoNtAnEoUs"); 
    }
}