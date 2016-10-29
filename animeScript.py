import subprocess
import shutil
import shlex
import re
import ass 
import os
def takeSnapshots(fileName,ep):
    amountPerEp = 10
    episodeTime = 20*60
    ignoreTime = 60*3
    interval = int((episodeTime - 2*ignoreTime)/amountPerEp - 0.01)
    base = "kearnie/screencaps/"
    extractTimes = [i for i in range(ignoreTime,episodeTime-ignoreTime,interval)]
    for i in range(len(extractTimes)):
        time = extractTimes[i]
        args = ["mpv","-ao","null","-sid","no","-ss",str(int(time)),"-frames","1","-vo","image",
        "--vo-image-format=png", fileName]
        try:
          subprocess.run(args)
          shutil.move("00000001.png",base + "%d.png" % (ep*amountPerEp+i))
        except:
          print("fal")
trackRegex = re.compile("mkvextract:\s(\d)")
removeBrackets = regex = re.compile(".*?\((.*?)\}")
def getSubtitleTracks(fileName):
    output = subprocess.check_output(["mkvinfo",fileName],universal_newlines=True).splitlines()
    currentTrack = None
    sub_tracks = []
    for line in output:
        if "Track number:" in line:
            trackNumber = trackRegex.search(line).group(1)
            currentTrack = trackNumber
        if "S_TEXT/ASS" in line:
            sub_tracks.append(currentTrack)
    return sub_tracks
def exportSRT(fileName, track):
    srtName = fileName + "-%s.srt" % track
    args = ["mkvextract", "tracks",fileName, "%s:%s" % (track,srtName)]
    subprocess.run(args)
    return srtName
def cleanLine(line):
    newLine = ""
    inBracket = False
    lastBackSlash = False
    for c in line:
        if c == "{":
            inBracket = True
        elif c == "}":
            inBracket == False
        elif not inBracket:
            if c == "\\":
                lastBackSlash = True
            elif c != "N" or not lastBackSlash:
                newLine += c
                lastBackSlash = False
    return newLine

def extractTextFromSubtitles(fileName):
    tracks = getSubtitleTracks(fileName)
    output = ""
    for track in tracks:
        srtName = exportSRT(fileName, track)
        lines = []
        with open(srtName,"r") as f:
            doc = ass.parse(f)
            for event in doc.events:
                lines.append(cleanLine(event.text))
        combined = "\n".join(lines)
        if "in" in combined or "to" in combined or "for" in combined:
            output += combined
    return output

def extractFromFile(fileName,ep):
    os.makedirs("kearnie/screencaps/",exist_ok=True)
    text = extractTextFromSubtitles(fileName)
    with open("kearnie/subs.txt","a") as f:
        f.write(text)
    takeSnapshots(fileName,ep)
def extractSeries():
    ep = 0
    for filename in os.listdir("."):
        if filename.endswith(".mkv"):
            extractFromFile(filename,ep)
            ep += 1

extractSeries()
