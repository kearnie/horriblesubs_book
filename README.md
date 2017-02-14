# horriblesubs_book
generative anime &amp; nonsensical subtitles book

****[Eng Sub] by HorribleSubs (but actually though…) is a collection of randomly selected anime episode screencaps mismatched 
with arbitrarily generated, nonsensical, and irrelevant subtitles created through Markov Chains. A light-hearted and comedic 
production, the book pays homage to the dear memories of classic Japanese animated shows around which my adolescent life revolved; 
the collection of such franchises was a big influence on me wanting to become an artist. The title is reminiscent of the general 
title formats of the videos, as non-Japanese speakers attentively sought for the episodes that had the [eng sub] tag in the search results. 
*HorribleSubs is a popular provider of such subtitled episodes for numerous seasons.

Process:
My initial idea was entirely different–in retrospect, it’s amusing that my ideas throughout the process and the final resulting 
product are both appealing aesthetics to me, though visually and thematically different. I originally intended to make my book 
using APIs regarding nature astronomy–I thus researched Google APIs, particularly those affiliated with Google Maps and Google 
Earth (which favorably extended to data of oceans, landmarks, and stars). I wanted to randomly generate latitude and longitude
locations on the planet, and then visually represent the state of the sky, and possibly the surroundings, at that location using 
designs and typography. I sketched out some visuals, having different fonts and sizes for stars and planets being laid onto the page 
depending on the angle point of view and the distance of the celestial bodies and Earth. This plan eventually fell farther from my 
grasp as I failed to find the relevant APIs, and also discovered that many of the astronomy-related APIs were no longer updated or 
accessible.

It was then when I noticed that plenty of the generative book type arts I had seen up to that point were comedic, meant to be a 
light and comical read, and I thought perhaps I could attempt this as well being an illustrator that usually does not work on 
comedy-related artworks. As such came my anime idea, where I just had the most arbitrary thought of pairing up random screencaps 
of episodes to nonsensical, maybe gibberish, captions. I laughed at the thought of the most ordinary images captioned with the most 
irrelevant subtitles underneath. This also meant a lot to me personally as someone who decided to pursue art because of the cartoons 
and games with which I grew up. It was refreshing to, in a way, revisit and work on a project that displayed this field of art which, 
to my own experience, has been such a taboo at this institution for reasons I cannot comprehend. (Please take cartoons seriously…) 
I feel like it has been so long since I’ve made something this potentially funny and light-hearted.

The main key in getting started was familiarizing myself with Rita–something completely new: I needed to learn about Markov Chains. 
This meant Dan Shiffman tutorials, dissecting references, and downloading and analyzing the example code that generated random 
sentences whenever the user clicked. Essentially, I modified the example code to feed in my own text files (collected anime subtitles), 
and to output the JSON objects as an array with {“subtitle”:} types.

I then wrote a script in Python to take and save random screenshots per all the downloaded episode files, and to save and condense 
all the subtitles per video into .txt files, organized by series. I brought all the series’ subtitles into the Processing file 
to generate sentences using Markov from them. I then ran the program and clicked as many times as I wanted to collect plenty randomly 
generated, nonsense subtitles that would be placed in my book.

Bringing the code into basil was more bearable with the sample book which Golan provided; the necessary lines and files were 
replaced with my own, and from there on the priority was to mimic the aesthetic of an adolescent’s exposure to anime: 
I wanted to the book to be unrefined, simple, informal. The screencaps were aligned per page in the center, as if it was directly 
captured from the video itself, and the subtitles were positioned to be at the bottom of the screen, also center-aligned and 
not past the video borders. The subtitle font was purposely chosen to be of the ones typically used to sub episodes, with easy 
readability, reasonable size, and a white or pale yellow fill color. I wanted to represent the online streaming environment 
as much as possible to fulfill the vision of the book (as direct representations of a subbed episode on some browser video player).

Streaming the episodes of a foreign cartoon from the states actually felt risky at times; if you couldn’t find the episode you 
wanted on youtube, you had to rely on google, and I personally was always wary with which sites could be trusted/which one had 
reliable subtitles (haha)/which one had good quality/which one may give my computer a virus, etc… I also factored this “experience” 
into the overall visual aspect of the book: once again, childish, innocent, perhaps even ratchet–the outcome is simple with minimal 
elements, but I feel like it fulfilled the task of essentially representing the necessary attributes. The final result made me, 
and others, laugh–which I am more than thankful for. I would also say the simple outcome is deceptively simple from all the 
generativity behind it…(personal benchmark: first time writing a script…!)
