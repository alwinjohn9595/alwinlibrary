const express = require("express");
const authorRouter = express.Router();

function authorrouter(nav)
{
    var authors = [
        {
                name: 'Frank Herbert',
                intro: "Frank Herbert was a critically acclaimed and commercially successful American science fiction author...............",
                info: "Frank Herbert, in full Frank Patrick Herbert, (born October 8, 1920, Tacoma, Washington, U.S.—died February 11, 1986, Madison, Wisconsin), American science-fiction writer noted as the author of the best-selling Dune series of futuristic novels, a group of highly complex works that explore such themes as ecology, human evolution, the consequences of genetic manipulation, and mystical and psychic possibilities.Until 1972, when he began to write full-time, Herbert held a variety of jobs while writing socially engaged science fiction. He was working as a journalist when his reputation was made with the publication of the epic Dune (1965), which was translated into 14 languages and sold some 12 million copies, more than any other science-fiction book in history; ironically, Dune had been rejected by 20 publishers before it was published. An abortive film version was attempted in 1975 by Chilean-French director Alejandro Jodorowsky; that effort was chronicled in the documentary Jodorowsky’s Dune (2013). Dino De Laurentiis purchased the rights in 1976, and an adaptation was filmed by David Lynch (1984). A television miniseries was released in 2000, followed by another miniseries (2003) that covered the events in the second and third Dune books.The novels in the Dune series include Dune Messiah (1969), Children of Dune (1976), God-Emperor of Dune (1981), Heretics of Dune (1984), and Chapterhouse: Dune (1985). In the late 1990s Herbert’s son Brian began collaborating with Kevin J. Anderson on a series of prequels to the Dune chronicles, employing some of the elder Herbert’s notes. Dune: House Atreides was released in 1999 and was followed by Dune: House Harkonnen (2000) and Dune: House Corrino (2001). Other entries include Dune: The Butlerian Jihad (2002), Dune: The Machine Crusade (2003), Dune: The Battle of Corrin (2004), Hunters of Dune (2006), Sandworms of Dune (2007), The Winds of Dune (2009), Sisterhood of Dune (2012), and Mentats of Dune (2014).",
               
                image:"https://images.gr-assets.com/authors/1591018335p5/58.jpg",
                gener:'science fiction'
             
             
         },

         {
            name: 'Robin Sharma',
            intro: "Robin Sharma is one of the world’s premier thinkers on leadership, personal growth and life management...............",
            info:"Robin Sharma is one of the world's premier speakers on Leadership and Personal Mastery. As a presenter, Sharma has the rare ability to electrify an audience yet deliver uncommonly original and useful insights that lead to individuals doing their best work, teams providing superb results and organizations becoming unbeatable. For nearly 20 years, many of the most well-known organizations on the planet, ranging from Nike, GE, Microsoft, FedEx, PwC, HP and Oracle to NASA, Yale University and YPO have chosen Robin Sharma for their most important events, when nothing less than a world-class speaker will do.Robin Sharma is one of the world’s premier thinkers on leadership, personal growth and life management. The bestselling author of The Monk Who Sold His Ferrari,Who Will Cry When You Die? and The Saint, the Surfer, and the CEO and four other books on self-transformation.Robin Sharma is in constant demand internationally as keynote speaker at the conferences of many of the most powerful companies on the planet including Microsoft, Nortel Networks, General Motors, FedEx and IBM. He is a resident of Ontario, Canada. (Barnes and Noble)",
            image:"https://images.gr-assets.com/authors/1245404621p5/24678.jpg",
            gener:'self-help'

         },
         {
            name: 'Harper Lee',
            intro: "Harper Lee, known as Nelle, was born in the Alabama town of Monroeville, the youngest of four children of Amasa Coleman Lee and Frances Cunningham Finch Lee..........",
            info:"Harper Lee, known as Nelle, was born in the Alabama town of Monroeville, the youngest of four children of Amasa Coleman Lee and Frances Cunningham Finch Lee. Her father, a former newspaper editor and proprietor, was a lawyer who served on the state legislature from 1926 to 1938. As a child, Lee was a tomboy and a precocious reader, and enjoyed the friendship of her schoolmate and neighbor, the young Truman Capote.Harper Lee, known as Nelle, was born in the Alabama town of Monroeville, the youngest of four children of Amasa Coleman Lee and Frances Cunningham Finch Lee. Her father, a former newspaper editor and proprietor, was a lawyer who served on the state legislature from 1926 to 1938. As a child, Lee was a tomboy and a precocious reader, and enjoyed the friendship of her schoolmate and neighbor, the young Truman Capote.After graduating from high school in Monroeville, Lee enrolled at the all-female Huntingdon College in Montgomery (1944-45), and then pursued a law degree at the University of Alabama (1945-50), pledging the Chi Omega sorority. While there, she wrote for several student publications and spent a year as editor of the campus humor magazine, 'Ramma-Jamma'. Though she did not complete the law degree, she studied for a summer in Oxford, England, before moving to New York in 1950, where she worked as a reservation clerk with Eastern Air Lines and BOAC.Within a year, she had a first draft. Working with J. B. Lippincott & Co. editor Tay Hohoff, she completed To Kill a Mockingbird in the summer of 1959. Published July 11, 1960, the novel was an immediate bestseller and won great critical acclaim, including the Pulitzer Prize for Fiction in 1961. It remains a bestseller with more than 30 million copies in print. In 1999, it was voted 'Best Novel of the Century' in a poll by the Library Journal.",
            image:"https://www.biography.com/.image/t_share/MTc5OTkzMTY0MzY1NDQwMzQ0/gettyimages-50358657.jpg",
            gener:'socio politics'
         },
         {
            name:"Rohinton Mistry",
            intro:"Rohinton Mistry , (born July 3, 1952, Bombay [now Mumbai], India), Indian-born Canadian writer whose works—in turns poignant, stark, and humorous—explored the.............",
            info:"Rohinton Mistry , (born July 3, 1952, Bombay [now Mumbai], India), Indian-born Canadian writer whose works—in turns poignant, stark, and humorous—explored the everyday lives of Indian Parsis (descendants of Persian Zoroastrians).Like many of the characters in his stories, Mistry was of Parsi origin. He obtained a degree in mathematics and economics from the University of Bombay (now the University of Mumbai) before moving to Canada in 1975. In the early 1980s he enrolled at the University of Toronto to pursue a degree in English and philosophy. He began writing short stories and won the university’s literary competition two years in a row. Mistry attracted wider attention when he won Canadian Fiction Magazine’s annual Contributors Prize in 1985. His collection of short stories, Tales from Firozsha Baag (1987; also published as Swimming Lessons and Other Stories from Firozsha Baag), was warmly greeted by critics and general readers alike for its insights into the complex lives of the Parsi inhabitants of Firozsha Baag, an apartment building in Mumbai. Mistry’s debut novel, Such a Long Journey (1991; film version, 1998), is an intricate tale of the triumphs and disasters of a kindhearted bank clerk’s friends and family set in India in 1971, a time of domestic turbulence and war with Pakistan. The book received the Governor-General’s Award, the W.H. Smith/Books in Canada First Novel Award, and the Commonwealth Writers’ Prize for best book. A Fine Balance (1995), which also received the Commonwealth Writers’ Prize as well as the Giller Prize for best Canadian novel, was another study of Parsis living at close quarters in varying degrees of harmony during difficult times, in this case India’s 1975 state of emergency. Mistry’s third novel, Family Matters (2002), was set in a tiny two-room flat in modern-day Mumbai and presented a compelling portrayal of a family of Parsis living in exigent circumstances. His novella The Scream (2008) is narrated by an aging, isolated resident of a Mumbai apartment building. In 2012 Mistry was awarded the Neustadt Prize.",
            image:"https://images.gr-assets.com/authors/1238081582p8/3539.jpg",
            gener:"Literature & Fiction"

         },
         {
            name:"Ramachandra Guha",
            intro:"Ramachandra Guha (born 29 April 1958) is an Indian writer whose research interests include environmental, social, economics, political, contemporary and cricket history.",
            info:"Ramachandra Guha is a historian and biographer based in Bengaluru. His books include a pioneering environmental history, The Unquiet Woods (University of California Press, 1989), and an award-winning social history of cricket, A Corner of a Foreign Field (Picador, 2002), which was chosen by The Guardian as one of the ten best books on cricket ever written. India after Gandhi (Macmillan/Ecco Press, 2007; revised edition, 2017) was chosen as a book of the year by the Economist, the Washington Post, and the Wall Street Journal, and as a book of the decade in the Times of London and The Hindu.Ramachandra Guha’s most recent work is a two volume biography of Mahatma Gandhi. The first volume, Gandhi Before India (Knopf, 2014), was chosen as a notable book of the year by the New York Times and the San Francisco Chronicle. The second volume, Gandhi: The Years That Changed the World (Knopf, 2018, was chosen as a notable book of the year by the New York Times and The Economist.",
            image:"https://www.jagranimages.com/images/newimg/18012020/18_01_2020-guha_new_19946705.jpg",
            gener:"Nonfiction, History, Politics"

         },
         {
            name:"Ruskin Bond",
            intro:"Ruskin Bond is an eminent contemporary Indian writer of British descent. He prolifically a..........",
            info:"Ruskin Bond is an eminent contemporary Indian writer of British descent. He prolifically authored inspiring children’s books and was awarded the Sahitya Akademi Award to honor his work of literature. Born on May 19, 1934, in Kasauli, India, he was the son of Edith Clarke and Aubrey Bond. His father served in the Royal Air Force and frequently moved from places to places along with his son. When he was eight, his parents separated and his mother left him. She married to a Punjabi-Hindu. Bond had a complicated relationship with his mother, who was rarely there to offer him affection and they eventually grew distant. His father’s undivided attention helped him grow. He felt loved and secure but his tragic departure from his life left him lonely and broken. Following the sudden demise of his father, he moved to Dehradun where his grandmother raised him. He received his early education from Bishop Cotton School in Shimla. During his school years he won several writing competitions, including the Hailey Literature Prize and the Irwin Divinity Prize. In 1952, he completed his graduation and moved to England and stayed at his aunt’s house for four years.Some of other notable works of Ruskin Bond include Blue Umbrella, A Flight of Pigeons and Funny Side Up. His works have also been adapted for television and film. A BBC TV-series is based on his debut novel, short story “Susanna’s Seven Husbands” was adapted into a film as 7 Khoon Maaf and film Junoon is inspired by his A Flight of Pigeons.",
            image:"https://www.forbesindia.com/media/images/2021/May/img_159929_ruskinbond.jpg",
            gener:"Children's, Fiction, Memoir"

         },
         {
            name:"Khaled Hosseini",
            intro:"Khaled Hosseini, (born March 4, 1965, Kabul, Afghanistan), Afghan-born American novelist who was known for his vivid depictions of Afghanistan,.........",
            info:"Khaled Hosseini, (born March 4, 1965, Kabul, Afghanistan), Afghan-born American novelist who was known for his vivid depictions of Afghanistan, most notably in The Kite Runner (2003).Hosseini grew up in Kabul; his father was a diplomat and his mother a secondary-school teacher. In 1976 he and his parents moved to Paris, where his father worked at the Afghan embassy. With the Soviet invasion of Afghanistan in 1979, they found returning to their home impossible, and they moved to California, having been granted political asylum by the United States. Hosseini attended Santa Clara University, where he studied biology, and in 1989 he began attending medical school at the University of California, San Diego. He entered private practice as an internist in 1996, three years after receiving his medical degree.Hosseini began working in 2001 on The Kite Runner, writing at 4:00 AM before heading to his medical practice. The novel’s narrator is Amir, a writer who lives in California in the present day but who grew up in the 1970s in Kabul, the privileged son of a wealthy family. Amir’s story centres on his childhood friendship with Hassan, the son of a family servant, and its subsequent dissolution. The Kite Runner was praised for its powerful storytelling, but it was, at times, dismissed by critics for elements considered melodramatic. Nonetheless, the novel soon gained wide popularity through readers’ word-of-mouth praise, and it was eventually published in more than three dozen countries; a film adaptation was released in 2007. Prompted by this success, Hosseini turned to writing full-time in 2004. The focus brought by the novel to the continuing Afghan refugee crisis led to his appointment as a goodwill envoy for the UN High Commissioner for Refugees in 2006.Hosseini’s second novel, A Thousand Splendid Suns (2007), was inspired by his observations of women wearing burkas during a 2003 visit to Afghanistan, his first since childhood. Continuing in the overtly topical vein of The Kite Runner, the book depicts the radical shifts in the political and social climate of Afghanistan through the relationship between two women, Mariam and Laila, the first and second wives of an abusive husband.",
            image:"https://images.gr-assets.com/authors/1359753468p8/569.jpg",
            gener:"Literature & Fiction"

         },
         {
            name:"Dan Brown",
            intro:"Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels.............",
            info:"Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 52 languages around the world with 200 million copies in print.In 2005, Brown was named one of the 100 Most Influential People in the World by TIME Magazine, whose editors credited him with “keeping the publishing industry afloat; renewed interest in Leonardo da Vinci and early Christian history; spiking tourism to Paris and Rome; a growing membership in secret societies; the ire of Cardinals in Rome; eight books denying the claims of the novel and seven guides to read along with it; a flood of historical thrillers; and a major motion picture franchise.The son of a mathematics teacher and a church organist, Brown was raised on a prep school campus where he developed a fascination with the paradoxical interplay between science and religion. These themes eventually formed the backdrop for his books. He is a graduate of Amherst College and Phillips Exeter Academy, where he later returned to teach English before focusing his attention full time to writing.Brown is currently at work on a new book as well as the Columbia Pictures film version of his most recent novel.",
            image:"https://images.gr-assets.com/authors/1399396714p5/630.jpg",
            gener:"Mystery & Thrillers, Fiction, Suspense"

         }
   
      ] 



authorRouter.get("/",(req,res)=>{

            res.render("authors",{
            nav,
            authors
            })
})

authorRouter.get("/:id",(req,res)=>{


            const id = req.params.id;
            res.render("author",{
            nav,
            author: authors[id]
            })

})

return authorRouter;

}


module.exports = authorrouter;