string[] lines = File.ReadAllLines("lines.txt");
string langName = "english";
List<string> parsedLines = new List<string>();

// initial parsing
foreach(string line in lines) 
{
    if(Char.IsNumber(line[0])) // change condition as needed to accomodate the formatting of the input file
    {
        string[] splitL = line.Split(".");
        parsedLines.Add("\"" + splitL[1].Trim() + ".\"");
    }
}

// initial parsing for the russian PDF, imperfect as the PDF is nigh impossible to properly parse
/*
for(int i = 1; i < lines.Length / 2; i++) 
{
    if(lines[i] != "" && lines[i-1] != "" && Char.IsLetter(lines[i][0]) && Char.IsNumber(lines[i-1][0]))
    {
        parsedLines.Add("\"" + lines[i] + ".\"");
    }
} 
*/

// sentence file
List<string> sentLines = new List<string>();

sentLines.Add("let harvardSentences = ");
sentLines.Add("[");

foreach(string line in parsedLines) 
{
    sentLines.Add("\t" + line + ",");
}

sentLines[^1] = sentLines.ElementAt(sentLines.Count - 1).Remove(sentLines.ElementAt(sentLines.Count - 1).Length - 1);
sentLines.Add("];");

File.WriteAllLines($"{langName}Sent.js", sentLines);

// list file
List<string> listLines = new List<string>();

listLines.Add("let harvardSentences = ");
listLines.Add("[");

for(int i = 0; i < parsedLines.Count; i++) 
{
    if((i+1) % 10 == 1) 
    {
        listLines.Add("\t[");
        listLines.Add("\t" + parsedLines.ElementAt(i) + ",");
    }
    else if((i+1) % 10 == 0) 
    {
        listLines.Add("\t" + parsedLines.ElementAt(i));
        listLines.Add("\t],");
    }
    else 
    {
        listLines.Add("\t" + parsedLines.ElementAt(i) + ",");
    }
}

listLines[^1] = listLines.ElementAt(listLines.Count - 1).Remove(listLines.ElementAt(listLines.Count - 1).Length - 1);
listLines.Add("];");

File.WriteAllLines($"{langName}List.js", listLines);
