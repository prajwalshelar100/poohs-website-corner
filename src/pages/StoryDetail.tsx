import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const storyContent = {
  'honey-adventure': {
    title: 'The Great Honey Adventure',
    chapters: [
      {
        text: "One sunny morning in the Hundred Acre Wood, Pooh's tummy was rumbling. \"Oh bother,\" said Pooh. \"I'm quite hungry for some honey.\" As he checked his cupboard, he realized all his honey pots were empty!",
        choices: [
          { text: "Go ask Rabbit if he has any honey", next: 1 },
          { text: "Look for honey in the forest", next: 2 }
        ]
      },
      {
        text: "Pooh visited Rabbit's house. \"Hello Rabbit! Do you have any honey I could borrow?\" Rabbit looked at his garden. \"I don't have honey, but I have fresh carrots. Would you like to help me harvest them?\"",
        choices: [
          { text: "Help Rabbit with his garden", next: 3 },
          { text: "Thank Rabbit and look elsewhere", next: 2 }
        ]
      },
      {
        text: "Pooh wandered through the forest and soon found a tall tree with buzzing sounds coming from it. \"Bees! And where there are bees, there's honey!\" But the tree was very tall.",
        choices: [
          { text: "Try to climb the tree alone", next: 4 },
          { text: "Find Christopher Robin for help", next: 5 }
        ]
      },
      {
        text: "Pooh spent the morning helping Rabbit dig up carrots. It was hard work, but Rabbit was so pleased he shared his lunch with Pooh. There wasn't any honey, but Pooh realized helping a friend felt just as sweet!",
        choices: [
          { text: "Continue your adventure", next: 6 }
        ]
      },
      {
        text: "Pooh tried to climb the tree, but he slipped and tumbled back down. \"Oh bother,\" he said. Just then, Piglet came along. \"P-p-pooh! Are you okay?\"",
        choices: [
          { text: "Ask Piglet for help", next: 7 },
          { text: "Find Christopher Robin instead", next: 5 }
        ]
      },
      {
        text: "Pooh found Christopher Robin playing by the stream. When Pooh explained his honey problem, Christopher Robin smiled. \"I have something to show you, Pooh.\" He led Pooh to a meadow full of flowers. \"This is where bees get their honey.\"",
        choices: [
          { text: "Watch the bees with Christopher Robin", next: 8 }
        ]
      },
      {
        text: "After helping Rabbit, Pooh continued his search. He met Owl, who was writing a story. \"Owl, do you know where I can find honey?\" Owl thought for a moment and then pointed toward a meadow of flowers.",
        choices: [
          { text: "Go to the meadow", next: 8 }
        ]
      },
      {
        text: "Pooh and Piglet tried to think of how to get the honey. \"Maybe we need a clever plan,\" said Piglet. Just then, they saw Kanga and Roo hopping by.",
        choices: [
          { text: "Ask Kanga and Roo for help", next: 9 }
        ]
      },
      {
        text: "In the meadow, Pooh watched the bees flying from flower to flower. \"They're collecting nectar to make honey,\" explained Christopher Robin. Pooh realized that making honey takes time and hard work, just like friendship.",
        choices: [
          { text: "Help plant more flowers for the bees", next: 10 }
        ]
      },
      {
        text: "Together with Kanga, Roo, and Piglet, Pooh came up with a plan. They formed a bear pyramid, with Pooh on top. Pooh managed to get a little honey, but then they all tumbled down, laughing.",
        choices: [
          { text: "Share the honey with everyone", next: 10 }
        ]
      },
      {
        text: "At the end of the day, Pooh returned home. Whether he had helped in the garden, learned about bees, or shared with friends, he had discovered something important: the sweetest thing isn't honey—it's the kindness we show each other. And that night, there was a knock at his door. All his friends had brought a little honey to share!",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      }
    ]
  },
  'rainy-day': {
    title: 'Rainy Day Friends',
    chapters: [
      {
        text: "It was raining heavily in the Hundred Acre Wood. 'Oh bother,' said Pooh, looking out his window. 'I was hoping to go on a picnic today.' The rain tapped on his roof, making a cozy sound.",
        choices: [
          { text: "Visit Piglet to see how he's doing", next: 1 },
          { text: "Stay home and make something", next: 2 }
        ]
      },
      {
        text: "Pooh put on his rain gear and splashed through puddles to Piglet's house. Piglet was very happy to see him. 'I was f-f-feeling a little scared of the storm,' admitted Piglet.",
        choices: [
          { text: "Suggest playing a game together", next: 3 },
          { text: "Propose visiting other friends", next: 4 }
        ]
      },
      {
        text: "Pooh decided to stay home where it was warm and dry. 'Perhaps I'll make something special,' he thought. He looked around his cupboard and found some honey, flour, and berries that Rabbit had given him yesterday.",
        choices: [
          { text: "Make honey cakes", next: 5 },
          { text: "Draw pictures for friends", next: 6 }
        ]
      },
      {
        text: "Pooh and Piglet decided to play a game together. 'Let's play hide and seek,' suggested Piglet. 'But Pooh, we have to stay inside because of the rain.'",
        choices: [
          { text: "Play hide and seek inside", next: 7 },
          { text: "Suggest a different game", next: 8 }
        ]
      },
      {
        text: "Pooh and Piglet decided to visit their friends despite the rain. They put on their rain gear and set out. As they walked, they saw Rabbit trying to protect his garden from flooding.",
        choices: [
          { text: "Help Rabbit with his garden", next: 9 },
          { text: "Continue to Owl's house", next: 10 }
        ]
      },
      {
        text: "Pooh mixed honey, flour, and berries together to make little honey cakes. The warm smell filled his small house as the rain pattered on the roof. Just as the cakes were cooling, there was a knock at the door.",
        choices: [
          { text: "Open the door", next: 11 }
        ]
      },
      {
        text: "Pooh found some paper and crayons and began drawing pictures for all his friends. He drew Piglet with an umbrella, Rabbit with his vegetables, and Eeyore standing in the rain looking gloomy. 'Perhaps these will cheer everyone up on this rainy day,' he thought.",
        choices: [
          { text: "Deliver the pictures despite the rain", next: 12 },
          { text: "Wait for the rain to stop", next: 13 }
        ]
      },
      {
        text: "Pooh and Piglet played hide and seek in Piglet's tiny house. There weren't many places to hide, so Pooh found Piglet quickly behind the curtains. When it was Pooh's turn to hide, he accidentally knocked over a small table while trying to squeeze behind the chair.",
        choices: [
          { text: "Help clean up the mess", next: 14 }
        ]
      },
      {
        text: "'How about we tell stories instead?' suggested Pooh. Piglet thought this was a wonderful idea. They sat by the window, watching the rain while taking turns telling stories about their adventures together.",
        choices: [
          { text: "Share a story about finding honey", next: 15 },
          { text: "Listen to Piglet's story", next: 16 }
        ]
      },
      {
        text: "Pooh and Piglet helped Rabbit build little walls of stones and sticks to direct the water away from his precious vegetables. Rabbit was very grateful. 'You've saved my carrots!' he exclaimed. 'Would you like to stay for lunch?'",
        choices: [
          { text: "Stay for lunch with Rabbit", next: 17 }
        ]
      },
      {
        text: "They continued through the rainy wood to Owl's house. By the time they arrived, they were quite wet despite their rain gear. Owl welcomed them in and offered them hot tea.",
        choices: [
          { text: "Tell Owl about helping Rabbit", next: 18 },
          { text: "Ask Owl for a story", next: 19 }
        ]
      },
      {
        text: "When Pooh opened the door, he found Piglet, Rabbit, and Eeyore huddled under a large leaf. 'We were having a t-terrible time in the rain,' said Piglet. 'What's that wonderful smell?'",
        choices: [
          { text: "Share the honey cakes", next: 20 }
        ]
      },
      {
        text: "Pooh carefully wrapped his pictures in a large leaf and set out into the rain. He delivered pictures to Piglet, Rabbit, Owl, and finally to Eeyore, who was sitting under his rain cloud as usual.",
        choices: [
          { text: "Give Eeyore his special picture", next: 21 }
        ]
      },
      {
        text: "Pooh decided to wait for the rain to stop before delivering his pictures. He put them in a neat pile and had a small pot of honey while he waited. Soon, he dozed off to the sound of the rain. When he woke up, something wonderful had happened.",
        choices: [
          { text: "Look outside", next: 22 }
        ]
      },
      {
        text: "Pooh and Piglet carefully picked up the items that had fallen. As they were cleaning, they found an old map that had slipped from between some books. 'Oh my,' said Piglet. 'I f-forgot about this!'",
        choices: [
          { text: "Look at the map together", next: 23 }
        ]
      },
      {
        text: "Pooh told a wonderful story about how he once followed a trail of honey drops through the forest, only to discover they were from his own leaky honey pot! Piglet laughed and laughed, momentarily forgetting about the storm outside.",
        choices: [
          { text: "Notice the rain has stopped", next: 24 }
        ]
      },
      {
        text: "Piglet shared a story about the time he was brave during a windstorm. 'I wasn't really brave,' he admitted. 'I was actually very scared.' 'But you still helped everyone,' Pooh reminded him. 'That's what true bravery is.'",
        choices: [
          { text: "Look outside at the rain", next: 25 }
        ]
      },
      {
        text: "They enjoyed a lovely lunch with Rabbit, who served them vegetable soup and fresh bread. The warm food made everyone feel cozy despite the rain outside. After lunch, Rabbit showed them his collection of seeds for next season's garden.",
        choices: [
          { text: "Help Rabbit organize his seeds", next: 26 }
        ]
      },
      {
        text: "Pooh and Piglet told Owl about how they helped save Rabbit's garden. Owl nodded wisely and said, 'Helping others during difficult times shows true friendship. Just like the ancient owls who helped the forest creatures during the Great Flood.'",
        choices: [
          { text: "Ask about the Great Flood story", next: 27 }
        ]
      },
      {
        text: "Pooh asked Owl to tell them a story. Owl adjusted his glasses and began telling a very long tale about his ancestors and their wisdom during rainy seasons. The story went on and on, with many big words and side stories.",
        choices: [
          { text: "Doze off during the story", next: 28 },
          { text: "Listen attentively", next: 29 }
        ]
      },
      {
        text: "Pooh shared his honey cakes with everyone. The sweet treats and warm company made the rainy day feel special. 'These are the best honey cakes ever,' said Rabbit. Even Eeyore seemed to enjoy his, saying, 'Not bad. Not bad at all.'",
        choices: [
          { text: "Suggest playing a game together", next: 30 }
        ]
      },
      {
        text: "When Eeyore saw his picture—a drawing of him with a rainbow over his head—his sad expression softened. 'For me? Nobody's ever drawn me with a rainbow before.' For a brief moment, Eeyore seemed to actually smile.",
        choices: [
          { text: "Invite Eeyore to join you", next: 31 }
        ]
      },
      {
        text: "The rain had stopped and a beautiful rainbow stretched across the sky. Pooh gathered his pictures and stepped outside. The forest was fresh and glistening, and all his friends were outside admiring the rainbow.",
        choices: [
          { text: "Share the pictures with everyone", next: 32 }
        ]
      },
      {
        text: "The map showed a special place in the Hundred Acre Wood where, according to Piglet's grandfather, a magical pond reflected double rainbows after the rain. 'I've never f-found it,' admitted Piglet. 'It might not even exist.'",
        choices: [
          { text: "Suggest looking for it when the rain stops", next: 33 }
        ]
      },
      {
        text: "Pooh noticed the rain had stopped and sunlight was streaming through the window. 'Look, Piglet!' he exclaimed. They rushed to the window and saw a beautiful rainbow arching over the Hundred Acre Wood.",
        choices: [
          { text: "Go outside to see the rainbow", next: 34 }
        ]
      },
      {
        text: "As they watched the rain, they noticed it was getting lighter. 'I think it's nearly stopped,' said Pooh. Just then, a sunbeam broke through the clouds, making the raindrops sparkle like tiny stars.",
        choices: [
          { text: "Go outside to look for a rainbow", next: 35 }
        ]
      },
      {
        text: "Pooh and Rabbit organized the seeds into neat little piles by type and color. 'Very helpful indeed,' said Rabbit. Just then, they heard Christopher Robin calling from outside.",
        choices: [
          { text: "Go see Christopher Robin", next: 36 }
        ]
      },
      {
        text: "Owl told them about the Great Flood, when his great-great-grandfather led all the animals to higher ground. 'And that,' concluded Owl, 'is why owls are considered the wisest of creatures.' Just then, they noticed the rain had stopped.",
        choices: [
          { text: "Thank Owl and go outside", next: 37 }
        ]
      },
      {
        text: "Pooh dozed off during Owl's long story. He dreamed of honey rivers and butterfly umbrellas. When he woke up, he realized the rain had stopped and Piglet was gently nudging him.",
        choices: [
          { text: "Apologize to Owl", next: 38 }
        ]
      },
      {
        text: "Pooh listened attentively to Owl's entire story, even though it was very long and confusing. When Owl finally finished, he looked pleased. 'You're a very good listener, Pooh,' he said. 'Not many appreciate the fine art of storytelling these days.'",
        choices: [
          { text: "Notice the rain has stopped", next: 39 }
        ]
      },
      {
        text: "They decided to play a word game where each person added to a story one line at a time. The tale they created together about a honey-loving dragon and his butterfly friend made everyone laugh. Before they knew it, the rain had stopped.",
        choices: [
          { text: "Go outside to see the rainbow", next: 40 }
        ]
      },
      {
        text: "'Would you like to come to my house?' asked Pooh. 'I can't promise rainbows, but I do have a warm fire and some honey tea.' Eeyore looked surprised by the invitation but nodded. 'I suppose a little tea wouldn't hurt. It might be terrible, but what isn't?'",
        choices: [
          { text: "Walk home with Eeyore", next: 41 }
        ]
      },
      {
        text: "Everyone was delighted with their pictures. 'How thoughtful of you, Pooh Bear!' exclaimed Kanga. Christopher Robin, who had just arrived, said, 'These pictures are perfect for our Rainy Day Memory Collection!'",
        choices: [
          { text: "Help create the memory collection", next: 42 }
        ]
      },
      {
        text: "'Let's look for it!' Pooh suggested enthusiastically once they noticed the rain had stopped. They carefully folded the map and set out into the fresh, post-rain forest, following the map's mysterious markings.",
        choices: [
          { text: "Follow the map", next: 43 }
        ]
      },
      {
        text: "Pooh shared what he had learned: 'Rainy days might keep us inside, but they bring us together in special ways. And they make the rainbows possible!' Everyone nodded in agreement, especially when Christopher Robin added, 'The best friendships can weather any storm.'",
        choices: [
          { text: "Suggest a Rainy Day celebration every year", next: 44 }
        ]
      },
      {
        text: "The group hug beneath the double rainbow became one of those perfect moments that everyone would remember. 'I love Rainy Days,' said Pooh, 'especially when they end like this.' Christopher Robin smiled. 'It's not about how the day begins, but how it ends that matters most.'",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      },
      {
        text: "Christopher Robin raised his cup of juice. 'To friends who make rainy days sunny!' Everyone clinked their cups together. Pooh added, 'And to rainbows that remind us that after every rain, color and light return to our world.'",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      },
      {
        text: "Christopher Robin captured the perfect moment with his camera—all his friends standing beneath the magnificent rainbow, their faces glowing with happiness. 'I'll call this picture 'Rainbow Friends,'' he said. 'It will remind us that even the rainiest days can end beautifully.'",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      },
      {
        text: "They celebrated with a rainbow party, with Roo and Tigger practicing 'rainbow jumps' to touch the colors. Kanga made rainbow fruit salad, and Rabbit grudgingly admitted that the rain had been good for his garden after all. It was a perfect end to a rainy day.",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      },
      {
        text: "Pooh closed his eyes and made a wish upon the rainbow. 'I wish for more days like this with my friends,' he whispered. When he opened his eyes, he saw everyone smiling at him. Somehow, he knew his wish was already coming true.",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      },
      {
        text: "As the rainbow began to fade, they all joined in singing a song Christopher Robin taught them about rainbows and friendship. Their voices blended together beautifully, echoing through the fresh, clean forest. It was the perfect end to a rainy day adventure.",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      },
      {
        text: "Back at Pooh's house, they enjoyed 'rainbow honey tea' by the window, watching the last colors of the rainbow fade into twilight. 'Today was a very good day,' said Pooh. Eeyore nodded. 'As days go,' he admitted, 'this one wasn't the worst. Not by a long shot.'",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      }
    ]
  },
  'lost-piglet': {
    title: 'Piglet Gets Lost',
    chapters: [
      {
        text: "It was a beautiful day in the Hundred Acre Wood, and Piglet decided to pick some flowers for his friends. He wandered further and further, following a trail of pretty bluebells. Soon, he looked up and didn't recognize where he was.",
        choices: [
          { text: "Call out for help", next: 1 },
          { text: "Try to find his way back", next: 2 }
        ]
      },
      {
        text: "Piglet called out as loudly as his small voice could manage. 'H-h-hello! Is anybody there?' But all he heard was the echo of his own voice and the rustling of leaves in the gentle breeze. No one seemed to be nearby.",
        choices: [
          { text: "Climb a tree to see better", next: 3 },
          { text: "Follow a small path", next: 4 }
        ]
      },
      {
        text: "Piglet tried to retrace his steps, looking for familiar landmarks. 'I came from this direction... or was it that one?' he wondered. The forest seemed to look the same in every direction, and soon Piglet realized he was even more lost than before.",
        choices: [
          { text: "Look for the North Star", next: 5 },
          { text: "Build a small shelter", next: 6 }
        ]
      },
      {
        text: "Piglet found a small tree that he could climb. With trembling legs, he climbed up to a branch and looked around. From this higher vantage point, he could see a clearing in the distance that seemed somewhat familiar.",
        choices: [
          { text: "Head toward the clearing", next: 7 },
          { text: "Stay in the tree and call for help", next: 8 }
        ]
      },
      {
        text: "Piglet noticed a small path winding through the underbrush. 'Perhaps this will lead somewhere familiar,' he thought hopefully. The path was narrow but clear, as if animals regularly traveled along it.",
        choices: [
          { text: "Follow the path", next: 9 },
          { text: "Mark the path and explore around", next: 10 }
        ]
      },
      {
        text: "Piglet looked up at the sky, but realized it was still daytime and he couldn't see any stars yet. 'Oh d-d-dear,' he sighed. 'I don't think I can wait until nighttime.' He decided he needed another plan.",
        choices: [
          { text: "Look for signs of Pooh's house", next: 11 },
          { text: "Find a high point to see further", next: 12 }
        ]
      },
      {
        text: "As evening approached, Piglet gathered some twigs and leaves to build a small shelter. 'A Very Small Animal needs a Very Small House,' he told himself bravely, trying not to think about being alone in the woods at night.",
        choices: [
          { text: "Make the shelter more visible", next: 13 },
          { text: "Look for food before dark", next: 14 }
        ]
      },
      {
        text: "Piglet carefully made his way toward the clearing he had spotted. As he got closer, his heart sank—it wasn't a familiar place after all, just another part of the forest he didn't recognize. But there was something interesting there...",
        choices: [
          { text: "Investigate what's in the clearing", next: 15 }
        ]
      },
      {
        text: "Piglet stayed in the tree and called for help as loudly as he could. 'Pooh! Christopher Robin! Anyone!' After calling several times, he thought he heard something—a faint 'Piglet?' in the distance.",
        choices: [
          { text: "Call out again", next: 16 },
          { text: "Climb down and move toward the voice", next: 17 }
        ]
      },
      {
        text: "The path wound through the forest, over a small hill, and down into a little valley. To Piglet's delight, he spotted something familiar—a small bridge that he and Pooh had crossed many times on their adventures.",
        choices: [
          { text: "Cross the bridge", next: 18 }
        ]
      },
      {
        text: "Piglet found a stick and made little markers along the path so he could find his way back if needed. Then he carefully explored the surrounding area, keeping the marked path in sight.",
        choices: [
          { text: "Look for signs of his friends", next: 19 },
          { text: "Collect berries while searching", next: 20 }
        ]
      },
      {
        text: "Piglet looked for signs that might lead to Pooh's house—honey pots, paw prints, or paths worn by a bear of very little brain. After a while, he spotted some sticky honey drops on a tree trunk.",
        choices: [
          { text: "Follow the honey trail", next: 21 }
        ]
      },
      {
        text: "Piglet spotted a hill nearby that might offer a better view. He carefully climbed to the top, his tiny legs working hard. From the summit, he could see much further, and spotted a plume of smoke rising in the distance.",
        choices: [
          { text: "Head toward the smoke", next: 22 }
        ]
      },
      {
        text: "Piglet made his shelter more visible by placing bright flowers and unique arrangements of sticks on top. 'Now if anyone is looking for me, they might see this,' he thought, feeling a little more hopeful.",
        choices: [
          { text: "Wait in the shelter", next: 23 }
        ]
      },
      {
        text: "Before it got too dark, Piglet searched for something to eat. He found some berries that looked like the ones Rabbit often gathered and collected a small handful. 'At least I won't be hungry,' he thought.",
        choices: [
          { text: "Return to the shelter", next: 24 }
        ]
      },
      {
        text: "In the clearing, Piglet found an unusual arrangement of stones in a circle. 'This doesn't look natural,' he thought. In the center was a small wooden sign that read: 'Heffalump Picnic Area - All Welcome'",
        choices: [
          { text: "Run away quickly", next: 25 },
          { text: "Wait to see if anyone comes", next: 26 }
        ]
      },
      {
        text: "Piglet called out again, even louder this time. 'I'm here! I'm here!' The response was clearer now—definitely someone calling his name. It sounded like Pooh and maybe Christopher Robin too!",
        choices: [
          { text: "Keep calling from the tree", next: 27 }
        ]
      },
      {
        text: "Piglet climbed down and carefully moved in the direction of the voice. 'Pooh? Is that you?' he called. The voice responded, sounding closer now. Piglet's heart filled with hope as he hurried forward.",
        choices: [
          { text: "Rush toward the voice", next: 28 }
        ]
      },
      {
        text: "Piglet crossed the bridge, feeling much more confident now. 'I know where I am!' he exclaimed happily. Just past the bridge was a fork in the path. One way led toward Pooh's house, and the other toward the Hundred Acre Wood meeting place.",
        choices: [
          { text: "Go toward Pooh's house", next: 29 },
          { text: "Go toward the meeting place", next: 30 }
        ]
      },
      {
        text: "As Piglet explored, he noticed some freshly broken twigs and disturbed leaves—signs that someone had passed by recently. Following these signs, he came across a familiar red scarf caught on a branch.",
        choices: [
          { text: "Take the scarf and continue following the signs", next: 31 }
        ]
      },
      {
        text: "While searching, Piglet found some berry bushes with fat, juicy berries. As he collected them, he noticed something else—paw prints in the soft dirt nearby, and they looked like Tigger's bouncy prints!",
        choices: [
          { text: "Follow Tigger's tracks", next: 32 }
        ]
      },
      {
        text: "Piglet followed the honey drops, which became more frequent. 'This must lead to Pooh,' he thought excitedly. Soon he heard a familiar humming sound—the special tune Pooh always hummed when thinking about honey.",
        choices: [
          { text: "Call out to Pooh", next: 33 }
        ]
      },
      {
        text: "Piglet carefully made his way toward the smoke. As he got closer, he smelled something wonderful—Rabbit's vegetable soup! Soon he could see Rabbit's garden and house in the distance.",
        choices: [
          { text: "Run to Rabbit's house", next: 34 }
        ]
      },
      {
        text: "Piglet waited in his shelter, trying to be brave. As the light dimmed, he heard rustling in the bushes nearby. 'W-w-who's there?' he asked nervously. A familiar voice responded, 'It's me, Owl. I was out for my evening flight when I spotted your interesting shelter.'",
        choices: [
          { text: "Ask Owl for help", next: 35 }
        ]
      },
      {
        text: "Back at his shelter, Piglet ate a few berries and tried to make himself comfortable. As darkness fell, he heard a twig snap nearby. 'H-hello?' he called nervously. To his immense relief, a familiar voice answered, 'Piglet! There you are!' It was Tigger, bouncing into view.",
        choices: [
          { text: "Run to Tigger", next: 37 },
          { text: "Ask Tigger how he found you", next: 38 }
        ]
      },
      {
        text: "Piglet ran away from the Heffalump Picnic Area as fast as his tiny legs could carry him. He ran and ran until he was out of breath. When he finally stopped, he realized he was even more lost than before, in a part of the forest he had never seen.",
        choices: [
          { text: "Climb a tree to see where you are", next: 39 },
          { text: "Look for water to follow", next: 40 }
        ]
      },
      {
        text: "Piglet decided to wait at the picnic area to see if anyone would come. After a while, he heard rustling in the bushes. He trembled with fear, but then a familiar face appeared—it was Roo! 'Hi, Piglet!' Roo called cheerfully. 'What are you doing at the special picnic spot?'",
        choices: [
          { text: "Tell Roo you're lost", next: 41 }
        ]
      },
      {
        text: "Pooh, Christopher Robin, and even Rabbit arrived beneath Piglet's tree. 'We've been looking everywhere for you!' said Christopher Robin. 'We followed your tracks and heard your calls.' Piglet was so happy he almost fell out of the tree in excitement.",
        choices: [
          { text: "Climb down carefully", next: 42 }
        ]
      },
      {
        text: "As Piglet rushed toward the voice, he suddenly tumbled down a small slope and landed with a soft thump. Looking up, he saw Pooh and Christopher Robin hurrying toward him. 'Oh, Piglet!' cried Pooh. 'We've been so worried!'",
        choices: [
          { text: "Hug your friends", next: 43 }
        ]
      },
      {
        text: "When Piglet arrived at Pooh's house, he found not only Pooh but all his friends waiting. 'Surprise!' they called. 'We've been worried about you, Piglet!' Owl explained that they had organized a search party when they realized Piglet was missing.",
        choices: [
          { text: "Share your adventure story", next: 44 }
        ]
      },
      {
        text: "Piglet and Pooh enjoyed Rabbit's vegetable soup together, while Piglet told the story of getting lost. 'You were very brave,' said Rabbit. 'But next time, perhaps leave a trail of something behind you when you go exploring.' Piglet thought that was excellent advice.",
        choices: [
          { text: "Help Rabbit in his garden to say thank you", next: 45 }
        ]
      },
      {
        text: "Owl listened carefully to Piglet's predicament. 'Ah, being lost in the woods. My great-uncle once was lost for seven days and six nights...' As Owl began a long story, Piglet noticed that from Owl's tree house, he could actually see his own house in the distance!",
        choices: [
          { text: "Ask Owl to guide you home", next: 46 }
        ]
      },
      {
        text: "Piglet excitedly ran to Tigger. 'Oh Tigger! I'm so happy to see you!' Tigger bounced proudly. 'That's what Tiggers do best—finding lost Piglets! Christopher Robin and everyone are looking for you too!'",
        choices: [
          { text: "Go with Tigger to find the others", next: 47 }
        ]
      },
      {
        text: "'How did you find me?' Piglet asked, still amazed. Tigger puffed out his chest. 'Tiggers are excellent trackers! I followed your teensy footprints, and I smelled the berries you collected.' He bounced excitedly. 'Everyone is waiting for us!'",
        choices: [
          { text: "Return with Tigger to your friends", next: 48 }
        ]
      },
      {
        text: "Piglet followed Tigger back through the forest. True to his word, all of Piglet's friends were gathered in a small clearing, calling his name. When they saw him, they rushed over with relief. 'We've been so worried!' said Rabbit.",
        choices: [
          { text: "Tell everyone about your adventure", next: 49 }
        ]
      },
      {
        text: "Piglet told his friends all about his adventure—the shelter he built, the berries he found, and the strange Heffalump Picnic Area. 'You were very brave,' said Christopher Robin, giving him a hug. 'But remember, you're never alone in the Hundred Acre Wood.'",
        choices: [
          { text: "The End - Return to Stories", next: -1 }
        ]
      }
    ]
  }
};

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(0);
  const [readChapters, setReadChapters] = useState<number[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Reset chapter when story changes
    setCurrentChapter(0);
    setReadChapters([0]);
  }, [id]);

  // Guard clause if the id doesn't exist in our stories
  if (!id || !storyContent[id as keyof typeof storyContent]) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-2xl font-bold">Story not found</h1>
          <p className="mb-4">Sorry, we couldn't find the story you're looking for.</p>
          <Link to="/stories" className="text-blue-500 hover:underline">
            Return to stories
          </Link>
        </div>
      </Layout>
    );
  }

  const story = storyContent[id as keyof typeof storyContent];
  const chapter = story.chapters[currentChapter];

  const handleChoiceClick = (nextChapter: number) => {
    if (nextChapter === -1) {
      // Return to stories
      navigate('/stories');
      return;
    }
    
    // Mark the new chapter as read
    if (!readChapters.includes(nextChapter)) {
      setReadChapters([...readChapters, nextChapter]);
    }
    
    setCurrentChapter(nextChapter);
    
    // Scroll to top of the page
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 py-8"
      >
        <div className="flex items-center mb-6">
          <Link to="/stories" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Stories
          </Link>
          <h1 className="text-2xl font-bold text-center flex-1">{story.title}</h1>
          <div className="w-5"></div> {/* Spacer to balance the back button */}
        </div>
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">{chapter.text}</p>
            
            <div className="space-y-3">
              {chapter.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoiceClick(choice.next)}
                  className="w-full text-left p-3 rounded-md bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="flex-1">{choice.text}</span>
                    <ChevronRight className="w-5 h-5 text-amber-500" />
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="text-sm text-gray-500 text-center">
          Progress: {Math.round((readChapters.length / story.chapters.length) * 100)}%
        </div>
      </motion.div>
    </Layout>
  );
};

export default StoryDetail;
