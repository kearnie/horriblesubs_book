import rita.*;
import java.util.*;

//RiTa Markov Chain example template
//Does not contain JSON attributes yet :( 

JSONArray subtitles;
int count = 0;

RiMarkov markov;
String line = "click to (re)generate!";
String[] files = { "../data/durarara.txt", 
                   "../data/fmab.txt",
                   "../data/geass.txt",
                   "../data/naruto.txt",
                   "../data/wata.txt" };
int x = 160, y = 240;

void setup()
{
  size(500, 500);

  fill(0);
  textFont(createFont("times", 16));

  // create a markov model w' n=2 from the files
  markov = new RiMarkov(2);
  markov.loadFrom(files, this);
  subtitles = new JSONArray();
}

void draw()
{
  background(250);
  text(line, x, y, 400, 400);
}

void mouseClicked()
{
  if (!markov.ready()) return;
  x = y = 50;
  String[] lines = markov.generateSentences(1);
  line = RiTa.join(lines, " ");
  
  JSONObject subtitle = new JSONObject();
  subtitle.setString("subtitle", lines[0]);
  subtitles.setJSONObject(count, subtitle);
  println(lines[0]);
  if (lines[0] != null) {
    saveJSONArray(subtitles, count + ".json");
  count++;
  }
}