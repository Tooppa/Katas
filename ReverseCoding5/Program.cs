
class Program
{
    static void Decode(int num)
    {
        string sorted = String.Join("",num.ToString().ToList().OrderBy(x => x).ToArray());
        int newNum = num - Int32.Parse(sorted);
        Console.WriteLine(newNum);
    }
    static void Main()
    {
        Decode(832);//594
        Decode(51);//36
        Decode(7977);//198 ? does not work
        Decode(1);//0
        Decode(665);//99
        Decode(149);//0
    }
}
