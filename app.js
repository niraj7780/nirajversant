// NirajVersant — Application Logic
// ═══════════════════════════════════════════════════════════
//  ALL 15 TEST DATASETS
// ═══════════════════════════════════════════════════════════
const TESTS = {
1:{name:"Test 23",src:"Versant Test 23",
A:["I am never late for work","I start my new job next week","Your business cards should arrive soon","I must have the wrong number","How long have you been studying French","Where is the exit located","We almost missed the train","This report seems to be out of date","If we take the car we'll have to pay for parking","Could you send the parts over as soon as possible","With experience you will improve your project estimates","By the middle of the morning half the sales team had quit","The alarm isn't loud enough","I just wanted to check in and see if there's been any progress","But the search for a qualified software engineer has proved difficult","Our plane leaves for Paris at nine fifteen a.m."],
B:[{w:"we / are / living",a:"We are living"},{w:"where / are they / going",a:"Where are they going"},{w:"please / correct / these mistakes",a:"Please correct these mistakes"},{w:"the weather / should be / nice",a:"The weather should be nice"},{w:"the house / next door / is for sale",a:"The house next door is for sale"},{w:"a local hotel / has agreed to offer / a thirty percent discount",a:"A local hotel has agreed to offer a thirty percent discount"},{w:"experience / is more important / than the training",a:"Experience is more important than the training"},{w:"a nearby office / has fortunately / become vacant",a:"A nearby office has fortunately become vacant"}],
C:[{s1:"What do you do?",s2:"I'm a teacher.",s3:"It must be fun working with kids.",q:"What is the woman's job?",a:"She is a teacher"},{s1:"My coffee is cold.",s2:"Let me heat it up in the microwave.",s3:"Thanks.",q:"What is cold?",a:"The coffee is cold"},{s1:"I need to sign this form.",s2:"Do you want to borrow my pen?",s3:"Yes, that would be great.",q:"What does the woman need to borrow?",a:"A pen"},{s1:"Are you done reading this magazine?",s2:"No, but you can take it if you want.",s3:"Thanks, I'll bring it back tomorrow.",q:"What did the woman borrow?",a:"A magazine"},{s1:"What's the weather supposed to be like on Sunday?",s2:"It's supposed to be warm.",s3:"Great, we can go to the beach.",q:"What will the weather be like on Sunday?",a:"It will be warm"},{s1:"Did you do any volunteer work?",s2:"I do. I help out at the library once a week.",s3:"That sounds great.",q:"Where does the man volunteer?",a:"At the library"},{s1:"I just got a postcard from my sister.",s2:"That's nice.",s3:"She sent it from New York.",q:"What did the woman receive from her sister?",a:"A postcard"},{s1:"What should I bring to your house?",s2:"Could you bring some tomatoes for the salad?",s3:"Sure, how many do you need?",q:"What will the woman bring?",a:"Tomatoes for the salad"},{s1:"How does someone go about getting a certificate?",s2:"They have to pass the test.",s3:"When can I sign up for the test?",q:"What do people who pass the test get?",a:"A certificate"},{s1:"Please sign your name at the bottom of this form.",s2:"What do you need my signature for?",s3:"To confirm that you've received the package.",q:"What does the man ask for?",a:"A signature"},{s1:"Is this the fastest way to get home?",s2:"Actually, I think walking might be faster. The bus is very slow.",s3:"You're probably right.",q:"How will the woman get home?",a:"By walking"},{s1:"Who were you talking to on the phone?",s2:"It was a journalist. He wanted to schedule an interview with the mayor.",s3:"I bet he's curious about the mayor's new plans for the city.",q:"Who was the man talking to on the phone?",a:"A journalist"}],
D:[{s:"How many languages can you ___?",a:"speak"},{s:"What ___ is it? I don't have a watch.",a:"time"},{s:"I'm a salesman. And you, what do you ___?",a:"do"},{s:"The man ___ his car keys and spent an hour looking for them.",a:"misplaced"},{s:"Gadgets like phones and small electronic ___ are popular among online shoppers.",a:"devices"},{s:"Let's ___ tomorrow's presentation until next week. I'm too busy.",a:"postpone"},{s:"I don't have my credit card. I must have ___ it at home.",a:"left"},{s:"When travelling abroad, always carry your passport or some form of ___.",a:"identification"},{s:"When it rains, there are dark ___ in the sky.",a:"clouds"},{s:"She ran to the corner but just ___ the bus, so she had to wait.",a:"missed"},{s:"I'm not sure I can come tomorrow. I'll have to ___ my schedule.",a:"check"},{s:"It looks like this document has been edited. Is this the final ___?",a:"copy"},{s:"Before you drive over the bridge you have to pay the ___ at the booth.",a:"toll"},{s:"The employees of our factory must follow a strict set of safety ___.",a:"procedures"},{s:"She gets her supplies at a low ___ because she buys in bulk.",a:"rate"},{s:"This is cutting ___ technology. It's the best on the market.",a:"edge"},{s:"My friend took me on a personal ___ of the city.",a:"tour"},{s:"The department will have to ___ the cost of the failure themselves.",a:"bear"}],
E:["Do you live here","I don't have any information","Report any computer issues to technical support","When is the game","Let's put our heads together and come up with a solution","We need to make sure that our department is ready for inspection","I'll see you on Thursday","Aren't you going to eat something","He said he would like a cup of coffee","I turned down the offer because they needed someone who could travel","I knew something would go wrong with the plan","Today's workshop will take place a little earlier than we thought","Various tax incentives are available to you and your employees","Why do you think some of the plants didn't grow"],
F:[{t:"Passage 1",p:"James and Ann were driving to the airport. Ann asked James if he had remembered to take his passport. He realized that he had forgotten it. He had left it in his jacket pocket at home. They turned around to pick it up. They arrived at the airport just in time to catch their flight.",k:["James and Ann driving to airport","James forgot his passport","passport left at home in jacket pocket","they turned around to get it","arrived just in time for their flight"]},{t:"Passage 2",p:"John bought a new phone and was looking forward to trying it out as soon as possible. The moment John got home, he tried to turn it on, but it didn't work. He immediately drove back to the store. The salesperson showed John how to insert the battery. John was pleased that the phone was working, but felt embarrassed because he should have read the instructions.",k:["John bought a new phone","phone didn't work at home","went back to the store","salesperson showed how to insert battery","John embarrassed for not reading instructions"]}]},

2:{name:"Test 31",src:"Versant Test 31",
A:["We hope to sell a lot in Japan","Hire him immediately","Have you had breakfast yet","In this area agriculture is a major industry","He wanted to know if the price included breakfast","That model is currently out of stock","I don't think I'll be able to get away before seven tonight","I've come to realize that we need to change our methods","Bring your resume and a list of references to the meeting","It should take six months to complete construction of the new office","As a matter of policy representatives may not give their names to customers","Please join us next spring for our annual conference in New York City","We've made special reservations for our new international clients","They're trying to fix the problem but so far they've had no luck","Do you have time to talk","I'm sorry he just stepped out for a moment"],
B:[{w:"how long / are you / staying here",a:"How long are you staying here"},{w:"I decided / to visit / my old friends",a:"I decided to visit my old friends"},{w:"we are / looking forward / to the new cinema",a:"We are looking forward to the new cinema"},{w:"we're going / to see / some old friends",a:"We're going to see some old friends"},{w:"that building / has limited / internet access",a:"That building has limited internet access"},{w:"press one / before you enter / the phone number",a:"Press one before you enter the phone number"},{w:"the new training / schedule will be / available later today",a:"The new training schedule will be available later today"},{w:"our meeting / lasted longer / than expected",a:"Our meeting lasted longer than expected"}],
C:[{s1:"Can I get you something to drink?",s2:"A cup of coffee would be wonderful.",s3:"Okay, I'll be right back.",q:"What does the man want to drink?",a:"A cup of coffee"},{s1:"Where are my glasses?",s2:"I think they're on the table.",s3:"Oh right, thank you.",q:"Where are the woman's glasses?",a:"On the table"},{s1:"Excuse me, can I have a glass of water?",s2:"Yes, just a minute.",s3:"Thank you.",q:"What does the man want?",a:"A glass of water"},{s1:"Are you from London?",s2:"No, but my family lives there.",s3:"It's so much bigger than Sydney.",q:"Where does the woman's family live?",a:"In London"},{s1:"How can you listen to music when you're studying?",s2:"It helps me work better.",s3:"I need complete silence.",q:"What helps the man work better?",a:"Listening to music"},{s1:"I'm going to change my flight reservation.",s2:"Why is that?",s3:"I need to leave a day later.",q:"What does the woman need to change?",a:"Her flight reservation"},{s1:"I can't find the salt anywhere.",s2:"It should be next to the honey on the second shelf.",s3:"Found it, thanks.",q:"What was the man looking for?",a:"The salt"},{s1:"What should I bring to your house?",s2:"Bring some tomatoes for the salad.",s3:"Sure, how many do you need?",q:"What will the woman bring?",a:"Tomatoes"},{s1:"Let's meet in front of the library on Friday.",s2:"Sounds good. What time?",s3:"At two o'clock.",q:"Where will they meet on Friday?",a:"In front of the library"},{s1:"How does someone go about getting a certificate?",s2:"They have to pass the test.",s3:"When can I sign up?",q:"What do people who pass the test get?",a:"A certificate"},{s1:"It's quiet here today, isn't it?",s2:"It is. The neighbours are out of town.",s3:"Oh, that explains it.",q:"Why is it quiet?",a:"Because the neighbours are out of town"},{s1:"Do you like the color of this shirt?",s2:"I'm okay with that. Actually it's the fabric I'm not crazy about.",s3:"Yes, I see what you mean.",q:"What does the man not like about the shirt?",a:"The fabric"}],
D:[{s:"You're driving too ___. You should slow down.",a:"fast"},{s:"She was awarded a promotion based on her excellent ___ on the job.",a:"performance"},{s:"The outer sections are quite ___, while the city center is rather old.",a:"new"},{s:"If you want a dependable employee, I highly ___ that you hire him.",a:"recommend"},{s:"Some people wear ___ to help them see better.",a:"glasses"},{s:"Don't forget to ___ for a receipt when you pay.",a:"ask"},{s:"An increasing ___ of businesses have recently shut down.",a:"number"},{s:"Over three hundred people ___ the store's grand opening.",a:"attended"},{s:"I had to take out a ___ from the bank to cover the cost of the roof.",a:"loan"},{s:"___ making one last modification to the layout, the newsletter was ready.",a:"After"},{s:"I know you love travelling. Would you be ___ in a position in our overseas office?",a:"interested"},{s:"Should I turn right or ___ at the next corner?",a:"left"},{s:"I haven't eaten anything all day. I'm so ___.",a:"hungry"},{s:"Can you turn the light ___? I can't see anything.",a:"on"},{s:"I need to ___ my hotel reservation. I won't be staying there anymore.",a:"cancel"},{s:"In my company, it is the manager's job to divide work ___ the team members.",a:"among"},{s:"The speaker at the conference was very interesting. I ___ his talk very much.",a:"enjoyed"},{s:"I was recently ___ from the Berlin office to the Tokyo office.",a:"transferred"}],
E:["The company may have to relocate","The heating system was just repaired","I wish we didn't have to work that night","Our sister company was established quite some time ago","Please spell check all reports before turning them in","The company has grown too large over the past few years","I eat there every night","Where are the pens we used to write on the board","Please note that our phone and fax numbers will remain the same","I like to visit my parents on the weekends","I think I'll buy this hat too","Having a pet can reduce stress","Could you tell me how many people are coming to the reception","It's raining at the moment"],
F:[{t:"Passage 1",p:"I received a couple of good articles about how to be productive every day at work. I think you will find them useful. These were forwarded by our New York branch. Click on the link below to view the articles. You might learn something new.",k:["received articles about productivity at work","thinks you will find them useful","forwarded by New York branch","click the link to view articles","might learn something new"]},{t:"Passage 2",p:"After working for thirty years as a salesperson, James decided to retire. The first few weeks of his retired life were fine. He relaxed and spent a lot of time reading. After a month, he started to get bored. He decided to volunteer at the local animal rescue center. He loved working with the animals and was glad to have a scheduled activity each day.",k:["James retired after 30 years as salesperson","first weeks were fine and relaxing","got bored after a month","volunteered at local animal rescue center","loved working with animals and having daily activity"]}]},

3:{name:"Test 37",src:"Versant Test 37",
A:["Are there any customer support services available","How can we fit all this text into such a small space","It's common to feel a bit nervous before speaking to a group","I've heard that they made quite a large profit from that sale","The authors of this text would have liked more figures","Orders placed less than ten days ahead must be picked up at the counter","I left my hat in the restaurant","With all the good programs available it is difficult to make a quick decision","His desk area and bookshelves are always well organized","I am sorry he just stepped out for a moment","If you are worried just give her a call","We have to sell a lot in Japan","It's not too late to change your mind","I will try to do my best","Enter through the door on your right","How many people do you expect to attend the meeting"],
B:[{w:"where should / we go / this weekend",a:"Where should we go this weekend"},{w:"there were / a lot of problems / to discuss",a:"There were a lot of problems to discuss"},{w:"did you hear / that the company / was sold",a:"Did you hear that the company was sold"},{w:"the salesman / left immediately / after the meeting ended",a:"The salesman left immediately after the meeting ended"},{w:"all of the classes / were either too expensive / or unavailable",a:"All of the classes were either too expensive or unavailable"},{w:"open the top cover / of the machine / to fix a paper jam",a:"Open the top cover of the machine to fix a paper jam"},{w:"she didn't notice / who / took the book",a:"She didn't notice who took the book"},{w:"I haven't been / to a / Japanese restaurant",a:"I haven't been to a Japanese restaurant"}],
C:[{s1:"What do you want to eat for dinner?",s2:"How about pizza?",s3:"Sure, that sounds good.",q:"What will they eat for dinner?",a:"Pizza"},{s1:"My coffee is cold.",s2:"Let me heat it up in the microwave.",s3:"Thanks.",q:"What is cold?",a:"The coffee"},{s1:"What's the weather supposed to be like on Sunday?",s2:"It's supposed to be warm.",s3:"Great, we can go to the beach.",q:"What will the weather be like on Sunday?",a:"Warm"},{s1:"I just got a postcard from my sister.",s2:"That's nice. Where did she send it from?",s3:"From New York.",q:"What did the woman receive from her sister?",a:"A postcard"},{s1:"Can you believe I finished cooking all the food already?",s2:"Wow. How did you do it so quickly?",s3:"I woke up at four in the morning.",q:"What did the woman finish?",a:"Cooking"},{s1:"My sink is leaking.",s2:"Have you told your landlord?",s3:"Yes, he's sending a repair man tomorrow.",q:"What problem did the woman report to the landlord?",a:"Her sink is leaking"},{s1:"How was your flight?",s2:"It was great. I even arrived ahead of schedule.",s3:"Terrific. That doesn't happen very often.",q:"Why was the flight so great?",a:"It arrived ahead of schedule"},{s1:"Who were you talking to on the phone?",s2:"It was a journalist. He wanted to schedule an interview with the mayor.",s3:"I bet he's curious about the mayor's new plans.",q:"Who was the man talking to on the phone?",a:"A journalist"},{s1:"Lucy, can you come to the office early tomorrow?",s2:"Sure, what time?",s3:"Seven thirty would be great.",q:"What will Lucy have to do tomorrow morning?",a:"Go to the office early at seven thirty"},{s1:"I always have trouble sleeping.",s2:"Have you tried drinking warm milk before bed?",s3:"No, I'll try that.",q:"What does the woman suggest?",a:"Drinking warm milk before bed"},{s1:"Did you get the report I sent?",s2:"Yes, I read it this morning.",s3:"Great. What did you think?",q:"When did the man read the report?",a:"This morning"},{s1:"The meeting has been moved to Thursday.",s2:"Really? I had it in my calendar for Wednesday.",s3:"Sorry, there was a last minute change.",q:"When is the meeting now?",a:"Thursday"}],
D:[{s:"For ___ about the product, please consult the instruction manual.",a:"information"},{s:"The company ___ its target last year and reported a profit.",a:"hit"},{s:"I have trouble ___ at night, so I usually wake up very tired.",a:"sleeping"},{s:"Recent studies show that the shopping ___ of consumers have changed dramatically.",a:"habits"},{s:"Although sales were down, the owner had high ___ that business would improve.",a:"hopes"},{s:"It ___ to be seen whether the company will stay in business next year.",a:"remains"},{s:"The training program ___ a wide selection of courses to any interested employee.",a:"offers"},{s:"I don\\'t know what I wrote. I\\'m going to ___ it completely.",a:"rewrite"},{s:"He burned the oil and the fire left a black ___ above the stove.",a:"mark"},{s:"The broadcasting company is funded by the government and owns a television ___.",a:"channel"},{s:"To celebrate our first major success, we are going to ___ a party.",a:"throw"},{s:"In cities with good public transport, it\\'s hard to understand why people insist on ___ themselves to work.",a:"driving"},{s:"When my bicycle got a flat tyre, I had to ___ the train to work.",a:"take"},{s:"Because the company did not accept applications by mail, he had to ___ his application on the company\\'s website.",a:"submit"},{s:"The city can be divided into two parts; the outer sections are quite ___, while the historical city centre is old.",a:"new"},{s:"I love pets. I\\'m a member of an animal ___ group and do volunteer work once a month.",a:"protection"},{s:"If you don\\'t meet the height ___ you are not allowed to get on the ride.",a:"requirement"},{s:"In my company, it is the manager\\'s job to divide work ___ the team members.",a:"among"}],
E:["Speak with my assistant and she will schedule you","You can use the computer in a minute","The hotels are so nice here","The plates are in the cupboard next to the sink","I have to agree with you","The company first opened when I was much younger","It's a good idea to create a different version of your resume","I would love to go","Please note that the phone and the fax number will remain the same","I'll be finished by Friday","The plan will be drawn tomorrow morning when everyone is together","Please reply to this email if you're attending the seminar","The train comes here every twenty minutes","According to the weather forecast it's going to be really hot this weekend"],
F:[{t:"Passage 1",p:"Anna picked up her suit from the dry cleaners. After she had paid, she noticed that the cleaners had not cleaned the suit properly. She politely brought this to their attention and requested a refund. Although the cleaner apologized, he said that it was not his fault and refused to give Anna a refund.",k:["Anna picked up suit from dry cleaners","suit was not cleaned properly","she politely requested a refund","cleaner apologized but said not his fault","cleaner refused to give a refund"]},{t:"Passage 2",p:"Anna was organizing a birthday party for her coworker, Susan. Anna wanted it to be a surprise party, so she warned everyone not to tell Susan. Then Anna asked the president to send an email inviting everyone to a company meeting. Susan walked into the conference room expecting a meeting, but instead everyone shouted Happy Birthday.",k:["Anna organizing surprise birthday party for Susan","warned everyone to keep it secret","president sent fake meeting invitation","Susan walked in expecting a meeting","everyone shouted Happy Birthday"]}]},

4:{name:"Test 4",src:"Practice PDF",
A:["Do you have a final written approval for the project","When you go for an interview you must be comfortably dressed","Are you willing to relocate or tied to that area","We make special reservations for international clients","Have you tried applying for a job","It would take six months to complete the construction of the new office","Please join us in the next spring for our annual conference in New York city","He can fix anything","He wants to know if the price includes breakfast","Highly motivated people are always valued by our company","By the middle of the morning half of the sales team had left already","We have a corporate program for those who are interested in larger purchases","I heard that they made quite large profits from the sale","Which car is yours","The book is so interesting that you won't miss a word","Please join us for lunch next Tuesday"],
B:[{w:"the person / who called me / was my sister",a:"The person who called me was my sister"},{w:"we wondered / whether / the new piano would fit in here",a:"We wondered whether the new piano would fit in here"},{w:"the packet / will be sent / tomorrow morning",a:"The packet will be sent tomorrow morning"},{w:"I have / finished / my homework",a:"I have finished my homework"},{w:"the samples / were delivered / last week",a:"The samples were delivered last week"},{w:"making a good impression / at a job interview / requires some preparation",a:"Making a good impression at a job interview requires some preparation"},{w:"for her birthday / I sent my mother / some flowers",a:"I sent my mother some flowers for her birthday"},{w:"the cowboy / rides on / the horse",a:"The cowboy rides on the horse"}],
C:[{s1:"Do you want to share a taxi to the airport?",s2:"Sure, what time is your flight?",s3:"At six in the morning.",q:"How will they get to the airport?",a:"By taxi"},{s1:"I need to find a good doctor in this city.",s2:"My doctor is excellent. I can give you her number.",s3:"That would be very helpful.",q:"What will the woman give?",a:"Her doctor's phone number"},{s1:"How long does it take to get downtown from here?",s2:"About twenty minutes by subway.",s3:"That's not too bad.",q:"How long does it take to get downtown?",a:"About twenty minutes"},{s1:"I'm thinking of applying for the manager position.",s2:"You should. You have a lot of experience.",s3:"Do you really think so?",q:"What position is the man thinking of applying for?",a:"The manager position"},{s1:"Can you recommend a good hotel near the conference center?",s2:"The Grand Hotel is very close and affordable.",s3:"I'll look into that, thank you.",q:"What hotel does the woman recommend?",a:"The Grand Hotel"},{s1:"Did you hear that Tom is moving to another department?",s2:"No, when did that happen?",s3:"He announced it at this morning's meeting.",q:"When did Tom announce his move?",a:"At this morning's meeting"},{s1:"This printer keeps jamming.",s2:"Did you check the paper tray?",s3:"Yes, it seems fine.",q:"What problem does the woman have?",a:"The printer keeps jamming"},{s1:"I hear you're taking a cooking class.",s2:"Yes, every Tuesday evening.",s3:"That sounds like fun.",q:"When does the man take his cooking class?",a:"Every Tuesday evening"},{s1:"Have you seen the new cafe that opened downtown?",s2:"Yes, I went there yesterday. The coffee is amazing.",s3:"I'll have to try it.",q:"What does the man think of the coffee?",a:"It's amazing"},{s1:"I can't find my keys anywhere.",s2:"Did you check your coat pocket?",s3:"Oh, there they are! Thanks.",q:"Where were the keys?",a:"In the coat pocket"},{s1:"Are you free for lunch tomorrow?",s2:"I have a meeting until noon.",s3:"How about one o'clock then?",q:"What time does the woman suggest for lunch?",a:"One o'clock"},{s1:"The new employee seems very capable.",s2:"Yes, she has a lot of experience in this field.",s3:"I think she'll be a great addition to the team.",q:"What do they think of the new employee?",a:"She is capable and experienced"}],
D:[{s:"Negotiations came to a ___ as leaders struggled to reach terms that were common to both parties.",a:"halt"},{s:"He is running ___. He should have been here an hour ago.",a:"late"},{s:"My friend who has lived in New York all his life took me on a personal ___ of the city.",a:"tour"},{s:"A good policy is to always respond to customer requests ___ 24 hours.",a:"within"},{s:"It looks like this document has been edited. Is this the ___ report?",a:"final"},{s:"We had planned to go hiking today, but the weather was so bad we had to come up with an ___ plan.",a:"alternate"},{s:"There was a clear blue sky and the ___ was shining.",a:"sun"},{s:"The training programme offers a wide selection of ___ to any interested employee at a minimum charge.",a:"courses"},{s:"Workers who have previously ___ training are exempted from the new training requirement.",a:"completed"},{s:"I dropped my clothes off at the dry ___ on my way to work this morning.",a:"cleaner"},{s:"He\\'s concerned for the environment — the soles of his shoes were made from his old ___.",a:"tyres"},{s:"Please check all ___ for the correct return address.",a:"envelopes"},{s:"Please make sure that all seatbelts are ___ fastened.",a:"securely"},{s:"The company achieved its ___ last year and reported a profit.",a:"target"},{s:"They found that gadgets like phones and small electronic devices are very popular among online ___.",a:"shoppers"},{s:"You may not agree with his ___, but there\\'s no question that he makes a lot of money for the company.",a:"method"},{s:"If you want a hardworking and dependable employee, I highly ___ that you hire him.",a:"recommend"},{s:"The amount of air ___ in this town has increased substantially since the factory opened.",a:"pollution"}],
E:["I threw the magazine away yesterday","The document needs to be edited","I'll be back in the middle of September","They presented a plan to reduce the large debt","The company has grown too large over the years","I don't like to eat breakfast","She knows several journalists who work for a large newspaper","I'm busy let's take a break","Many companies operate in more than one country","My neighbor has been practicing the piano for thirteen years","It's a good day for being outdoors","Poland used to be a communist country","They often share a bottle of wine while reminiscing over family photo albums","This particular quote is indeed inspiring"],
F:[{t:"Passage 1",p:"John is the sales manager of a small store. An angry customer called him to complain about a home security system that she had recently bought from his store. She told him that it did not work properly because the alarm went off when she was in the house. Initially she demanded a refund, but when John apologized and offered to replace her system with a new one, she agreed.",k:["John is the sales manager","customer complained about security system going off wrongly","customer demanded a refund","John apologized and offered a replacement","customer agreed to the replacement"]},{t:"Passage 2",p:"Mary won this year's best teacher award at her university. She had been known for her creative and unique teaching style for many years. Her award included a trip to Paris for one week. Mary and her husband have never been to Paris and they are very excited about it.",k:["Mary won best teacher award","known for creative and unique teaching style","award includes a week trip to Paris","Mary and husband never been to Paris","they are very excited"]}]},

5:{name:"Test 5",src:"Practice PDF",
A:["I can offer you an upgrade","They wrote down each other's phone numbers","The search for a qualified software engineer has proved difficult","Do you have any references","What time do you get up in the morning","If you are not registered please complete the information given below","The pay is too low for me to work there anymore","I have a good idea","Would you send me the parts over as soon as possible","We have a corporate program for those interested in larger purchases","Please take the car but you have to pay for the parking","They are trying to fix the problem but so far they had no luck","In this area agriculture is the major industry","Orders placed ten days ahead must be picked up at the counter","My parents had a karaoke machine","Have you ever tried the Mexican food"],
B:[{w:"did you / finish cleaning / the dishes",a:"Did you finish cleaning the dishes"},{w:"I think / it is going to / rain today",a:"I think it is going to rain today"},{w:"what movie / did you watch / last night",a:"What movie did you watch last night"},{w:"I studied a lot / for the test",a:"I studied a lot for the test"},{w:"my boss / moved / to London",a:"My boss moved to London"},{w:"being punctual / shows respect / in Korea",a:"Being punctual shows respect in Korea"},{w:"the workers / will not / receive a bonus",a:"The workers will not receive a bonus"},{w:"sometimes I wish / that my computer / would be more reliable",a:"Sometimes I wish that my computer would be more reliable"}],
C:[{s1:"Can you pick up the dry cleaning on your way home?",s2:"Sure. What time does it close?",s3:"At seven.",q:"What time does the dry cleaning close?",a:"Seven o'clock"},{s1:"I'm looking for a gift for my colleague's retirement.",s2:"How about a nice pen set?",s3:"That's a great idea.",q:"What gift does the woman suggest?",a:"A pen set"},{s1:"The presentation went really well today.",s2:"Yes, the clients seemed very impressed.",s3:"I think we'll get the contract.",q:"How did the clients react?",a:"They were very impressed"},{s1:"How do you get to work every day?",s2:"I take the subway. It's faster than driving.",s3:"That makes sense.",q:"How does the man get to work?",a:"By subway"},{s1:"I think our budget needs to be revised.",s2:"I agree. Costs have gone up a lot recently.",s3:"Let's schedule a meeting about it.",q:"What do they want to revise?",a:"The budget"},{s1:"Have you read the new company policy?",s2:"Not yet. Where can I find it?",s3:"It's on the company intranet.",q:"Where is the new company policy?",a:"On the company intranet"},{s1:"The flight has been delayed by two hours.",s2:"That's frustrating. I have a connection to make.",s3:"You should speak to the airline staff.",q:"What is the problem with the flight?",a:"It has been delayed by two hours"},{s1:"I need to submit my report by end of day.",s2:"Do you need any help with the data?",s3:"That would be very helpful, thank you.",q:"When does the report need to be submitted?",a:"By end of day"},{s1:"Have you decided where to go on vacation?",s2:"I'm thinking about Italy.",s3:"That's a wonderful choice.",q:"Where is the man thinking of going on vacation?",a:"Italy"},{s1:"I left my umbrella on the train.",s2:"You should call the lost and found.",s3:"Good idea. I'll do that now.",q:"What does the woman suggest?",a:"Call the lost and found"},{s1:"How many people will be at the conference?",s2:"We're expecting about two hundred.",s3:"That's a large event.",q:"How many people are expected?",a:"About two hundred"},{s1:"I can't open this file on my computer.",s2:"You might need to update your software.",s3:"I'll try that.",q:"What does the man suggest?",a:"Update the software"}],
D:[{s:"The number of attendees far ___ our expectations.",a:"exceeded"},{s:"The store had only been in ___ for two months when the owner sold it.",a:"business"},{s:"The event was ___ by an audience of over 30,000 people.",a:"attended"},{s:"If you want to meet with the CEO, you need to make an appointment a ___ in advance.",a:"week"},{s:"Even if you run fast, you probably won\\'t be able to ___ the train.",a:"catch"},{s:"Thank you very much for your help on such short ___. It helped us immediately.",a:"notice"},{s:"All the city council members, with the ___ of one, voted against the new law.",a:"exception"},{s:"The library ___ the event by posting flyers around the city.",a:"publicized"},{s:"You need a ___ ticket if you want to leave your car here.",a:"parking"},{s:"I couldn\\'t believe ___ when he agreed to make an announcement on the show tonight.",a:"it"},{s:"She was temporarily ___ by the brightness of the sun.",a:"blinded"},{s:"The baker had several ___ on his wrists from touching the sides of the oven.",a:"burns"},{s:"The residents were advised to ___ their homes before the storm reached them.",a:"evacuate"},{s:"Lock your valuables in the ___ provided in your hotel room.",a:"safe"},{s:"After making one last ___ to the layout, the newsletter was ready to be sent out.",a:"modification"},{s:"I can\\'t imagine what it would be ___ to do a task like this all day.",a:"like"},{s:"Finally, everything is finished now that the project has reached its ___.",a:"end"},{s:"When travelling in a foreign country, you should always carry some form of ___ card.",a:"identity"}],
E:["There was a dearth of usable firewood at the campsite","Corruption is at its peak during election time","You'll have to bear the consequences of your actions","Theme parks are a source of fun for people of all ages","I went to the University of Bristol where I studied chemistry","This is what we would call a state of equilibrium","Professor Smith will be late for today's lecture","Three of the students were confused by the key hypothesis","The circulation desk is located on the ground floor","Patients diagnosed with heart failure will often report being depressed","There was little available evidence to contradict his viewpoint","We have to hand our assignments in tomorrow at the latest","The majority of students in this college are postgraduates","All first year students should attend the introductory lecture today"],
F:[{t:"Passage 1",p:"Our gym is located across from your office and is currently offering a special discount to all employees working in your building. According to researchers, getting exercise regularly is a great way to stay positive and healthy. If you sign up for a membership this week, you can get a personal trainer to help you on your first five visits.",k:["gym is across from the office","offering special discount to employees","exercise keeps you positive and healthy","sign up this week","get personal trainer for first five visits"]},{t:"Passage 2",p:"Sam was on a busy flight that had been delayed. The plane finally landed and arrived at the gate. Then all the passengers got up to get their luggage. The woman in front of Sam accidentally bumped him in the arm. Just as she was apologizing, her bag fell from the overhead compartment and hit him on the head. The woman felt awful. Sam decided he didn't want to fly again anytime soon.",k:["Sam on a delayed flight","plane finally landed","woman bumped Sam and then apologized","woman's bag fell and hit Sam on head","Sam decided not to fly again soon"]}]},

6:{name:"Test 6",src:"Practice PDF",
A:["People really shouldn't text while they are walking","Well I'm interviewing for the position of production assistant","Good afternoon, do you have a reservation with us","Would it be possible to use the computer in your business centre to research these hotels","Actually I read somewhere that banner ads do influence","It's been cloudy the whole week","Everyone has an opinion about what the city should be spending money on","First I want to talk about the ways you can prepare yourself to ask for a raise","Let's wash the dishes before we leave","It's supposed to rain tomorrow isn't it","Take some time to think about the options available to you","How can we fit all this text onto such a small space","Today's workshop will take place a little earlier than we thought","How long do you think we'll have to wait","Let's stop at the bank on the right hand side","My sister's company was established quite some time ago"],
B:[{w:"the customer asked / for a large bowl / of chicken soup",a:"The customer asked for a large bowl of chicken soup"},{w:"your team / had been working / the hardest",a:"Your team had been working the hardest"},{w:"he doesn't know / if the letter / has been delivered",a:"He doesn't know if the letter has been delivered"},{w:"three teenagers / brought / the rare painting into this country",a:"Three teenagers brought the rare painting into this country"},{w:"the computer / has been repaired / by her daughter",a:"The computer has been repaired by her daughter"},{w:"the concert / will be postponed / or cancelled",a:"The concert will be postponed or cancelled"},{w:"real smiles and fake smiles / by different parts of the brain / are controlled",a:"Real smiles and fake smiles are controlled by different parts of the brain"},{w:"have you ever / had one / of those weeks",a:"Have you ever had one of those weeks"}],
C:[{s1:"Is the post office far from here?",s2:"It's about a ten minute walk.",s3:"That's fine, I'll walk.",q:"How far is the post office?",a:"About ten minutes walk"},{s1:"I'm thinking of learning a new language.",s2:"Spanish is very useful. There are many speakers worldwide.",s3:"Maybe I'll try that.",q:"What language does the woman recommend?",a:"Spanish"},{s1:"The cafeteria is closed today.",s2:"Really? Why is that?",s3:"They're doing renovations.",q:"Why is the cafeteria closed?",a:"For renovations"},{s1:"My computer is running very slowly today.",s2:"Have you tried restarting it?",s3:"Yes, but it's still slow.",q:"What problem does the woman have?",a:"Her computer is running slowly"},{s1:"I need to renew my driver's license.",s2:"You can do it online now.",s3:"Really? That's convenient.",q:"How can the man renew his license?",a:"Online"},{s1:"We're running low on office supplies.",s2:"I'll order more this afternoon.",s3:"Please make sure to get extra printer paper.",q:"What does the man want to make sure to order?",a:"Extra printer paper"},{s1:"How was the job interview?",s2:"It went very well. I think they liked me.",s3:"I hope you get the position.",q:"How does the woman feel about the interview?",a:"It went very well"},{s1:"I need to book a meeting room for next Monday.",s2:"Room three is available in the morning.",s3:"Perfect, I'll take that one.",q:"When does the man need the meeting room?",a:"Next Monday morning"},{s1:"I'm thinking of starting my own business.",s2:"That's exciting. Do you have a plan?",s3:"Yes, I've been working on it for months.",q:"What has the man been working on?",a:"A business plan"},{s1:"Did you see the game last night?",s2:"No, I had to work late.",s3:"You missed a great match.",q:"Why didn't the man see the game?",a:"He had to work late"},{s1:"I can't believe how fast the year has gone.",s2:"I know. It feels like January was just yesterday.",s3:"Time really flies when you're busy.",q:"What are they talking about?",a:"How quickly the year has passed"},{s1:"Do you know where the nearest bank is?",s2:"There's one on the corner of Main and Fifth Street.",s3:"Thank you, I'll head there now.",q:"Where is the bank?",a:"On the corner of Main and Fifth Street"}],
D:[{s:"It has yet to be ___ whether the company will stay in business next year.",a:"seen"},{s:"I had to take out a loan from the bank to ___ the cost of replacing the roof.",a:"cover"},{s:"Although sales were down last quarter, the owner had high ___ that business would improve soon.",a:"hopes"},{s:"This is the cutting ___ technology. It\\'s the best on the market.",a:"edge"},{s:"I have ___ sleeping at night, so I usually wake up very tired.",a:"trouble"},{s:"I\\'m a salesman. And you, what do you ___?",a:"do"},{s:"The man ___ his car keys and spent an hour looking for them this morning.",a:"misplaced"},{s:"Over three hundred people ___ the store\\'s grand opening.",a:"witnessed"},{s:"My sister is ___ from the surgery very well.",a:"recovering"},{s:"The product is out of stock until the next ___ arrives.",a:"consignment"},{s:"City buildings can only be so tall. The exact height will ___ on local regulations.",a:"depend"},{s:"For more information about the product, please consult the instruction ___.",a:"manual"},{s:"The new trainees are doing ___ just fine.",a:"along"},{s:"The class has to be ___ indefinitely because of the summer schedule.",a:"paused"},{s:"He can ___ your order as soon as you know what you want to purchase.",a:"place"},{s:"She gets her supplies at a low rate because she buys in ___.",a:"bulk"},{s:"Can I bring you something to ___? Perhaps tea or coffee?",a:"drink"},{s:"I went ___ yesterday and spent all my savings.",a:"shopping"}],
E:["Remember to take all your belongings when you leave the lab","Do you live here","I don't have any information","Report any computer issues to technical support","When is the game","Let's put our heads together and come up with a solution","We need to make sure that our department is ready for inspection","I'll see you on Thursday","Aren't you going to eat something","He said he would like a cup of coffee","I turned down the offer because they needed someone who could travel","I knew something would go wrong with the plan","Today's workshop will take place a little earlier than we thought","Various tax incentives are available to you and your employees"],
F:[{t:"Passage 1",p:"This is our annual reminder to all employees. Our hospital is known in our community for excellent customer care. We have been providing friendly and quality services to all our patients and are committed to doing the same again this year. Greet your patients with a smile and hospitality.",k:["annual reminder to employees","hospital known for excellent customer care","providing friendly quality services","committed to same standards this year","greet patients with smile and hospitality"]},{t:"Passage 2",p:"As I told you at our last meeting, I am moving on to a new position in another company next week. My last working day is Friday January twenty-fifth. Thanks for being such a great team to work with. I will miss you all and hope you will stay in touch.",k:["moving to new position at another company","last working day is Friday January 25th","thanks for being a great team","will miss everyone","hopes to stay in touch"]}]},

7:{name:"Test 7",src:"Practice PDF",
A:["Let's put our heads together and come up with a solution","Can you tell them we are going to be late","The flat next door is for sale","Bring your resume and list of references to the meeting","I always wanted to learn how to play guitar","The reason is not at all clear to me","How long do you think we have to wait","If you want to meet with the CEO you need to make an appointment a week in advance","Even if you run fast you probably won't be able to catch the train it's too late","Thank you very much for your help on such short notice it helped us immediately","All the city council members with the exception of one voted against the new law","The library publicized the event by posting flyers around the city","You need a parking ticket if you want to leave your car here","I couldn't believe it when he agreed to make an announcement on the show tonight","She was temporarily blinded by the brightness of the sun","The baker had several burns on his wrists from touching the sides of the oven"],
B:[{w:"you should / not eat / while working",a:"You should not eat while working"},{w:"that financial report / is due / today",a:"That financial report is due today"},{w:"you should select / insurance / that suits your family's needs",a:"You should select insurance that suits your family's needs"},{w:"she was ready / the judge told them / to begin the trial",a:"The judge told them she was ready to begin the trial"},{w:"we / are / leaving",a:"We are leaving"},{w:"that radio / has stopped / working",a:"That radio has stopped working"},{w:"remember / to present / your business card directly",a:"Remember to present your business card directly"},{w:"you've lived / abroad / haven't you",a:"You've lived abroad haven't you"}],
C:[{s1:"I need to take a day off next week.",s2:"Have you filled out the leave request form?",s3:"Not yet, I'll do it this afternoon.",q:"What does the man need to do?",a:"Fill out a leave request form"},{s1:"The new catalog arrived this morning.",s2:"Oh good. I've been waiting for it.",s3:"It has a lot of new products.",q:"What arrived this morning?",a:"The new catalog"},{s1:"My car is in for repairs.",s2:"How are you getting to work then?",s3:"I'm taking the bus.",q:"How is the man getting to work?",a:"By bus"},{s1:"I need someone to cover for me on Friday.",s2:"What time do you need me to start?",s3:"Could you come in at nine?",q:"What time does the man want the woman to come in?",a:"Nine o'clock"},{s1:"The package still hasn't arrived.",s2:"Did you track it online?",s3:"Yes, it says it's out for delivery.",q:"What does the tracking say?",a:"It's out for delivery"},{s1:"I'm looking for a job closer to home.",s2:"Have you tried the new tech company downtown?",s3:"No, I didn't know they were hiring.",q:"Where does the woman suggest looking for a job?",a:"The new tech company downtown"},{s1:"We need to order more office chairs.",s2:"How many do we need?",s3:"At least twelve.",q:"How many office chairs are needed?",a:"At least twelve"},{s1:"The conference room is booked all day tomorrow.",s2:"Can we use the smaller meeting room instead?",s3:"That should work.",q:"What do they decide to use instead?",a:"The smaller meeting room"},{s1:"I heard there's a new restaurant opening next week.",s2:"Yes, I saw the sign. It looks like an Italian place.",s3:"I'll definitely check it out.",q:"What kind of restaurant is opening?",a:"An Italian restaurant"},{s1:"Can you help me move this desk?",s2:"Sure, where do you want it?",s3:"Against the window please.",q:"Where does the woman want the desk?",a:"Against the window"},{s1:"Have you signed up for the training yet?",s2:"Not yet. When is the deadline?",s3:"By end of this week.",q:"When is the training sign-up deadline?",a:"By end of this week"},{s1:"I lost my phone this morning.",s2:"Did you try calling it?",s3:"Yes, but the battery must be dead.",q:"Why couldn't the man find his phone by calling it?",a:"The battery was dead"}],
D:[{s:"I need to write your first name. How do you ___ it?",a:"pronounce"},{s:"She was ___ manager but has now been promoted to a senior management position.",a:"junior"},{s:"She ran to the corner but she just ___ the bus, so she had to wait for the next one.",a:"missed"},{s:"You\\'re driving too ___. You should slow down.",a:"fast"},{s:"I haven\\'t eaten anything all day. I\\'m so ___!",a:"hungry"},{s:"She was ___ a promotion based on her excellent performance on the job.",a:"awarded"},{s:"It was so ___ outside that no one wanted to leave the air-conditioned house.",a:"hot"},{s:"I\\'m not sure I can come tomorrow. I\\'ll have to ___ my schedule.",a:"change"},{s:"The elevator is broken, so you will have to take the ___ to get to the second floor.",a:"stairs"},{s:"Where is my ___? I can\\'t find it.",a:"jacket"},{s:"My house is very ___. There\\'s just my mother, father, and me.",a:"small"},{s:"Don\\'t forget to ask for a ___ when you pay.",a:"receipt"},{s:"Since you\\'ve finished everything else, please focus your attention on finishing the ___ reports.",a:"expense"},{s:"Recent studies have shown that the shopping ___ of consumers have changed dramatically.",a:"habits"},{s:"Although sales were down last quarter, the owner had high ___ that business would improve soon.",a:"expectations"},{s:"I know you love travelling abroad. Would you be ___ in a position in our overseas office?",a:"interested"},{s:"We offer our customers the service of placing orders by phone or ___.",a:"online"},{s:"I\\'m sorry I\\'m ___. I woke up late this morning.",a:"late"}],
E:["Why do you think some of the plants didn't grow","The company may have to relocate","The heating system was just repaired","I wish we didn't have to work that night","Our sister company was established quite some time ago","Please spell check all reports before turning them in","The company has grown too large over the past few years","I eat there every night","Where are the pens we used to write on the board","Please note that our phone and fax numbers will remain the same","I like to visit my parents on the weekends","I think I'll buy this hat too","Having a pet can reduce stress","Could you tell me how many people are coming to the reception"],
F:[{t:"Passage 1",p:"Employees who wish to take time off during the summer should check with their managers in advance. Many people plan to be away from the office during the summer. As a company, we'd like to make sure all projects have enough people working on them before we approve requests for time off.",k:["employees wanting summer time off should check with managers","many people plan to be away in summer","company wants all projects staffed","need enough people working before approving time off","check in advance"]},{t:"Passage 2",p:"Robert went to a nice restaurant for dinner. When the waiter brought the bill, Robert reached for his wallet, but it wasn't in his pocket. He remembered having his wallet when he came into the restaurant. The waiter looked around the floor near his table. He found the wallet under the table.",k:["Robert went to a restaurant for dinner","couldn't find his wallet when bill came","remembered having it when he entered","waiter looked around the floor","wallet was found under the table"]}]},

8:{name:"Test 8",src:"Practice PDF",
A:["The residents were advised to evacuate their homes before the storm reached them","Lock your valuables in the safe provided in your hotel room","After making one last modification to the layout the newsletter was ready to be sent out","I can't imagine what it would be like having to do a task like this all day","Finally everything I had to do is finished now that the project has reached its end","When travelling in a foreign country you should always carry your passport","It has yet to be seen whether the company will stay in business next year","She was junior manager but now she has been promoted to a senior management position","She ran to the corner but she just missed the bus so she had to wait for the next one","You're driving too fast you should slow down","I haven't eaten anything all day I'm so hungry","She was awarded a promotion based on her excellent performance on the job","It was so hot outside that no one wanted to leave the air conditioned house","I'm not sure I can come tomorrow I'll have to change my schedule","Some people wear glasses to help them see better","The elevator is broken so you will have to take the stairs to get to the second floor"],
B:[{w:"I'd like / to buy one / for myself",a:"I'd like to buy one for myself"},{w:"many farmers / stopped / growing corn",a:"Many farmers stopped growing corn"},{w:"the green ones / are more expensive / than the blue ones",a:"The green ones are more expensive than the blue ones"},{w:"receive a bonus / the workers / will not",a:"The workers will not receive a bonus"},{w:"when does / the workshop start / next week",a:"When does the workshop start next week"},{w:"for a large bowl / of chicken soup / the customer asked",a:"The customer asked for a large bowl of chicken soup"},{w:"nearly everybody / was asleep / by then",a:"Nearly everybody was asleep by then"},{w:"three teenagers / brought the rare painting / into this country",a:"Three teenagers brought the rare painting into this country"}],
C:[{s1:"The elevator is out of service again.",s2:"Third time this month.",s3:"I guess we're taking the stairs.",q:"How will they get to their floor?",a:"By taking the stairs"},{s1:"I forgot to bring my lunch today.",s2:"There's a good sandwich shop nearby.",s3:"Perfect, I'll go there.",q:"Where will the woman go for lunch?",a:"A nearby sandwich shop"},{s1:"The client meeting is at two o'clock.",s2:"Should I prepare any materials?",s3:"Just bring your laptop.",q:"What does the man ask the woman to bring?",a:"Her laptop"},{s1:"I'm moving to a new apartment next month.",s2:"That's exciting. Is it bigger?",s3:"Yes, it has an extra bedroom.",q:"What does the new apartment have?",a:"An extra bedroom"},{s1:"Did you finish the quarterly report?",s2:"Almost. I just need to add the charts.",s3:"The deadline is tomorrow morning.",q:"When is the deadline for the report?",a:"Tomorrow morning"},{s1:"I spilled coffee on my keyboard.",s2:"You should dry it out before using it again.",s3:"Good advice. I'll leave it overnight.",q:"What does the woman suggest?",a:"Dry the keyboard out first"},{s1:"The supplies arrived but two boxes are missing.",s2:"I'll call the supplier right away.",s3:"Thank you, we need them urgently.",q:"What will the woman do?",a:"Call the supplier"},{s1:"I need a reference letter from my previous employer.",s2:"Have you contacted them yet?",s3:"I'll send an email today.",q:"How will the man contact his previous employer?",a:"By email"},{s1:"The quarterly results just came in.",s2:"How did we do?",s3:"Revenue is up fifteen percent.",q:"By how much did revenue increase?",a:"Fifteen percent"},{s1:"Have you met the new head of marketing?",s2:"Not yet. What's she like?",s3:"Very dynamic and experienced.",q:"What is the new head of marketing like?",a:"Dynamic and experienced"},{s1:"The Wi-Fi in the office is very slow today.",s2:"I know. IT is working on it.",s3:"I hope it's fixed by this afternoon.",q:"Who is working on the Wi-Fi problem?",a:"The IT department"},{s1:"I need to prepare a presentation for Monday.",s2:"Do you want me to review your slides?",s3:"That would be very helpful.",q:"What does the man offer to do?",a:"Review the slides"}],
D:[{s:"How much does the necklace ___? I don\\'t see a price.",a:"cost"},{s:"The bill wasn\\'t right. I think they made a ___.",a:"mistake"},{s:"My ears are ___ because the music was so loud at the concert.",a:"ringing"},{s:"Let\\'s ___ tomorrow\\'s presentation until next week. I\\'m just too busy to prepare for it.",a:"postpone"},{s:"Today is Tuesday. ___ was Monday.",a:"Yesterday"},{s:"What time is it? I don\\'t have a ___.",a:"watch"},{s:"Can you turn the lights ___? I can\\'t see anything.",a:"on"},{s:"My flight ___ ten minutes later than scheduled but arrived on time.",a:"departed"},{s:"An increasing number of businesses have recently shut down due to the economic ___.",a:"downturn"},{s:"The employees of our factory must follow a strict set of safety ___.",a:"guidelines"},{s:"I don\\'t have my credit card. I must have ___ it at home.",a:"left"},{s:"How many languages can you ___?",a:"speak"},{s:"What ___ is it? I don't have a watch.",a:"time"},{s:"I'm a salesman. And you, what do you ___?",a:"do"},{s:"The man ___ his car keys and spent an hour looking for them.",a:"misplaced"},{s:"Gadgets like phones and small electronic ___ are popular among online shoppers.",a:"devices"},{s:"Let's ___ tomorrow's presentation until next week. I'm too busy.",a:"postpone"},{s:"I don't have my credit card. I must have ___ it at home.",a:"left"}],
E:["It's raining at the moment","Speak with my assistant and she will schedule you","You can use the computer in a minute","The hotels are so nice here","The plates are in the cupboard next to the sink","I have to agree with you","The company first opened when I was much younger","It's a good idea to create a different version of your resume","I would love to go","Please note that the phone and the fax number will remain the same","I'll be finished by Friday","The plan will be drawn tomorrow morning when everyone is together","Please reply to this email if you're attending the seminar","The train comes here every twenty minutes"],
F:[{t:"Passage 1",p:"I was at the international Trade Fair in Rome last week, and it was very exciting. Rome is a beautiful city. There were people from all over the world at the fair. I met a sales manager whose company sells software and it sounded like there might be a business opportunity. I'll definitely stay in touch with him as a business contact.",k:["attended international Trade Fair in Rome","Rome is a beautiful city","met people from all over the world","met a software sales manager with potential opportunity","will stay in touch as a business contact"]},{t:"Passage 2",p:"Thank you for your interest in our certificate program. The program is specifically designed for people with a full-time job. All our classes are offered at night and on weekends. Not only can our program offer you the knowledge you need in your field, it will also give you the opportunity to meet people working in the same industry.",k:["thank you for interest in certificate program","designed for people with full-time jobs","classes at night and on weekends","offers knowledge needed in your field","opportunity to meet people in the same industry"]}]},

9:{name:"Test 9",src:"Practice PDF",
A:["Where is my jacket I can't find it","My house is very small there's just my mother father and me","I was recently transferred from the Berlin office to the Tokyo office","Don't forget to ask for a receipt when you pay","Recent studies have shown that the shopping habits of consumers have changed","Although sales were down last quarter the owner had high expectations that business would improve","I know you love travelling abroad would you be interested in a position in our overseas office","Check in at the front desk before you take a seat","Her plane leaves at nine fifteen a.m.","Management refused to serve any more","I started my new job last week","My job is exciting but it demands a lot of time","With experience you can improve your project estimate","I just wanted to check in and see if there is any progress","The expenses are more than the budget allowed","This model is currently out of stock"],
B:[{w:"my sister / was listening to / her favourite music",a:"My sister was listening to her favourite music"},{w:"we thought / it was / a lockdown",a:"We thought it was a lockdown"},{w:"the world / is / so small",a:"The world is so small"},{w:"it could / have been / something else",a:"It could have been something else"},{w:"my grandparents / were born / long ago",a:"My grandparents were born long ago"},{w:"please leave / the door / open",a:"Please leave the door open"},{w:"I am listening / to the radio",a:"I am listening to the radio"},{w:"how are / you / doing",a:"How are you doing"}],
C:[{s1:"The project deadline has been pushed back by a week.",s2:"That's a relief. We were running behind.",s3:"Now we have more time to polish everything.",q:"What happened to the project deadline?",a:"It was pushed back by a week"},{s1:"I can't find the meeting agenda.",s2:"I'll send you a copy right now.",s3:"Thank you, I have an important point to add.",q:"What does the woman say she will do?",a:"Send a copy of the agenda"},{s1:"The photocopier is out of paper.",s2:"There should be more in the storage room.",s3:"I'll go get some.",q:"Where should the woman look for more paper?",a:"The storage room"},{s1:"Are you going to the networking event tonight?",s2:"Yes, I think it's important to meet new contacts.",s3:"I agree. I'll see you there.",q:"Why is the man going to the networking event?",a:"To meet new contacts"},{s1:"I ordered the wrong size for these uniforms.",s2:"Can you return them?",s3:"Yes, the supplier accepts returns within thirty days.",q:"When can the uniforms be returned?",a:"Within thirty days"},{s1:"I'm having trouble understanding this contract.",s2:"You should ask the legal team to review it.",s3:"Good idea, I'll email them now.",q:"What does the woman suggest?",a:"Ask the legal team to review it"},{s1:"The branch office in Singapore is expanding.",s2:"How many new positions will be created?",s3:"About fifty over the next two years.",q:"How many new positions will be created?",a:"About fifty"},{s1:"My presentation is scheduled for nine in the morning.",s2:"Do you have everything prepared?",s3:"Almost. I just need to rehearse once more.",q:"What does the man still need to do?",a:"Rehearse his presentation"},{s1:"I'm going to apply for a scholarship.",s2:"That's a great idea. What are the requirements?",s3:"Mainly a good academic record and an essay.",q:"What are the main requirements for the scholarship?",a:"A good academic record and an essay"},{s1:"The new policy takes effect next month.",s2:"Has everyone been informed?",s3:"We sent an email to all staff yesterday.",q:"How were staff informed about the policy?",a:"By email"},{s1:"I can't attend the morning session.",s2:"The afternoon session covers the same material.",s3:"Perfect, I'll join that one.",q:"What does the woman say about the afternoon session?",a:"It covers the same material"},{s1:"We're out of milk.",s2:"I'll pick some up on my way home.",s3:"Could you also get some bread?",q:"What does the woman ask the man to get?",a:"Bread"}],
D:[{s:"When travelling abroad, always carry your passport or some form of ___.",a:"identification"},{s:"When it rains, there are dark ___ in the sky.",a:"clouds"},{s:"She ran to the corner but just ___ the bus, so she had to wait.",a:"missed"},{s:"I'm not sure I can come tomorrow. I'll have to ___ my schedule.",a:"check"},{s:"It looks like this document has been edited. Is this the final ___?",a:"copy"},{s:"Before you drive over the bridge you have to pay the ___ at the booth.",a:"toll"},{s:"The employees of our factory must follow a strict set of safety ___.",a:"procedures"},{s:"She gets her supplies at a low ___ because she buys in bulk.",a:"rate"},{s:"This is cutting ___ technology. It's the best on the market.",a:"edge"},{s:"My friend took me on a personal ___ of the city.",a:"tour"},{s:"The department will have to ___ the cost of the failure themselves.",a:"bear"},{s:"You're driving too ___. You should slow down.",a:"fast"},{s:"She was awarded a promotion based on her excellent ___ on the job.",a:"performance"},{s:"The outer sections are quite ___, while the city center is rather old.",a:"new"},{s:"If you want a dependable employee, I highly ___ that you hire him.",a:"recommend"},{s:"Some people wear ___ to help them see better.",a:"glasses"},{s:"Don't forget to ___ for a receipt when you pay.",a:"ask"},{s:"An increasing ___ of businesses have recently shut down.",a:"number"}],
E:["According to the weather forecast it's going to be really hot this weekend","I threw the magazine away yesterday","The document needs to be edited","I'll be back in the middle of September","They presented a plan to reduce the large debt","The company has grown too large over the years","I don't like to eat breakfast","She knows several journalists who work for a large newspaper","I'm busy let's take a break","Many companies operate in more than one country","My neighbor has been practicing the piano for thirteen years","It's a good day for being outdoors","Poland used to be a communist country","They often share a bottle of wine while reminiscing over family photo albums"],
F:[{t:"Passage 1",p:"Thank you so much for dinner last night. We had a really good time. We are especially glad to be able to meet your little daughter. I hope you will be able to come to visit us someday soon. Let's stay in touch.",k:["thanking someone for dinner last night","had a really good time","glad to meet the little daughter","hopes they will visit soon","wants to stay in touch"]},{t:"Passage 2",p:"Mark your calendars for the office party! This year, we are having a barbecue, Saturday night six p.m. Dress is casual. Please sign up and tell us how many people you will be bringing. See you there!",k:["office party invitation","barbecue on Saturday night at six p.m.","dress code is casual","need to sign up","say how many people you're bringing"]}]},

10:{name:"Test 10",src:"Practice PDF",
A:["This floor plan is not only larger but also conveniently laid out","Exit through the door on your left","I need help with the new printer","We can't offer that but there is something else I can do","If you find any errors in this be sure to let me know","This letter must be received by tomorrow","Shipping and handling costs are not included","After January first rates will be lowered considerably","The author of this text would have liked more figures","You have to be in a lot of pain","Are you dreaming of a career in healthcare","I think I will buy this hat too","The alarm isn't loud enough is it","Please join us in the spring for our annual conference in New York City","Their explanation would be more easy to understand if they had presented it more slowly","By the middle of the morning half the sales team had left already"],
B:[{w:"who is / your favourite / singer",a:"Who is your favourite singer"},{w:"all the windows / were / broken",a:"All the windows were broken"},{w:"this milk / doesn't taste / very good",a:"This milk doesn't taste very good"},{w:"she / can't stay / there",a:"She can't stay there"},{w:"the doctor / advised her / to go to bed",a:"The doctor advised her to go to bed"},{w:"they discovered / what had occurred / in her absence",a:"They discovered what had occurred in her absence"},{w:"her plane / had arrived / an hour late",a:"Her plane had arrived an hour late"},{w:"negotiating a salary / takes confidence / and patience",a:"Negotiating a salary takes confidence and patience"}],
C:[{s1:"The annual report is due on Friday.",s2:"Do you need any help with the figures?",s3:"Yes, could you check the revenue section?",q:"What section does the man want help with?",a:"The revenue section"},{s1:"I'm looking for a reliable plumber.",s2:"My brother-in-law is a plumber. He does excellent work.",s3:"Could I have his number?",q:"What does the woman ask for?",a:"The plumber's phone number"},{s1:"The morning bus was cancelled today.",s2:"How did you get to work then?",s3:"I took a taxi.",q:"How did the man get to work?",a:"By taxi"},{s1:"I need to update my skills.",s2:"There's an online course in project management.",s3:"That sounds useful. How long is it?",q:"What kind of course does the woman recommend?",a:"A project management course"},{s1:"I missed the team briefing this morning.",s2:"Don't worry, I'll send you my notes.",s3:"That's very kind of you.",q:"What will the woman send?",a:"Her notes from the briefing"},{s1:"The client wants revisions to the proposal.",s2:"What kind of changes?",s3:"Mainly to the budget section.",q:"What needs to be revised in the proposal?",a:"The budget section"},{s1:"The parking lot is full again.",s2:"There's a public garage two blocks away.",s3:"I'll use that from now on.",q:"Where is the alternative parking?",a:"A public garage two blocks away"},{s1:"We're launching a new product next quarter.",s2:"What's the marketing strategy?",s3:"Social media and targeted email campaigns.",q:"What is the marketing strategy?",a:"Social media and targeted email campaigns"},{s1:"I'm thinking of changing careers.",s2:"What field are you interested in?",s3:"I've always liked working with technology.",q:"What field is the man interested in?",a:"Technology"},{s1:"I can't get this app to work on my phone.",s2:"Have you tried reinstalling it?",s3:"No, I'll try that.",q:"What does the woman suggest?",a:"Reinstalling the app"},{s1:"The sales figures for last month were excellent.",s2:"We exceeded our target by twenty percent.",s3:"The team did a great job.",q:"By how much did they exceed their sales target?",a:"Twenty percent"},{s1:"I need to arrange transport for the team.",s2:"How many people are there?",s3:"About fifteen.",q:"How many people need transport?",a:"About fifteen"}],
D:[{s:"Over three hundred people ___ the store's grand opening.",a:"attended"},{s:"I had to take out a ___ from the bank to cover the cost of the roof.",a:"loan"},{s:"___ making one last modification to the layout, the newsletter was ready.",a:"After"},{s:"I know you love travelling. Would you be ___ in a position in our overseas office?",a:"interested"},{s:"Should I turn right or ___ at the next corner?",a:"left"},{s:"I haven't eaten anything all day. I'm so ___.",a:"hungry"},{s:"Can you turn the light ___? I can't see anything.",a:"on"},{s:"I need to ___ my hotel reservation. I won't be staying there anymore.",a:"cancel"},{s:"In my company, it is the manager's job to divide work ___ the team members.",a:"among"},{s:"The speaker at the conference was very interesting. I ___ his talk very much.",a:"enjoyed"},{s:"I was recently ___ from the Berlin office to the Tokyo office.",a:"transferred"},{s:"For ___ about the product, please consult the instruction manual.",a:"information"},{s:"The company ___ its target last year and reported a profit.",a:"hit"},{s:"I have trouble ___ at night, so I usually wake up very tired.",a:"sleeping"},{s:"Recent studies show that the shopping ___ of consumers have changed dramatically.",a:"habits"},{s:"Although sales were down, the owner had high ___ that business would improve.",a:"hopes"},{s:"It ___ to be seen whether the company will stay in business next year.",a:"remains"},{s:"The training program ___ a wide selection of courses to any interested employee.",a:"offers"}],
E:["This particular quote is indeed inspiring","There was a dearth of usable firewood at the campsite","Corruption is at its peak during election time","You'll have to bear the consequences of your actions","Theme parks are a source of fun for people of all ages","I went to the University of Bristol where I studied chemistry","This is what we would call a state of equilibrium","Professor Smith will be late for today's lecture","Three of the students were confused by the key hypothesis","The circulation desk is located on the ground floor","Patients diagnosed with heart failure will often report being depressed","There was little available evidence to contradict his viewpoint","We have to hand our assignments in tomorrow at the latest","The majority of students in this college are postgraduates"],
F:[{t:"Passage 1",p:"James and Ann were driving to the airport. Ann asked James if he had remembered to take his passport. He realized that he had forgotten it. He had left it in his jacket pocket at home. They turned around to pick it up. They arrived at the airport just in time to catch their flight.",k:["James and Ann driving to airport","James forgot his passport","passport left at home in jacket pocket","they turned around to get it","arrived just in time for their flight"]},{t:"Passage 2",p:"John bought a new phone and was looking forward to trying it out as soon as possible. The moment John got home, he tried to turn it on, but it didn't work. He immediately drove back to the store. The salesperson showed John how to insert the battery. John was pleased that the phone was working, but felt embarrassed because he should have read the instructions.",k:["John bought a new phone","phone didn't work at home","went back to the store","salesperson showed how to insert battery","John embarrassed for not reading instructions"]}]},

11:{name:"Test 11",src:"Practice PDF",
A:["I think I'll have one too","It took several months","Good afternoon do you have a reservation with us","Would it be possible to have the suitcase replaced by the airline","Is this the right price","Their loud talking annoyed people seated nearby","His car is being repaired","The new office is across the street from the cafe","I saw him yesterday but not today","Don't eat while you are working","I am never late for work","I start my new job next week","Your business cards should arrive soon","I must have the wrong number","How long have you been studying French","Where is the exit located"],
B:[{w:"I didn't expect / to see / you again",a:"I didn't expect to see you again"},{w:"we may need / additional help / during the holidays",a:"We may need additional help during the holidays"},{w:"nobody truly understood / what she expected / her staff to do",a:"Nobody truly understood what she expected her staff to do"},{w:"David / travels frequently / for business",a:"David travels frequently for business"},{w:"call / me / later",a:"Call me later"},{w:"he will make / as many videos / as he can",a:"He will make as many videos as he can"},{w:"the flight / from Mumbai / is delayed",a:"The flight from Mumbai is delayed"},{w:"I am / not easily / offended",a:"I am not easily offended"}],
C:[{s1:"The office kitchen is being renovated.",s2:"Where can we make coffee in the meantime?",s3:"There's a machine in the break room on the second floor.",q:"Where can they make coffee?",a:"The break room on the second floor"},{s1:"I lost the client's contact details.",s2:"Check the shared drive — everything is backed up there.",s3:"Thank goodness. I'll look right away.",q:"Where should the man look for the contact details?",a:"The shared drive"},{s1:"I need to improve my public speaking skills.",s2:"There's a workshop next Thursday.",s3:"That sounds perfect. Where do I sign up?",q:"When is the workshop?",a:"Next Thursday"},{s1:"We're behind on the project timeline.",s2:"We may need to work overtime this weekend.",s3:"I'll let the team know.",q:"What may the team need to do?",a:"Work overtime this weekend"},{s1:"My visa application was approved.",s2:"That's wonderful news! When do you leave?",s3:"In two weeks.",q:"When does the man leave?",a:"In two weeks"},{s1:"I need a new laptop for work.",s2:"IT has some refurbished ones available.",s3:"That would save us money.",q:"What does IT have available?",a:"Refurbished laptops"},{s1:"The budget meeting was moved to Tuesday.",s2:"I have another meeting at that time.",s3:"I'll let the organiser know.",q:"What will the woman do?",a:"Let the organiser know about the conflict"},{s1:"I sprained my ankle jogging this morning.",s2:"You should see a doctor.",s3:"I'll make an appointment this afternoon.",q:"What does the woman suggest?",a:"See a doctor"},{s1:"I need to renew my passport.",s2:"You can apply online now.",s3:"That's much easier than before.",q:"How can the man renew his passport?",a:"Online"},{s1:"The quarterly targets were not met.",s2:"What went wrong?",s3:"The main issue was low demand in the third quarter.",q:"Why were the targets not met?",a:"Low demand in the third quarter"},{s1:"I'm having trouble with my subscription.",s2:"Have you checked your billing details?",s3:"Yes, everything looks correct.",q:"What did the man check?",a:"His billing details"},{s1:"We need more volunteers for the community event.",s2:"I can help on Saturday.",s3:"That would be wonderful, thank you.",q:"When can the woman help?",a:"On Saturday"}],
D:[{s:"I don\\'t know what I wrote. I\\'m going to ___ it completely.",a:"rewrite"},{s:"He burned the oil and the fire left a black ___ above the stove.",a:"mark"},{s:"The broadcasting company is funded by the government and owns a television ___.",a:"channel"},{s:"To celebrate our first major success, we are going to ___ a party.",a:"throw"},{s:"In cities with good public transport, it\\'s hard to understand why people insist on ___ themselves to work.",a:"driving"},{s:"When my bicycle got a flat tyre, I had to ___ the train to work.",a:"take"},{s:"Because the company did not accept applications by mail, he had to ___ his application on the company\\'s website.",a:"submit"},{s:"The city can be divided into two parts; the outer sections are quite ___, while the historical city centre is old.",a:"new"},{s:"I love pets. I\\'m a member of an animal ___ group and do volunteer work once a month.",a:"protection"},{s:"If you don\\'t meet the height ___ you are not allowed to get on the ride.",a:"requirement"},{s:"In my company, it is the manager\\'s job to divide work ___ the team members.",a:"among"},{s:"Negotiations came to a ___ as leaders struggled to reach terms that were common to both parties.",a:"halt"},{s:"He is running ___. He should have been here an hour ago.",a:"late"},{s:"My friend who has lived in New York all his life took me on a personal ___ of the city.",a:"tour"},{s:"A good policy is to always respond to customer requests ___ 24 hours.",a:"within"},{s:"It looks like this document has been edited. Is this the ___ report?",a:"final"},{s:"We had planned to go hiking today, but the weather was so bad we had to come up with an ___ plan.",a:"alternate"},{s:"There was a clear blue sky and the ___ was shining.",a:"sun"}],
E:["All first year students should attend the introductory lecture today","Remember to take all your belongings when you leave the lab","Do you live here","I don't have any information","Report any computer issues to technical support","When is the game","Let's put our heads together and come up with a solution","We need to make sure that our department is ready for inspection","I'll see you on Thursday","Aren't you going to eat something","He said he would like a cup of coffee","I turned down the offer because they needed someone who could travel","I knew something would go wrong with the plan","Today's workshop will take place a little earlier than we thought"],
F:[{t:"Passage 1",p:"I received a couple of good articles about how to be productive every day at work. I think you will find them useful. These were forwarded by our New York branch. Click on the link below to view the articles. You might learn something new.",k:["received articles about productivity at work","thinks you will find them useful","forwarded by New York branch","click the link to view articles","might learn something new"]},{t:"Passage 2",p:"After working for thirty years as a salesperson, James decided to retire. The first few weeks of his retired life were fine. He relaxed and spent a lot of time reading. After a month, he started to get bored. He decided to volunteer at the local animal rescue center. He loved working with the animals and was glad to have a scheduled activity each day.",k:["James retired after 30 years as salesperson","first weeks were fine and relaxing","got bored after a month","volunteered at local animal rescue center","loved working with animals and having daily activity"]}]},

12:{name:"Test 12",src:"Practice PDF",
A:["We almost missed the train","This report seems to be out of date","If we take the car we'll have to pay for parking","Could you send the parts over as soon as possible","With experience you will improve your project estimates","By the middle of the morning half the sales team had quit","The alarm isn't loud enough","I just wanted to check in and see if there's been any progress","But the search for a qualified software engineer has proved difficult","Our plane leaves for Paris at nine fifteen a.m.","We hope to sell a lot in Japan","Hire him immediately","Have you had breakfast yet","In this area agriculture is a major industry","He wanted to know if the price included breakfast","That model is currently out of stock"],
B:[{w:"he is / a friend / of mine",a:"He is a friend of mine"},{w:"his brother / cleaned up / that mess",a:"His brother cleaned up that mess"},{w:"I am amazed / how fast / you learned this",a:"I am amazed how fast you learned this"},{w:"this booklet / clearly describes / what you need",a:"This booklet clearly describes what you need"},{w:"the two secretaries / kept an accurate record / of every transaction",a:"The two secretaries kept an accurate record of every transaction"},{w:"you can / easily create / a password",a:"You can easily create a password"},{w:"the office nearby / has fortunately / become vacant",a:"The office nearby has fortunately become vacant"},{w:"there are / a lot of problems / to discuss",a:"There are a lot of problems to discuss"}],
C:[{s1:"The report is twenty pages long.",s2:"Do we need to print all of it?",s3:"Just the executive summary.",q:"What part needs to be printed?",a:"The executive summary"},{s1:"I missed my connecting flight.",s2:"You should go to the rebooking desk.",s3:"Where is that exactly?",q:"What does the woman suggest?",a:"Go to the rebooking desk"},{s1:"The team leader resigned yesterday.",s2:"That was unexpected.",s3:"Yes, we'll need to find a replacement.",q:"What happened to the team leader?",a:"The team leader resigned"},{s1:"I can't get into the building. My keycard doesn't work.",s2:"Go to reception and they'll issue you a new one.",s3:"Thank you, I'll do that right away.",q:"What will the man do?",a:"Go to reception to get a new keycard"},{s1:"The new software update is causing problems.",s2:"IT sent out instructions on how to fix it.",s3:"I didn't see that email.",q:"What did IT send out?",a:"Instructions on how to fix the problem"},{s1:"I need to prepare materials for the onboarding session.",s2:"How many new hires are joining?",s3:"Ten people start on Monday.",q:"How many new hires are joining?",a:"Ten people"},{s1:"The coffee machine in the office is broken.",s2:"There's a cafe on the ground floor.",s3:"I didn't know that. Thanks.",q:"Where is the cafe?",a:"On the ground floor"},{s1:"I need to send this package internationally.",s2:"You'll need to fill out a customs form.",s3:"Where do I get that?",q:"What does the man need to fill out?",a:"A customs form"},{s1:"I have a job interview tomorrow.",s2:"Have you done much research on the company?",s3:"Yes, I've been preparing all week.",q:"How long has the man been preparing for the interview?",a:"All week"},{s1:"The office renovation is finally done.",s2:"It looks so much better now.",s3:"I especially like the new lighting.",q:"What does the man like about the renovation?",a:"The new lighting"},{s1:"Our supplier is delayed due to bad weather.",s2:"When do they expect to deliver?",s3:"Sometime next week at the latest.",q:"When is the supplier expected to deliver?",a:"Sometime next week"},{s1:"I need to find a parking space.",s2:"There's usually space on level three.",s3:"I'll try there first.",q:"Where is there usually parking space?",a:"On level three"}],
D:[{s:"The training programme offers a wide selection of ___ to any interested employee at a minimum charge.",a:"courses"},{s:"Workers who have previously ___ training are exempted from the new training requirement.",a:"completed"},{s:"I dropped my clothes off at the dry ___ on my way to work this morning.",a:"cleaner"},{s:"He\\'s concerned for the environment — the soles of his shoes were made from his old ___.",a:"tyres"},{s:"Please check all ___ for the correct return address.",a:"envelopes"},{s:"Please make sure that all seatbelts are ___ fastened.",a:"securely"},{s:"The company achieved its ___ last year and reported a profit.",a:"target"},{s:"They found that gadgets like phones and small electronic devices are very popular among online ___.",a:"shoppers"},{s:"You may not agree with his ___, but there\\'s no question that he makes a lot of money for the company.",a:"method"},{s:"If you want a hardworking and dependable employee, I highly ___ that you hire him.",a:"recommend"},{s:"The amount of air ___ in this town has increased substantially since the factory opened.",a:"pollution"},{s:"The number of attendees far ___ our expectations.",a:"exceeded"},{s:"The store had only been in ___ for two months when the owner sold it.",a:"business"},{s:"The event was ___ by an audience of over 30,000 people.",a:"attended"},{s:"If you want to meet with the CEO, you need to make an appointment a ___ in advance.",a:"week"},{s:"Even if you run fast, you probably won\\'t be able to ___ the train.",a:"catch"},{s:"Thank you very much for your help on such short ___. It helped us immediately.",a:"notice"},{s:"All the city council members, with the ___ of one, voted against the new law.",a:"exception"}],
E:["Various tax incentives are available to you and your employees","Why do you think some of the plants didn't grow","The company may have to relocate","The heating system was just repaired","I wish we didn't have to work that night","Our sister company was established quite some time ago","Please spell check all reports before turning them in","The company has grown too large over the past few years","I eat there every night","Where are the pens we used to write on the board","Please note that our phone and fax numbers will remain the same","I like to visit my parents on the weekends","I think I'll buy this hat too","Having a pet can reduce stress"],
F:[{t:"Passage 1",p:"Anna picked up her suit from the dry cleaners. After she had paid, she noticed that the cleaners had not cleaned the suit properly. She politely brought this to their attention and requested a refund. Although the cleaner apologized, he said that it was not his fault and refused to give Anna a refund.",k:["Anna picked up suit from dry cleaners","suit was not cleaned properly","she politely requested a refund","cleaner apologized but said not his fault","cleaner refused to give a refund"]},{t:"Passage 2",p:"Anna was organizing a birthday party for her coworker, Susan. Anna wanted it to be a surprise party, so she warned everyone not to tell Susan. Then Anna asked the president to send an email inviting everyone to a company meeting. Susan walked into the conference room expecting a meeting, but instead everyone shouted Happy Birthday.",k:["Anna organizing surprise birthday party for Susan","warned everyone to keep it secret","president sent fake meeting invitation","Susan walked in expecting a meeting","everyone shouted Happy Birthday"]}]},

13:{name:"Test 13",src:"Practice PDF",
A:["I don't think I'll be able to get away before seven tonight","I've come to realize that we need to change our methods","Bring your resume and a list of references to the meeting","It should take six months to complete construction of the new office","As a matter of policy representatives may not give their names to customers","Please join us next spring for our annual conference in New York City","We've made special reservations for our new international clients","They're trying to fix the problem but so far they've had no luck","Do you have time to talk","I'm sorry he just stepped out for a moment","Are there any customer support services available","How can we fit all this text into such a small space","It's common to feel a bit nervous before speaking to a group","I've heard that they made quite a large profit from that sale","The authors of this text would have liked more figures","Orders placed less than ten days ahead must be picked up at the counter"],
B:[{w:"mark / wondered about / the missing money",a:"Mark wondered about the missing money"},{w:"we are going / to see / some old friends",a:"We are going to see some old friends"},{w:"prices / these / are high",a:"These prices are high"},{w:"let's choose someone / to leave / the group",a:"Let's choose someone to leave the group"},{w:"the manager / and her assistant / were unwilling to help",a:"The manager and her assistant were unwilling to help"},{w:"our recent report / describes the findings / in detail",a:"Our recent report describes the findings in detail"},{w:"we / are / living",a:"We are living"},{w:"where / are they / going",a:"Where are they going"}],
C:[{s1:"I'm having difficulty with the new accounting software.",s2:"There's a training video on the intranet.",s3:"I didn't know that. I'll watch it today.",q:"Where is the training video?",a:"On the intranet"},{s1:"We haven't received payment from the client yet.",s2:"I'll send them a reminder today.",s3:"Thank you, it's already two weeks late.",q:"How late is the payment?",a:"Two weeks late"},{s1:"I need to reorganise the filing system.",s2:"That's a big job. Do you want some help?",s3:"That would be great. Can you start tomorrow?",q:"When does the man want to start?",a:"Tomorrow"},{s1:"There's a networking dinner on Thursday.",s2:"Is attendance mandatory?",s3:"No, but it's strongly recommended.",q:"Is the dinner mandatory?",a:"No, but strongly recommended"},{s1:"I'm thinking of taking an online course.",s2:"What subject?",s3:"Data analysis. It's very in demand.",q:"What subject is the man considering?",a:"Data analysis"},{s1:"My flight was overbooked.",s2:"Were you able to get on?",s3:"Yes, but they moved me to business class.",q:"What happened to the man on the flight?",a:"He was moved to business class"},{s1:"I need to submit my expense report by Friday.",s2:"Don't forget to include all receipts.",s3:"Right, I'll gather them now.",q:"What does the woman remind the man to include?",a:"All receipts"},{s1:"The training session starts at eight sharp.",s2:"Should I bring anything?",s3:"Just a pen and notepad.",q:"What should the woman bring?",a:"A pen and notepad"},{s1:"The train to the city is every thirty minutes.",s2:"What time is the next one?",s3:"In about twelve minutes.",q:"How often does the train to the city run?",a:"Every thirty minutes"},{s1:"I need to order new business cards.",s2:"How many do you need?",s3:"About five hundred should be enough.",q:"How many business cards are needed?",a:"About five hundred"},{s1:"The office Wi-Fi password has been changed.",s2:"Do you know the new one?",s3:"Yes, it's on the notice board.",q:"Where can the new password be found?",a:"On the notice board"},{s1:"I'm not feeling well today.",s2:"You should go home and rest.",s3:"I have an important meeting at three.",q:"Why can't the man go home?",a:"He has an important meeting at three"}],
D:[{s:"The library ___ the event by posting flyers around the city.",a:"publicized"},{s:"You need a ___ ticket if you want to leave your car here.",a:"parking"},{s:"I couldn\\'t believe ___ when he agreed to make an announcement on the show tonight.",a:"it"},{s:"She was temporarily ___ by the brightness of the sun.",a:"blinded"},{s:"The baker had several ___ on his wrists from touching the sides of the oven.",a:"burns"},{s:"The residents were advised to ___ their homes before the storm reached them.",a:"evacuate"},{s:"Lock your valuables in the ___ provided in your hotel room.",a:"safe"},{s:"After making one last ___ to the layout, the newsletter was ready to be sent out.",a:"modification"},{s:"I can\\'t imagine what it would be ___ to do a task like this all day.",a:"like"},{s:"Finally, everything is finished now that the project has reached its ___.",a:"end"},{s:"When travelling in a foreign country, you should always carry some form of ___ card.",a:"identity"},{s:"It has yet to be ___ whether the company will stay in business next year.",a:"seen"},{s:"I had to take out a loan from the bank to ___ the cost of replacing the roof.",a:"cover"},{s:"Although sales were down last quarter, the owner had high ___ that business would improve soon.",a:"hopes"},{s:"This is the cutting ___ technology. It\\'s the best on the market.",a:"edge"},{s:"I have ___ sleeping at night, so I usually wake up very tired.",a:"trouble"},{s:"I\\'m a salesman. And you, what do you ___?",a:"do"},{s:"The man ___ his car keys and spent an hour looking for them this morning.",a:"misplaced"}],
E:["Could you tell me how many people are coming to the reception","It's raining at the moment","Speak with my assistant and she will schedule you","You can use the computer in a minute","The hotels are so nice here","The plates are in the cupboard next to the sink","I have to agree with you","The company first opened when I was much younger","It's a good idea to create a different version of your resume","I would love to go","Please note that the phone and the fax number will remain the same","I'll be finished by Friday","The plan will be drawn tomorrow morning when everyone is together","Please reply to this email if you're attending the seminar"],
F:[{t:"Passage 1",p:"John is the sales manager of a small store. An angry customer called him to complain about a home security system that she had recently bought from his store. She told him that it did not work properly because the alarm went off when she was in the house. Initially she demanded a refund, but when John apologized and offered to replace her system with a new one, she agreed.",k:["John is the sales manager","customer complained about security system going off wrongly","customer demanded a refund","John apologized and offered a replacement","customer agreed to the replacement"]},{t:"Passage 2",p:"Mary won this year's best teacher award at her university. She had been known for her creative and unique teaching style for many years. Her award included a trip to Paris for one week. Mary and her husband have never been to Paris and they are very excited about it.",k:["Mary won best teacher award","known for creative and unique teaching style","award includes a week trip to Paris","Mary and husband never been to Paris","they are very excited"]}]},

14:{name:"Test 14",src:"Practice PDF",
A:["I left my hat in the restaurant","With all the good programs available it is difficult to make a quick decision","His desk area and bookshelves are always well organized","I am sorry he just stepped out for a moment","If you are worried just give her a call","We have to sell a lot in Japan","It's not too late to change your mind","I will try to do my best","Enter through the door on your right","How many people do you expect to attend the meeting","Do you have a final written approval for the project","When you go for an interview you must be comfortably dressed","Are you willing to relocate or tied to that area","We make special reservations for international clients","Have you tried applying for a job","It would take six months to complete the construction of the new office"],
B:[{w:"please / correct / these mistakes",a:"Please correct these mistakes"},{w:"the weather / should be / nice",a:"The weather should be nice"},{w:"the house / next door / is for sale",a:"The house next door is for sale"},{w:"a local hotel / has agreed to offer / a thirty percent discount",a:"A local hotel has agreed to offer a thirty percent discount"},{w:"experience / is more important / than the training",a:"Experience is more important than the training"},{w:"a nearby office / has fortunately / become vacant",a:"A nearby office has fortunately become vacant"},{w:"how long / are you / staying here",a:"How long are you staying here"},{w:"I decided / to visit / my old friends",a:"I decided to visit my old friends"}],
C:[{s1:"Our team won the best project award.",s2:"That's fantastic news.",s3:"We're planning a small celebration.",q:"What is the team planning?",a:"A small celebration"},{s1:"The building's heating is not working.",s2:"The maintenance team is aware of the problem.",s3:"Hopefully it'll be fixed by tomorrow.",q:"Who is aware of the heating problem?",a:"The maintenance team"},{s1:"I need to book a flight to London.",s2:"Have you checked the prices online?",s3:"Yes, Tuesday flights are cheapest.",q:"When are the cheapest flights?",a:"On Tuesdays"},{s1:"The seminar has been postponed.",s2:"When is the new date?",s3:"It's been moved to the last Friday of the month.",q:"When has the seminar been rescheduled for?",a:"The last Friday of the month"},{s1:"I need to learn how to use the new database.",s2:"There's a tutorial on the company website.",s3:"I'll watch it this afternoon.",q:"Where is the tutorial?",a:"On the company website"},{s1:"We received some negative feedback from customers.",s2:"What was the main complaint?",s3:"The delivery was too slow.",q:"What was the main customer complaint?",a:"The delivery was too slow"},{s1:"I'm attending a conference in Singapore next month.",s2:"How long will you be gone?",s3:"About a week.",q:"How long will the man be at the conference?",a:"About a week"},{s1:"The new team member starts on Monday.",s2:"Has she been given a laptop?",s3:"Yes, IT set it up yesterday.",q:"When did IT set up the laptop?",a:"Yesterday"},{s1:"I hear the company is introducing flexible working hours.",s2:"Yes, starting from next month.",s3:"That will make a big difference.",q:"When does flexible working start?",a:"Next month"},{s1:"I need to replace my work shoes.",s2:"There's a good shoe shop in the mall.",s3:"Is it expensive?",q:"What does the woman suggest?",a:"A shoe shop in the mall"},{s1:"The charity event raised more than expected.",s2:"How much did it raise?",s3:"Over five thousand dollars.",q:"How much did the charity event raise?",a:"Over five thousand dollars"},{s1:"I'm trying to reduce my plastic use.",s2:"You could start with reusable bags.",s3:"Good idea. I'll pick some up.",q:"What does the woman suggest?",a:"Using reusable bags"}],
D:[{s:"Over three hundred people ___ the store\\'s grand opening.",a:"witnessed"},{s:"My sister is ___ from the surgery very well.",a:"recovering"},{s:"The product is out of stock until the next ___ arrives.",a:"consignment"},{s:"City buildings can only be so tall. The exact height will ___ on local regulations.",a:"depend"},{s:"For more information about the product, please consult the instruction ___.",a:"manual"},{s:"The new trainees are doing ___ just fine.",a:"along"},{s:"The class has to be ___ indefinitely because of the summer schedule.",a:"paused"},{s:"He can ___ your order as soon as you know what you want to purchase.",a:"place"},{s:"She gets her supplies at a low rate because she buys in ___.",a:"bulk"},{s:"Can I bring you something to ___? Perhaps tea or coffee?",a:"drink"},{s:"I went ___ yesterday and spent all my savings.",a:"shopping"},{s:"I need to write your first name. How do you ___ it?",a:"pronounce"},{s:"She was ___ manager but has now been promoted to a senior management position.",a:"junior"},{s:"She ran to the corner but she just ___ the bus, so she had to wait for the next one.",a:"missed"},{s:"You\\'re driving too ___. You should slow down.",a:"fast"},{s:"I haven\\'t eaten anything all day. I\\'m so ___!",a:"hungry"},{s:"She was ___ a promotion based on her excellent performance on the job.",a:"awarded"},{s:"It was so ___ outside that no one wanted to leave the air-conditioned house.",a:"hot"}],
E:["The train comes here every twenty minutes","According to the weather forecast it's going to be really hot this weekend","I threw the magazine away yesterday","The document needs to be edited","I'll be back in the middle of September","They presented a plan to reduce the large debt","The company has grown too large over the years","I don't like to eat breakfast","She knows several journalists who work for a large newspaper","I'm busy let's take a break","Many companies operate in more than one country","My neighbor has been practicing the piano for thirteen years","It's a good day for being outdoors","Poland used to be a communist country"],
F:[{t:"Passage 1",p:"Our gym is located across from your office and is currently offering a special discount to all employees working in your building. According to researchers, getting exercise regularly is a great way to stay positive and healthy. If you sign up for a membership this week, you can get a personal trainer to help you on your first five visits.",k:["gym is across from the office","offering special discount to employees","exercise keeps you positive and healthy","sign up this week","get personal trainer for first five visits"]},{t:"Passage 2",p:"Sam was on a busy flight that had been delayed. The plane finally landed and arrived at the gate. Then all the passengers got up to get their luggage. The woman in front of Sam accidentally bumped him in the arm. Just as she was apologizing, her bag fell from the overhead compartment and hit him on the head. The woman felt awful. Sam decided he didn't want to fly again anytime soon.",k:["Sam on a delayed flight","plane finally landed","woman bumped Sam and then apologized","woman's bag fell and hit Sam on head","Sam decided not to fly again soon"]}]},

15:{name:"Test 15",src:"Practice PDF",
A:["Please join us in the next spring for our annual conference in New York city","He can fix anything","He wants to know if the price includes breakfast","Highly motivated people are always valued by our company","By the middle of the morning half of the sales team had left already","We have a corporate program for those who are interested in larger purchases","I heard that they made quite large profits from the sale","Which car is yours","The book is so interesting that you won't miss a word","Please join us for lunch next Tuesday","I can offer you an upgrade","They wrote down each other's phone numbers","The search for a qualified software engineer has proved difficult","Do you have any references","What time do you get up in the morning","If you are not registered please complete the information given below"],
B:[{w:"we are / looking forward / to the new cinema",a:"We are looking forward to the new cinema"},{w:"we're going / to see / some old friends",a:"We're going to see some old friends"},{w:"that building / has limited / internet access",a:"That building has limited internet access"},{w:"press one / before you enter / the phone number",a:"Press one before you enter the phone number"},{w:"the new training / schedule will be / available later today",a:"The new training schedule will be available later today"},{w:"our meeting / lasted longer / than expected",a:"Our meeting lasted longer than expected"},{w:"where should / we go / this weekend",a:"Where should we go this weekend"},{w:"there were / a lot of problems / to discuss",a:"There were a lot of problems to discuss"}],
C:[{s1:"I can't log in to my account.",s2:"Have you tried resetting your password?",s3:"Not yet. I'll try that.",q:"What does the man suggest?",a:"Resetting the password"},{s1:"The team lunch is on Wednesday.",s2:"Where are we going?",s3:"The Italian place on Fifth Avenue.",q:"Where is the team lunch?",a:"The Italian place on Fifth Avenue"},{s1:"The new office manager starts tomorrow.",s2:"Have you prepared her workstation?",s3:"Yes, everything is ready.",q:"When does the new office manager start?",a:"Tomorrow"},{s1:"I'm trying to find a cheaper phone plan.",s2:"My provider has a good deal for new customers.",s3:"Could you send me the details?",q:"What does the man ask for?",a:"Details of the phone plan"},{s1:"The client presentation is in an hour.",s2:"Is the projector set up?",s3:"Yes, and I've tested the slides.",q:"What has the man already done?",a:"Set up the projector and tested the slides"},{s1:"I need to make a doctor's appointment.",s2:"The clinic is open until six.",s3:"I'll call them on my lunch break.",q:"When will the woman call the clinic?",a:"On her lunch break"},{s1:"There's a fault in the report you sent.",s2:"Where exactly?",s3:"On page five — the figures don't add up.",q:"Where is the fault in the report?",a:"On page five"},{s1:"I haven't received the parcel yet.",s2:"The tracking shows it was delivered yesterday.",s3:"I'll check with my neighbors.",q:"What will the man do?",a:"Check with his neighbors"},{s1:"What do you do?",s2:"I'm a teacher.",s3:"It must be fun working with kids.",q:"What is the woman's job?",a:"She is a teacher"},{s1:"My coffee is cold.",s2:"Let me heat it up in the microwave.",s3:"Thanks.",q:"What is cold?",a:"The coffee is cold"},{s1:"I need to sign this form.",s2:"Do you want to borrow my pen?",s3:"Yes, that would be great.",q:"What does the woman need to borrow?",a:"A pen"},{s1:"Are you done reading this magazine?",s2:"No, but you can take it if you want.",s3:"Thanks, I'll bring it back tomorrow.",q:"What did the woman borrow?",a:"A magazine"}],
D:[{s:"I\\'m not sure I can come tomorrow. I\\'ll have to ___ my schedule.",a:"change"},{s:"The elevator is broken, so you will have to take the ___ to get to the second floor.",a:"stairs"},{s:"Where is my ___? I can\\'t find it.",a:"jacket"},{s:"My house is very ___. There\\'s just my mother, father, and me.",a:"small"},{s:"Don\\'t forget to ask for a ___ when you pay.",a:"receipt"},{s:"Since you\\'ve finished everything else, please focus your attention on finishing the ___ reports.",a:"expense"},{s:"Recent studies have shown that the shopping ___ of consumers have changed dramatically.",a:"habits"},{s:"Although sales were down last quarter, the owner had high ___ that business would improve soon.",a:"expectations"},{s:"I know you love travelling abroad. Would you be ___ in a position in our overseas office?",a:"interested"},{s:"We offer our customers the service of placing orders by phone or ___.",a:"online"},{s:"I\\'m sorry I\\'m ___. I woke up late this morning.",a:"late"},{s:"How much does the necklace ___? I don\\'t see a price.",a:"cost"},{s:"The bill wasn\\'t right. I think they made a ___.",a:"mistake"},{s:"My ears are ___ because the music was so loud at the concert.",a:"ringing"},{s:"Let\\'s ___ tomorrow\\'s presentation until next week. I\\'m just too busy to prepare for it.",a:"postpone"},{s:"Today is Tuesday. ___ was Monday.",a:"Yesterday"},{s:"What time is it? I don\\'t have a ___.",a:"watch"},{s:"Can you turn the lights ___? I can\\'t see anything.",a:"on"}],
E:["They often share a bottle of wine while reminiscing over family photo albums","This particular quote is indeed inspiring","There was a dearth of usable firewood at the campsite","Corruption is at its peak during election time","You'll have to bear the consequences of your actions","Theme parks are a source of fun for people of all ages","I went to the University of Bristol where I studied chemistry","This is what we would call a state of equilibrium","Professor Smith will be late for today's lecture","Three of the students were confused by the key hypothesis","The circulation desk is located on the ground floor","Patients diagnosed with heart failure will often report being depressed","There was little available evidence to contradict his viewpoint","We have to hand our assignments in tomorrow at the latest"],
F:[{t:"Passage 1",p:"This is our annual reminder to all employees. Our hospital is known in our community for excellent customer care. We have been providing friendly and quality services to all our patients and are committed to doing the same again this year. Greet your patients with a smile and hospitality.",k:["annual reminder to employees","hospital known for excellent customer care","providing friendly quality services","committed to same standards this year","greet patients with smile and hospitality"]},{t:"Passage 2",p:"As I told you at our last meeting, I am moving on to a new position in another company next week. My last working day is Friday January twenty-fifth. Thanks for being such a great team to work with. I will miss you all and hope you will stay in touch.",k:["moving to new position at another company","last working day is Friday January 25th","thanks for being a great team","will miss everyone","hopes to stay in touch"]}]}
};

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════
let CID=null,TD=null,PART='A',QI=0,RESP={};
let tmr=null,tLeft=1800;
let mRec=null,aChunks=[],recSt='idle';
let cdTmr=null,psTmr=null;
const SY=window.speechSynthesis;
const PARTS=['A','B','C','D','E','F'];

// ── ACCENT / VOICE ─────────────────────────────
let ACCENT_CODE=localStorage.getItem('vp_accent')||'IN';
const ACCENT_LANG={IN:'en-IN',US:'en-US',GB:'en-GB'};
const FLAGS={IN:'🇮🇳',US:'🇺🇸',GB:'🇬🇧'};
const LABELS={IN:'Indian',US:'American',GB:'British'};
function setAccent(code){
  ACCENT_CODE=code;
  localStorage.setItem('vp_accent',code);
  // Update pill
  const f=document.getElementById('accentFlag');
  const l=document.getElementById('accentLabel');
  if(f) f.textContent=FLAGS[code];
  if(l) l.textContent=LABELS[code];
  // Update dropdown options
  ['IN','US','GB'].forEach(c=>{
    const o=document.getElementById('opt'+c);
    if(o) o.classList.toggle('active',c===code);
  });
  closeAccentMenu();
  // Pre-warm voice
  SY.cancel();
  const u=new SpeechSynthesisUtterance(' ');
  u.lang=ACCENT_LANG[code];SY.speak(u);SY.cancel();
}
function toggleAccentMenu(){
  const m=document.getElementById('accentMenu');
  if(!m) return;
  const open=m.style.display==='block';
  m.style.display=open?'none':'block';
}
function closeAccentMenu(){
  const m=document.getElementById('accentMenu');
  if(m) m.style.display='none';
}
// Close menu on outside click
document.addEventListener('click',e=>{
  const pill=document.getElementById('accentPill');
  if(pill&&!pill.contains(e.target)) closeAccentMenu();
});
function getAccentLang(){return ACCENT_LANG[ACCENT_CODE]||'en-IN';}


// ═══════════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════════
function initHome(){
  // Sync topbar pill to saved accent
  setAccent(ACCENT_CODE);

  // ── Browser/HTTPS compatibility check ──────────────
  const isLocalhost=location.hostname==='localhost'||location.hostname==='127.0.0.1'||location.hostname==='';
  const isHttps=location.protocol==='https:';
  const hasMediaDevices=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia);
  const hasSR=!!(window.SpeechRecognition||window.webkitSpeechRecognition);
  const hasSpeech=!!window.speechSynthesis;

  // Remove old warning if present
  const oldWarn=document.getElementById('compatWarn');
  if(oldWarn) oldWarn.remove();

  if(!isLocalhost&&!isHttps){
    // HTTP on a remote server — mic/SR will be blocked
    const w=document.createElement('div');
    w.id='compatWarn';
    w.style.cssText='background:#fef3c7;border:1.5px solid #f59e0b;border-radius:12px;padding:14px 18px;margin-bottom:18px;font-size:13px;line-height:1.6;color:#92400e';
    w.innerHTML='⚠️ <strong>Microphone & Speaker blocked:</strong> This site is on HTTP. Both GitHub Pages and Vercel require HTTPS. Access via <code>https://</code> URL. <a href="https://vercel.com/docs" target="_blank" style="color:#b45309;font-weight:600">Deploy on Vercel (recommended) →</a>';
    const hw=document.querySelector('.home-wrap');
    if(hw) hw.insertBefore(w,hw.firstChild);
  } else if(!hasMediaDevices||!hasSR){
    const w=document.createElement('div');
    w.id='compatWarn';
    w.style.cssText='background:#fef3c7;border:1.5px solid #f59e0b;border-radius:12px;padding:14px 18px;margin-bottom:18px;font-size:13px;line-height:1.6;color:#92400e';
    const missing=[];
    if(!hasMediaDevices) missing.push('Microphone recording');
    if(!hasSR) missing.push('Speech recognition (use Chrome/Edge)');
    if(!hasSpeech) missing.push('Text-to-speech');
    w.innerHTML='⚠️ <strong>Limited browser support:</strong> '+missing.join(', ')+' not available. Use <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong> for full functionality.';
    const hw=document.querySelector('.home-wrap');
    if(hw) hw.insertBefore(w,hw.firstChild);
  }

  const g=document.getElementById('testGrid');g.innerHTML='';
  for(let i=1;i<=15;i++){
    const done=localStorage.getItem('vp_d_'+i);
    const sc=localStorage.getItem('vp_s_'+i);
    g.innerHTML+=`<div class="test-card" onclick="openTest(${i})">
      <div class="tc-num">${String(i).padStart(2,'0')}</div>
      <div class="tc-name">${TESTS[i].name}</div>
      <div class="tc-meta">${TESTS[i].src}</div>
      <div class="tc-badge ${done?'badge-done':'badge-new'}">${done?'✓ Done':'Start'}</div>
      ${done?`<div class="tc-score">${sc}/80</div>`:''}
    </div>`;
  }
}

function openTest(id){
  CID=id;TD=TESTS[id];
  document.getElementById('instH').textContent=TD.name+' — '+TD.src;
  showPg('pgInst');
}

// ═══════════════════════════════════════════════════════════
// TEST START / TIMER
// ═══════════════════════════════════════════════════════════
function startTest(){
  RESP={};PART='A';QI=0;tLeft=1800;SY.cancel();
  showPg('pgTest');
  document.getElementById('topTimer').style.display='flex';
  document.getElementById('topPartBadge').style.display='block';
  clearInterval(tmr);
  tmr=setInterval(()=>{
    tLeft--;
    const m=Math.floor(tLeft/60),s=tLeft%60;
    const d=document.getElementById('timerNum');
    d.textContent=m+':'+(s<10?'0':'')+s;
    d.className=tLeft<120?'warn':'';
    if(tLeft<=0){clearInterval(tmr);finishTest();}
  },1000);
  renderQ();
}

function retake(){startTest();}

function practicePart(p){
  // Start the test but jump straight to part p
  RESP={};PART=p;QI=0;tLeft=1800;SY.cancel();
  showPg('pgTest');
  document.getElementById('topTimer').style.display='flex';
  document.getElementById('topPartBadge').style.display='block';
  clearInterval(tmr);
  tmr=setInterval(()=>{
    tLeft--;
    const m=Math.floor(tLeft/60),s=tLeft%60;
    const d=document.getElementById('timerNum');
    d.textContent=m+':'+(s<10?'0':'')+s;
    d.className=tLeft<120?'warn':'';
    if(tLeft<=0){clearInterval(tmr);finishTest();}
  },1000);
  renderQ();
}

// ═══════════════════════════════════════════════════════════
// PROGRESS
// ═══════════════════════════════════════════════════════════
function updateProg(){
  const pnames={A:'Part A — Repeat',B:'Part B — Builds',C:'Part C — Conversations',D:'Part D — Completion',E:'Part E — Dictation',F:'Part F — Reconstruction'};
  document.getElementById('progLbl').textContent=pnames[PART];
  document.getElementById('topPartBadge').textContent='Part '+PART;
  const len=plen(PART);
  document.getElementById('progCnt').textContent=(QI+1)+' / '+len;
  const pi=PARTS.indexOf(PART);
  let done=0,tot=0;
  PARTS.forEach((p,i)=>{tot+=plen(p);if(i<pi)done+=plen(p);});
  done+=QI;
  document.getElementById('progFill').style.width=Math.round(done/tot*100)+'%';
}

function plen(p){
  if(p==='A')return TD.A.length;
  if(p==='B')return TD.B.length;
  if(p==='C')return TD.C.length;
  if(p==='D')return TD.D.length;
  if(p==='E')return TD.E.length;
  if(p==='F')return TD.F.length;
  return 0;
}

// ═══════════════════════════════════════════════════════════
// RENDER QUESTION
// ═══════════════════════════════════════════════════════════
function renderQ(){
  stopAll();recSt='idle';
  updateProg();
  document.getElementById('nextBtn').disabled=false;
  document.getElementById('navHint').textContent='';
  // Hide answer panel on new question
  document.getElementById('answerPanel').style.display='none';
  // Show check button only for A/B/C (speaking parts)
  const isSpeaking=(PART==='A'||PART==='B'||PART==='C');
  document.getElementById('checkBtn').style.display=isSpeaking?'inline-flex':'none';
  // Show Back button unless on very first question of Part A
  const isFirst=(PART==='A'&&QI===0);
  document.getElementById('backBtn').style.display=isFirst?'none':'inline-flex';
  if(PART==='A')rA();
  else if(PART==='B')rB();
  else if(PART==='C')rC();
  else if(PART==='D')rD();
  else if(PART==='E')rE();
  else if(PART==='F')rF();
}

// ─── HELPERS ───────────────────────────────────
function card(html){document.getElementById('qCard').innerHTML=html;}

function audioRow(id='playBtn',onclick=''){
  return`<div class="audio-row">
    <button class="play-btn" id="${id}" onclick="${onclick}">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    </button>
    <div>
      <div class="audio-title" id="audioTxt">Play to hear</div>
      <div style="font-size:11px;color:rgba(255,255,255,.4)" id="audioSub">Click the button to play audio</div>
    </div>
    <div class="wave" id="waveEl"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  </div>`;
}

function recBlock(){
  return`<div class="rec-wrap" id="recWrap" style="margin-top:14px">
    <button class="rec-big-btn" id="recBtn" onclick="toggleRec()" disabled>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10c0 3.87 3.13 7 7 7s7-3.13 7-7" stroke="white" stroke-width="2" fill="none"/><line x1="12" y1="17" x2="12" y2="21" stroke="white" stroke-width="2"/></svg>
    </button>
    <div class="mic-bars" id="micBars">
      <div class="mic-bar"></div><div class="mic-bar"></div><div class="mic-bar"></div><div class="mic-bar"></div><div class="mic-bar"></div>
    </div>
    <div class="rec-lbl" id="recLbl">Play audio first, then press 🎙 to record</div>
  </div>
  <div class="transcript" id="trBox">Tap the mic button to start recording — your words will appear here live…</div>`;
}

function qHeader(title,desc,badge,badgeClass){
  return`<div class="q-header">
    <div><div class="q-title">${title}</div><div class="q-desc">${desc}</div></div>
    <span class="q-badge ${badgeClass}">${badge}</span>
  </div>`;
}

// ─── PART A ─────────────────────────────────────
function rA(){
  card(qHeader('Part A — Repeat','Listen to the sentence, then record yourself repeating it exactly.','Speaking','badge-speak')+
  audioRow('pBtnA','playA()')+recBlock());
  document.getElementById('navHint').textContent='Play → Record → Next';
}
function playA(){
  const b=document.getElementById('pBtnA');b.disabled=true;
  setAudioTxt('Playing…','Sentence will play once');wave(true);
  speakWithFallback(TD.A[QI],.88,1,()=>{
    wave(false);setAudioTxt('Sentence played','Now record your response');
    enableRec();
  });
}

// ─── PART B ─────────────────────────────────────
function rB(){
  card(qHeader('Part B — Sentence Builds','Listen to the word groups, rearrange them into a correct sentence, then record.','Speaking','badge-speak')+
  audioRow('pBtnB','playB()')+recBlock());
  document.getElementById('navHint').textContent='Click Play to hear word groups, then record the correct sentence';
}
function playB(){
  const b=document.getElementById('pBtnB');b.disabled=true;
  setAudioTxt('Playing word groups…','Listen carefully');wave(true);
  // Speak each group separately with a pause between them
  const groups=TD.B[QI].w.split(' / ');
  let gi=0;
  function nextGroup(){
    if(gi>=groups.length){
      wave(false);setAudioTxt('Word groups played','Record your rearranged sentence');
      enableRec();
      return;
    }
    speakWithFallback(groups[gi],.82,1,()=>{
      gi++;
      setTimeout(nextGroup,500);
    });
  }
  nextGroup();
}

// ─── PART C ─────────────────────────────────────
function rC(){
  const itm=TD.C[QI];
  card(qHeader('Part C — Conversations','Listen to the conversation, then record your answer to the question.','Speaking','badge-speak')+
  audioRow('pBtnC','playC()')+
  `<div id="qDisp" style="display:none;margin-top:12px;background:var(--blue);color:#fff;border-radius:8px;padding:10px 16px;font-size:14px;font-weight:600">❓ ${itm.q}</div>`+
  `<div id="recSection" style="display:none">`+recBlock()+`</div>`);
  document.getElementById('navHint').textContent='Click Play to hear the conversation, then record your answer';
}
function playC(){
  const itm=TD.C[QI];
  const b=document.getElementById('pBtnC');b.disabled=true;
  wave(true);setAudioTxt('Playing conversation…','Two speakers talking');
  const lines=[{t:itm.s1,p:.9},{t:itm.s2,p:1.3},{t:itm.s3,p:.9}];
  let idx=0;
  function speakLine(){
    if(idx>=lines.length){
      // All lines done — now speak the question
      setTimeout(()=>{
        speakWithFallback(itm.q,.93,1,()=>{
          wave(false);
          setAudioTxt('Question asked','Record your answer below');
          document.getElementById('qDisp').style.display='block';
          document.getElementById('recSection').style.display='block';
          // CRITICAL: enable the record button
          enableRec();
        });
      },400);
      return;
    }
    speakWithFallback(lines[idx].t,.93,lines[idx].p,()=>{
      idx++;
      setTimeout(speakLine,300);
    });
  }
  speakLine();
}

// Safe speak with guaranteed callback (handles browsers where onend never fires)
function speakWithFallback(txt,rate,pitch,cb){
  SY.cancel();
  const u=new SpeechSynthesisUtterance(txt);
  u.lang=getAccentLang();u.rate=rate||.88;u.pitch=pitch||1;u.volume=1;
  // Try to pick a voice matching accent
  const voices=SY.getVoices();
  const lang=getAccentLang();
  const match=voices.find(v=>v.lang===lang)||voices.find(v=>v.lang.startsWith(lang.split('-')[0]))||null;
  if(match) u.voice=match;
  let done=false;
  function finish(){if(done)return;done=true;if(cb)cb();}
  u.onend=finish;
  u.onerror=finish;
  const words=txt.trim().split(/\s+/).length;
  const ms=Math.max(1500,Math.round((words/(rate*150))*60000))+1000;
  setTimeout(finish,ms);
  SY.speak(u);
}

// ─── PART D ─────────────────────────────────────
function rD(){
  const itm=TD.D[QI];
  card(qHeader('Part D — Sentence Completion','Type the ONE word that best completes the sentence. Press Enter or click Next when done.','Typing','badge-type')+
  `<div class="sentence-display">${itm.s}</div>
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px">
    <input class="type-f" id="typeD" type="text" placeholder="Type one word…" maxlength="50" autocomplete="off"
      oninput="onTD()" onkeydown="if(event.key==='Enter')checkD()"
      style="max-width:240px;font-size:17px;">
    <button class="btn" id="checkDBtn" onclick="checkD()" style="padding:8px 18px;background:var(--blue-l);border:1.5px solid var(--blue);color:var(--blue);font-weight:600;font-size:13px;display:none">Check ✓</button>
  </div>
  <div id="dFeedback" style="display:none;margin-top:12px;padding:12px 16px;border-radius:10px;font-size:14px;font-weight:500;line-height:1.5"></div>
  <div class="cd-wrap"><div class="cd-bar"><div class="cd-fill" id="cdF" style="width:100%"></div></div><div class="cd-lbl" id="cdL">25s remaining</div></div>`);
  saveR('D','');
  startCD(25,'D');
  setTimeout(()=>{const e=document.getElementById('typeD');if(e)e.focus();},80);
  document.getElementById('navHint').textContent='Type one word — press Enter or Check ✓';
}
function onTD(){
  const v=(document.getElementById('typeD')||{}).value||'';
  saveR('D',v);
  const btn=document.getElementById('checkDBtn');
  if(btn) btn.style.display=v.trim()?'inline-flex':'none';
  // reset feedback if user types again
  const fb=document.getElementById('dFeedback');
  if(fb) fb.style.display='none';
}
function checkD(){
  const inp=document.getElementById('typeD');
  const fb=document.getElementById('dFeedback');
  if(!inp||!fb) return;
  const typed=inp.value.trim().toLowerCase();
  if(!typed) return;
  const correct=(TD.D[QI].a||'').trim().toLowerCase();
  const result=scoreWord(typed,correct);
  const sentence=TD.D[QI].s||'';
  const filled=sentence.replace('___','<strong style="color:'+
    (result.score===1?'var(--green)':result.score===0.5?'var(--amber)':'var(--red)')+'">'+
    inp.value.trim()+'</strong>');
  if(result.score===1){
    fb.style.background='var(--green-l)';fb.style.border='1.5px solid #A7F3D0';fb.style.color='var(--green)';
    fb.innerHTML='✅ <strong>Correct!</strong> &nbsp;'+filled+
      '<br><span style="font-size:12px;margin-top:4px;display:block;opacity:.75">Expected: <em>'+correct+'</em></span>';
  } else if(result.score===0.5){
    fb.style.background='var(--amber-l)';fb.style.border='1.5px solid #FCD34D';fb.style.color='var(--amber)';
    fb.innerHTML='🟡 <strong>Close — partial credit (½ mark)</strong><br>'+
      '<span style="font-size:13px">You typed: <em>'+inp.value.trim()+'</em> &nbsp;·&nbsp; Correct: <em>'+correct+'</em></span>'+
      '<br><span style="font-size:12px;opacity:.75">'+result.hint+'</span>';
  } else {
    fb.style.background='var(--red-l)';fb.style.border='1.5px solid #FCA5A5';fb.style.color='var(--red)';
    fb.innerHTML='❌ <strong>Incorrect</strong><br>'+
      '<span style="font-size:13px">You typed: <em>'+inp.value.trim()+'</em> &nbsp;·&nbsp; Correct: <em>'+correct+'</em></span>';
  }
  fb.style.display='block';
  saveR('D',inp.value.trim());
}
/* fuzzy word scorer — returns {score:0/0.5/1, hint} */
function scoreWord(typed,correct){
  if(!typed) return {score:0,hint:''};
  if(typed===correct) return {score:1,hint:''};
  // common acceptable synonyms / forms handled at AI scoring level; 
  // here we just do fuzzy match for typos
  const d=editDistance(typed,correct);
  const maxLen=Math.max(typed.length,correct.length);
  const ratio=1-(d/maxLen);
  if(ratio>=0.85) return {score:1,hint:'Accepted (minor typo)'};  // ≤1-2 char off
  if(ratio>=0.65) return {score:0.5,hint:'Small difference — partial mark given'};
  // Check if typed is a prefix of correct (e.g. "modif" for "modification")
  if(correct.startsWith(typed)&&typed.length>=3&&typed.length/correct.length>=0.6)
    return {score:0.5,hint:'Incomplete word — partial mark'};
  return {score:0,hint:''};
}
function editDistance(a,b){
  const m=a.length,n=b.length,dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>i?j?0:i:j));
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++)
    dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}

// ─── PART E ─────────────────────────────────────
function rE(){
  card(qHeader('Part E — Dictation','Listen carefully to the sentence, then type it exactly as you heard it.','Listen+Type','badge-lw')+
  audioRow('pBtnE','playE()')+
  `<div id="typeSec" style="display:none;margin-top:14px">
    <textarea class="type-f mono" id="typeE" rows="2" placeholder="Type the sentence exactly…" oninput="onTE()"></textarea>
    <div class="cd-wrap"><div class="cd-bar"><div class="cd-fill" id="cdF" style="width:100%"></div></div><div class="cd-lbl" id="cdL">30s remaining</div></div>
  </div>`);
  saveR('E','');
  document.getElementById('navHint').textContent='Listen → Type exactly → Next';
}
function playE(){
  const b=document.getElementById('pBtnE');b.disabled=true;
  setAudioTxt('Playing…','Listen carefully — sentence plays once');wave(true);
  speakWithFallback(TD.E[QI],.82,1,()=>{
    wave(false);setAudioTxt('Sentence played','Now type exactly what you heard');
    document.getElementById('typeSec').style.display='block';
    startCD(30,'E');
    setTimeout(()=>{const e=document.getElementById('typeE');if(e)e.focus();},60);
  });
}
function onTE(){
  const v=(document.getElementById('typeE')||{}).value||'';
  saveR('E',v);
}

// ─── PART F ─────────────────────────────────────
function rF(){
  const itm=TD.F[QI];
  card(qHeader('Part F — Passage Reconstruction',itm.t+': Read for 30 seconds, then reconstruct in your own words.','Read+Write','badge-lw')+
  `<div class="pass-banner"><div class="pass-dot"></div><span id="pBanner">Reading — 30 seconds</span></div>
  <div class="pass-card" id="passCard">${itm.p}</div>
  <div class="cd-wrap"><div class="cd-bar"><div class="cd-fill" id="cdF" style="width:100%;background:var(--amber)"></div></div><div class="cd-lbl" id="cdL">30s to read</div></div>
  <div id="writeSec" style="display:none;margin-top:14px">
    <textarea class="type-f" id="typeF" rows="5" placeholder="Rewrite the passage in your own words — include all key points…" oninput="onTF()"></textarea>
    <div class="cd-wrap"><div class="cd-bar"><div class="cd-fill" id="cdFW" style="width:100%"></div></div><div class="cd-lbl" id="cdLW">90s remaining</div></div>
  </div>`);
  saveR('F','');
  startRead(itm);
  document.getElementById('navHint').textContent='Read carefully — passage disappears in 30 seconds';
}
function startRead(itm){
  let left=30;
  psTmr=setInterval(()=>{
    left--;
    const f=document.getElementById('cdF'),l=document.getElementById('cdL');
    if(f)f.style.width=(left/30*100)+'%';
    if(l)l.textContent=left+'s to read';
    if(left<=0){
      clearInterval(psTmr);
      const pc=document.getElementById('passCard');
      if(pc)pc.classList.add('blur');
      document.getElementById('pBanner').textContent='Writing — reconstruct from memory';
      document.getElementById('writeSec').style.display='block';
      startCD(90,'F');
      document.getElementById('navHint').textContent='Reconstruct in your own words — 90 seconds';
      setTimeout(()=>{const e=document.getElementById('typeF');if(e)e.focus();},60);
    }
  },1000);
}
function onTF(){
  const v=(document.getElementById('typeF')||{}).value||'';
  saveR('F',v);
}

// ─── RECORDING ──────────────────────────────────
function toggleRec(){recSt==='recording'?stopRec():doRec();}

async function doRec(){
  if(!window.isSecureContext){
    showMicError('🔒 HTTPS required. Open via https:// not http://');
    return;
  }
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
    showMicError('⚠ Microphone not available. Use Chrome or Edge.');
    return;
  }
  const lbl=document.getElementById('recLbl');
  if(lbl){lbl.textContent='⏳ Starting mic…';lbl.className='rec-lbl';}
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true,video:false});
    aChunks=[];
    window._srStopping=false;
    window._liveFinal='';

    const mime=['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/ogg','audio/mp4']
      .find(m=>MediaRecorder.isTypeSupported(m))||'';
    mRec=new MediaRecorder(stream,mime?{mimeType:mime}:{});
    mRec.ondataavailable=e=>{if(e.data&&e.data.size>0)aChunks.push(e.data);};
    mRec.onstop=()=>{stream.getTracks().forEach(t=>t.stop());};
    mRec.start(250);
    recSt='recording';

    // Speech Recognition
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(SR){
      function startSR(){
        if(window._srStopping) return;
        try{
          const sr=new SR();
          sr.lang=getAccentLang();
          sr.continuous=true;
          sr.interimResults=true;
          sr.maxAlternatives=3;

          sr.onresult=(e)=>{
            let interim='';
            for(let i=e.resultIndex;i<e.results.length;i++){
              if(e.results[i].isFinal){
                window._liveFinal+=(window._liveFinal?' ':'')+e.results[i][0].transcript.trim();
              } else {
                interim+=e.results[i][0].transcript;
              }
            }
            const tb=document.getElementById('trBox');
            if(tb){
              const show=(window._liveFinal+(interim?' '+interim:'')).trim();
              if(show){tb.className='transcript has-text';tb.textContent='"'+show+'"';}
            }
          };

          sr.onerror=(ev)=>{
            if(!window._srStopping){
              if(ev.error==='no-speech'||ev.error==='network'||ev.error==='audio-capture'||ev.error==='abort'){
                try{sr.stop();}catch(e){}
              }
            }
          };

          sr.onend=()=>{
            if(!window._srStopping&&recSt==='recording'){
              setTimeout(()=>startSR(),200);
            }
          };

          window._liveRec=sr;
          sr.start();
        }catch(err){console.warn('SR start error:',err);}
      }
      startSR();
    }

    // Update UI
    const btn=document.getElementById('recBtn');
    const wrp=document.getElementById('recWrap');
    const bars=document.getElementById('micBars');
    const tb=document.getElementById('trBox');
    if(btn)btn.classList.add('pulse');
    if(bars)bars.classList.add('show');
    if(lbl){lbl.textContent='🔴 Recording… press mic to stop';lbl.className='rec-lbl active';}
    if(wrp)wrp.classList.add('is-rec');
    if(tb){tb.className='transcript';tb.textContent='🎙 Listening… speak now';}

  }catch(e){
    if(e.name==='NotAllowedError'||e.name==='PermissionDeniedError'){
      showMicError('🚫 Mic blocked!\n1. Click 🔒 in address bar\n2. Set Microphone → Allow\n3. Refresh page & try again');
    } else if(e.name==='NotFoundError'){
      showMicError('🎤 No microphone detected. Please connect a mic.');
    } else {
      showMicError('⚠ Mic error: '+e.message);
    }
  }
}

function showMicError(msg){
  const tb=document.getElementById('trBox');
  const lbl=document.getElementById('recLbl');
  if(tb){
    tb.className='transcript has-text';
    tb.style.cssText+='background:#fef3c7;border-color:#f59e0b;color:#92400e;white-space:pre-line';
    tb.textContent=msg;
  }
  if(lbl){lbl.textContent='Mic unavailable';lbl.className='rec-lbl';}
  toast(msg.split('\n')[0]);
}

function stopRec(){
  if(mRec&&recSt==='recording'){
    recSt='processing';
    window._srStopping=true;
    if(window._liveRec){try{window._liveRec.stop();}catch(e){}}
    const btn=document.getElementById('recBtn');
    const lbl=document.getElementById('recLbl');
    const bars=document.getElementById('micBars');
    const wrp=document.getElementById('recWrap');
    if(btn){btn.classList.remove('pulse');btn.disabled=true;}
    if(bars)bars.classList.remove('show');
    if(wrp)wrp.classList.remove('is-rec');
    if(lbl){lbl.textContent='⏳ Processing…';lbl.className='rec-lbl';}
    try{mRec.stop();}catch(e){}
    // Wait 1200ms for SR to deliver final results
    setTimeout(()=>finalizeWithTranscript((window._liveFinal||'').trim()),1200);
  }
}

function finalizeWithTranscript(transcript){
  const tb=document.getElementById('trBox');
  const lbl=document.getElementById('recLbl');
  if(tb){
    tb.style.background='';tb.style.borderColor='';
    tb.style.color='';tb.style.whiteSpace='';
  }
  if(transcript&&transcript.length>1){
    saveR(PART,transcript);
    if(tb){
      tb.className='transcript has-text';
      tb.innerHTML='<span style="font-size:11px;font-weight:700;color:var(--blue);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px">📝 You said</span>'+
        '<span>"'+transcript+'"</span>';
    }
    if(lbl){lbl.textContent='✅ Recorded';lbl.className='rec-lbl done';}
  } else {
    saveR(PART,'[recorded]');
    if(tb){
      tb.className='transcript has-text';
      tb.innerHTML='<span style="font-size:12px;color:var(--amber);font-weight:600">🎙 Audio saved — speech not captured</span>'+
        '<br><span style="font-size:11px;color:var(--muted)">Use Chrome, allow mic in browser settings, and speak clearly. AI scorer gives partial credit.</span>';
    }
    if(lbl){lbl.textContent='✅ Recorded';lbl.className='rec-lbl done';}
  }
  window._liveFinal='';window._liveRec=null;window._srStopping=false;aChunks=[];
  finalizeRec();
}

async function transcribeWithClaude(){finalizeWithTranscript('');}
async function processRec(){finalizeWithTranscript((window._liveFinal||'').trim());}
function finalizeFromSR(){finalizeWithTranscript((window._liveFinal||'').trim());}
function blobToBase64(blob){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(blob);});}

function finalizeRec(){
  recSt='done';
  const btn=document.getElementById('recBtn');
  const lbl=document.getElementById('recLbl');
  const wrp=document.getElementById('recWrap');
  const bars=document.getElementById('micBars');
  if(btn){btn.disabled=true;btn.classList.remove('pulse');}
  if(bars)bars.classList.remove('show');
  if(lbl){lbl.textContent='✅ Recorded — click 👁 Check Answer or Next →';lbl.className='rec-lbl done';}
  if(wrp){wrp.classList.remove('is-rec');wrp.classList.add('is-done');}
  document.getElementById('nextBtn').disabled=false;
  const cb=document.getElementById('checkBtn');
  if(cb)cb.style.display='inline-flex';
}

// ─── HELPERS ────────────────────────────────────
function enableRec(){
  const b=document.getElementById('recBtn');
  const l=document.getElementById('recLbl');
  if(b){b.disabled=false;}
  if(l){l.textContent='🎙 Press mic button to start recording';l.className='rec-lbl';}
}

function saveR(p,v){if(!RESP[p])RESP[p]={};RESP[p][QI]=v;}
function getR(p,i){return(RESP[p]&&RESP[p][i]!=null)?RESP[p][i]:'';}

// speak() — wrapper using speakWithFallback with default rate/pitch
function speak(txt,cb){speakWithFallback(txt,.88,1,cb);}

function setAudioTxt(title,sub){
  const t=document.getElementById('audioTxt'),s=document.getElementById('audioSub');
  if(t)t.textContent=title;if(s)s.textContent=sub;
}

function wave(on){
  const w=document.getElementById('waveEl');
  if(w){if(on)w.classList.add('playing');else w.classList.remove('playing');}
}

function startCD(secs,part){
  stopCD();
  let left=secs;
  const isF=(part==='F');
  const fid=isF?'cdFW':'cdF',lid=isF?'cdLW':'cdL';
  cdTmr=setInterval(()=>{
    left--;
    const pct=left/secs*100;
    const f=document.getElementById(fid),l=document.getElementById(lid);
    if(f){f.style.width=pct+'%';f.className='cd-fill'+(pct<30?' low':pct<60?' mid':'');}
    if(l)l.textContent=left+'s remaining';
    if(left<=0){
      stopCD();
      if(part==='D'){
        const v=(document.getElementById('typeD')||{}).value||'';
        saveR('D',v);
        document.getElementById('nextBtn').disabled=false;
      }
      if(part==='E'){
        const v=(document.getElementById('typeE')||{}).value||'';
        saveR('E',v);
        // Auto-advance after a brief pause so user sees time is up
        setTimeout(()=>nextQ(),600);
      }
      if(part==='F'){
        const v=(document.getElementById('typeF')||{}).value||'';
        saveR('F',v);
        setTimeout(()=>nextQ(),600);
      }
    }
  },1000);
}

function stopCD(){if(cdTmr){clearInterval(cdTmr);cdTmr=null;}}
function stopAll(){
  stopCD();
  if(psTmr){clearInterval(psTmr);psTmr=null;}
  SY.cancel();
  // Stop main test recording
  window._srStopping=true;
  if(mRec&&recSt==='recording'){
    try{mRec.stop();}catch(e){}
    recSt='idle';
  }
  if(window._liveRec){try{window._liveRec.stop();}catch(e){}window._liveRec=null;}
  window._liveFinal='';
  // Stop Quick Practice recording
  if(typeof qpRec!=='undefined'&&qpRec&&qpRec.state==='recording'){
    try{qpRec.stop();}catch(e){}
  }
  if(typeof qpLiveRec!=='undefined'&&qpLiveRec){
    try{qpLiveRec.stop();}catch(e){}
    qpLiveRec=null;
  }
}

// ─── NAVIGATION ─────────────────────────────────
function nextQ(){
  stopAll();
  if(PART==='D'){const v=(document.getElementById('typeD')||{}).value||'';saveR('D',v);}
  if(PART==='E'){const v=(document.getElementById('typeE')||{}).value||'';saveR('E',v);}
  if(PART==='F'){const v=(document.getElementById('typeF')||{}).value||'';saveR('F',v);}
  const len=plen(PART);
  if(QI<len-1){QI++;renderQ();}
  else{
    const pi=PARTS.indexOf(PART);
    if(pi<PARTS.length-1){PART=PARTS[pi+1];QI=0;renderQ();}
    else finishTest();
  }
}

function prevQ(){
  stopAll();
  if(QI>0){
    QI--;renderQ();
  } else {
    // Go to last question of previous part
    const pi=PARTS.indexOf(PART);
    if(pi>0){
      PART=PARTS[pi-1];
      QI=plen(PART)-1;
      renderQ();
    }
    // If already first question of Part A — button is hidden, do nothing
  }
}

function skipQ(){
  // Save empty answer and move on
  saveR(PART,'[skipped]');
  const len=plen(PART);
  stopAll();
  if(QI<len-1){QI++;renderQ();}
  else{
    const pi=PARTS.indexOf(PART);
    if(pi<PARTS.length-1){PART=PARTS[pi+1];QI=0;renderQ();}
    else finishTest();
  }
}

function checkAnswer(){
  const panel=document.getElementById('answerPanel');
  const yourBox=document.getElementById('yourAnsBox');
  const corrBox=document.getElementById('correctAnsBox');

  // Get saved response
  let yourResp=getR(PART,QI)||'';

  // Also check live transcript box — it may have more recent text
  const tb=document.getElementById('trBox');
  if(tb&&tb.classList.contains('has-text')&&tb.textContent&&!yourResp){
    yourResp=tb.textContent.replace(/^"|"$/g,'');
  }

  // Format display of their answer
  function fmtYours(r){
    if(!r||r==='(no response yet)')return '(no response recorded yet)';
    if(r==='[skipped]')return '(skipped)';
    if(r==='[recorded]')return '(audio recorded — no text transcript)';
    return r;
  }

  if(PART==='A'){
    yourBox.textContent=fmtYours(yourResp);
    corrBox.textContent=TD.A[QI];
  } else if(PART==='B'){
    yourBox.textContent=fmtYours(yourResp);
    corrBox.innerHTML=`<div style="font-size:11px;color:var(--muted);margin-bottom:6px">Word groups: <em>${TD.B[QI].w}</em></div><strong>${TD.B[QI].a}</strong>`;
  } else if(PART==='C'){
    const itm=TD.C[QI];
    yourBox.textContent=fmtYours(yourResp);
    corrBox.innerHTML=`<div style="font-size:11px;color:var(--muted);margin-bottom:6px">Question: <em>${itm.q}</em></div><strong>Expected: ${itm.a}</strong>`;
  }
  panel.style.display='block';
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ═══════════════════════════════════════════════════════════
// FINISH & SCORE
// ═══════════════════════════════════════════════════════════
async function finishTest(){
  clearInterval(tmr);stopAll();
  document.getElementById('topTimer').style.display='none';
  document.getElementById('topPartBadge').style.display='none';
  showLoad('Scoring all responses with AI — please wait…');
  try{
    const result=await scoreAI();
    hideLoad();renderScore(result);
  }catch(e){
    console.error(e);
    hideLoad();toast('AI scoring error — using basic scoring');
    renderScore(basicScore());
  }
}

async function scoreAI(){
  const payload={
    testName:TD.name,
    A:TD.A.map((s,i)=>({correct:s,given:getR('A',i)})),
    B:TD.B.map((item,i)=>({words:item.w,correct:item.a,given:getR('B',i)})),
    C:TD.C.map((item,i)=>({question:item.q,correct:item.a,given:getR('C',i)})),
    D:TD.D.map((item,i)=>({sentence:item.s,correct:item.a,given:getR('D',i)})),
    E:TD.E.map((s,i)=>({correct:s,given:getR('E',i)})),
    F:TD.F.map((item,i)=>({title:item.t,original:item.p,keyPoints:item.k,given:getR('F',i)}))
  };

  const prompt=`You are an expert Versant English test scorer. Score this test and return ONLY valid JSON — no markdown, no extra text.

SCORING RULES:
- Part A Repeat (max 16pts, 1pt each): Compare spoken transcript to correct sentence. Correct or near-correct=1, partial=0.5, wrong/blank=0. "[recorded]" means audio was recorded but could not be transcribed — give 0.5 partial credit. "[skipped]" or blank=0.
- Part B Sentence Builds (max 8pts, 1pt each): Check if rearranged sentence is grammatically correct with same meaning. Correct=1, partial word order=0.5, wrong=0. "[recorded]"=0.5. "[skipped]"=0.
- Part C Conversations (max 12pts, 1pt each): Check if answer correctly addresses the question. Exact wording not required — correct meaning=1, partial=0.5, wrong/blank=0. "[recorded]"=0.5. "[skipped]"=0.
- Part D Completion (max 18pts, 1pt each): Correct word or valid synonym=1. Minor spelling error or very close word (≥85% similar, e.g. "recieved" for "received", "modifcation" for "modification")=0.5. Wrong word or blank=0. "[skipped]"=0.
- Part E Dictation (max 14pts, 1pt each): Exact match ignoring case and punctuation=1. More than 70% words correct=0.5. Less=0. "[skipped]"=0.
- Part F Reconstruction (max 12pts, 6pts per passage): Count key points covered (1pt each up to 5) + 1pt for clear writing. Total per passage: 0-6. Blank or "[skipped]"=0.

DATA:
${JSON.stringify(payload)}

Return EXACTLY this JSON (no markdown):
{"A":{"score":0,"max":16,"items":[{"q":"correct sentence","given":"their answer","pts":0,"feedback":"specific feedback"}]},"B":{"score":0,"max":8,"items":[{"q":"word groups","correct":"correct answer","given":"their answer","pts":0,"feedback":"specific feedback"}]},"C":{"score":0,"max":12,"items":[{"q":"question","correct":"correct answer","given":"their answer","pts":0,"feedback":"specific feedback"}]},"D":{"score":0,"max":18,"items":[{"q":"sentence","correct":"word","given":"their word","pts":0,"feedback":"correct or what is wrong"}]},"E":{"score":0,"max":14,"items":[{"q":"correct sentence","given":"their sentence","pts":0,"feedback":"list errors or correct"}]},"F":{"score":0,"max":12,"items":[{"q":"passage title","keys":["key point"],"given":"their text","pts":0,"feedback":"which points covered and which missed"}]},"total":0,"level":"Intermediate","summary":"2-3 sentences of personalized feedback"}`;

  const res=await fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:6000,messages:[{role:'user',content:prompt}]})
  });
  if(!res.ok)throw new Error('API '+res.status);
  const d=await res.json();
  let txt=d.content.map(c=>c.text||'').join('');
  txt=txt.replace(/```json|```/g,'').trim();
  return JSON.parse(txt);
}

function basicScore(){
  const r={A:{score:0,max:16,items:[]},B:{score:0,max:8,items:[]},C:{score:0,max:12,items:[]},D:{score:0,max:18,items:[]},E:{score:0,max:14,items:[]},F:{score:0,max:12,items:[]},total:0,level:'Intermediate',summary:'Basic scoring applied. AI scoring unavailable.'};
  TD.A.forEach((s,i)=>{const g=getR('A',i);const p=g?0.8:0;r.A.score+=p;r.A.items.push({q:s,given:g,pts:p,feedback:g?'Recorded':'No answer'});});
  TD.B.forEach((item,i)=>{const g=getR('B',i);const p=g?0.8:0;r.B.score+=p;r.B.items.push({q:item.w,correct:item.a,given:g,pts:p,feedback:g?'Recorded':'No answer'});});
  TD.C.forEach((item,i)=>{const g=getR('C',i);const p=g?0.8:0;r.C.score+=p;r.C.items.push({q:item.q,correct:item.a,given:g,pts:p,feedback:g?'Recorded':'No answer'});});
  TD.D.forEach((item,i)=>{const g=getR('D',i);const p=g.trim().toLowerCase()===item.a.toLowerCase()?1:0;r.D.score+=p;r.D.items.push({q:item.s,correct:item.a,given:g,pts:p,feedback:p?'Correct':'Incorrect'});});
  TD.E.forEach((s,i)=>{const g=getR('E',i);const norm=x=>x.toLowerCase().replace(/[.,!?'"]/g,'').trim();const p=norm(g)===norm(s)?1:0;r.E.score+=p;r.E.items.push({q:s,given:g,pts:p,feedback:p?'Correct':'Check wording'});});
  TD.F.forEach((item,i)=>{const g=getR('F',i);const p=g.length>80?4:g.length>30?2:0;r.F.score+=p;r.F.items.push({q:item.t,keys:item.k,given:g,pts:p,feedback:'AI review needed'});});
  r.total=r.A.score+r.B.score+r.C.score+r.D.score+r.E.score+r.F.score;
  return r;
}

// ═══════════════════════════════════════════════════════════
// RENDER SCORE
// ═══════════════════════════════════════════════════════════
function renderScore(result){
  localStorage.setItem('vp_d_'+CID,'1');
  localStorage.setItem('vp_s_'+CID,Math.round(result.total));
  document.getElementById('sNum').textContent=Math.round(result.total);
  document.getElementById('sTitle').textContent=TD.name+' — Complete';
  document.getElementById('sSummary').textContent=result.summary||'';
  document.getElementById('sLevel').textContent=result.level||'—';

  const ps=document.getElementById('partStrip');
  ps.innerHTML=PARTS.map(p=>{
    const d=result[p];if(!d)return'';
    return`<div class="ps-item"><div class="ps-ltr">Part ${p}</div><div class="ps-num">${Math.round(d.score)}</div><div class="ps-max">/ ${d.max}</div></div>`;
  }).join('');

  const pnames={A:'Part A — Repeat',B:'Part B — Sentence Builds',C:'Part C — Conversations',D:'Part D — Sentence Completion',E:'Part E — Dictation',F:'Part F — Passage Reconstruction'};
  const pshort={A:'Part A',B:'Part B',C:'Part C',D:'Part D',E:'Part E',F:'Part F'};
  const ab=document.getElementById('accBlocks');ab.innerHTML='';
  PARTS.forEach(p=>{
    const d=result[p];if(!d||!d.items)return;
    const pct=d.items.length?Math.round(d.items.filter(x=>x.pts>=1).length/d.items.length*100):0;
    const el=document.createElement('div');el.className='acc-block';
    el.innerHTML=`<div class="acc-hdr" onclick="togAcc(this)">
      <span class="acc-htitle">${pnames[p]}</span>
      <div class="acc-hmeta">
        <span>${Math.round(d.score)} / ${d.max} pts</span>
        <span>${pct}% correct</span>
        <button class="ppart-btn" onclick="event.stopPropagation();practicePart('${p}')">▶ Practice ${pshort[p]}</button>
        <span class="acc-arr">▼</span>
      </div>
    </div>
    <div class="acc-body">
      ${d.items.map((item,i)=>{
        const chip=item.pts>=1?'<span class="rchip rchip-ok">✓ Correct</span>':
                   item.pts>=0.5?'<span class="rchip rchip-half">~ Partial</span>':
                   '<span class="rchip rchip-no">✗ Wrong</span>';
        return`<div class="a-row">
          <div class="a-num">${i+1}</div>
          <div>
            <div class="a-q">${chip}${item.q||''}</div>
            <div class="a-you">You said: <code>${item.given||'(no answer)'}</code></div>
            ${item.pts<1&&item.correct?`<div class="a-cor">Correct answer: <code>${item.correct}</code></div>`:''}
            <div class="a-fb">${item.feedback||''}</div>
          </div>
        </div>`;
      }).join('')}
      <div style="padding:12px 0 4px;text-align:center">
        <button class="btn btn-outline" style="font-size:13px;padding:8px 20px" onclick="practicePart('${p}')">▶ Practice ${pnames[p]} Again</button>
      </div>
    </div>`;
    ab.appendChild(el);
  });
  showPg('pgScore');
}

function togAcc(h){
  const b=h.nextElementSibling,a=h.querySelector('.acc-arr');
  b.classList.toggle('open');if(a)a.classList.toggle('open');
}

// ═══════════════════════════════════════════════════════════
// UI UTILS
// ═══════════════════════════════════════════════════════════
// Cache all .pg elements once for fast showPg calls
let _pgEls=null;
function showPg(id){
  if(!_pgEls) _pgEls=document.querySelectorAll('.pg');
  _pgEls.forEach(p=>p.classList.remove('on'));
  const el=document.getElementById(id);
  if(el) el.classList.add('on');
}
function showLoad(t){document.getElementById('ldTxt').textContent=t;document.getElementById('loadOvr').classList.add('on');}
function hideLoad(){document.getElementById('loadOvr').classList.remove('on');}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),4000);}

// ═══════════════════════════════════════════════════════════
// FOOTER MODALS
// ═══════════════════════════════════════════════════════════
function openModal(id){document.getElementById(id).classList.add('on');}
function closeModal(id){document.getElementById(id).classList.remove('on');}
document.addEventListener('click',e=>{
  document.querySelectorAll('.fmodal-bg.on').forEach(bg=>{
    if(e.target===bg) bg.classList.remove('on');
  });
});

// ═══════════════════════════════════════════════════════════
// FOOTER MODALS
// ═══════════════════════════════════════════════════════════
function openModal(id){document.getElementById(id).classList.add('on');}
function closeModal(id){document.getElementById(id).classList.remove('on');}
document.addEventListener('click',e=>{
  document.querySelectorAll('.fmodal-bg.on').forEach(bg=>{
    if(e.target===bg) bg.classList.remove('on');
  });
});

// ═══════════════════════════════════════════════════════════
// SENTENCE LIBRARY — ALL 15 TESTS COMBINED
// ═══════════════════════════════════════════════════════════
const LIB_PARTS=[
  {key:'A',label:'Part A — Repeat',tag:'Speaking',tagCls:'sp'},
  {key:'B',label:'Part B — Sentence Builds',tag:'Speaking',tagCls:'sp'},
  {key:'C',label:'Part C — Conversations',tag:'Speaking',tagCls:'sp'},
  {key:'D',label:'Part D — Sentence Completion',tag:'Typing',tagCls:''},
  {key:'E',label:'Part E — Dictation',tag:'Listen+Type',tagCls:'lw'},
  {key:'F',label:'Part F — Passage Reconstruction',tag:'Read+Write',tagCls:'lw'},
];
let libActivePart='A';
const _libCache={};  // cache rendered HTML per part key

function openLib(){
  showPg('pgLib');
  buildLibTabs();
  renderLibPart(libActivePart);
}

function buildLibTabs(){
  const tabs=document.getElementById('libPartTabs');
  tabs.innerHTML=LIB_PARTS.map(p=>`
    <button id="libTab_${p.key}" class="lib-test-btn${p.key===libActivePart?' active':''}"
      onclick="renderLibPart('${p.key}')">${p.label}</button>`
  ).join('');
}

// Inject tab button CSS once at script load
(function(){
  const s=document.createElement('style');
  s.textContent=`.lib-test-btn{padding:8px 16px;border-radius:9px;border:1.5px solid var(--border);background:#fff;font-family:'Outfit',sans-serif;font-size:13px;font-weight:600;cursor:pointer;color:var(--muted);transition:all .15s}.lib-test-btn.active,.lib-test-btn:hover{border-color:var(--blue);background:var(--blue-l);color:var(--blue)}`;
  document.head.appendChild(s);
})();

function renderLibPart(partKey){
  libActivePart=partKey;
  // Update tab highlights by ID
  LIB_PARTS.forEach(p=>{
    const btn=document.getElementById('libTab_'+p.key);
    if(btn) btn.classList.toggle('active', p.key===partKey);
  });

  const content=document.getElementById('libContent');

  // Serve from cache if already built
  if(_libCache[partKey]){
    content.innerHTML=_libCache[partKey];
    return;
  }

  const pInfo=LIB_PARTS.find(p=>p.key===partKey);
  let rows='';
  let total=0;

  for(let tid=1;tid<=15;tid++){
    const t=TESTS[tid];
    const items=getLibItems(t,partKey);
    if(!items.length) continue;
    rows+=`<div style="background:var(--navy);color:#fff;padding:8px 22px;font-size:11px;font-weight:700;letter-spacing:.8px;text-transform:uppercase">${t.name} — ${t.src}</div>`;
    items.forEach((item)=>{
      total++;
      rows+=`<div class="lib-sent-row">
        <div class="lib-num">${total}</div>
        <div class="lib-body">
          <div class="lib-text">${item.text}</div>
          ${item.ans?`<div class="lib-ans">✦ ${item.ans}</div>`:''}
        </div>
        <div class="lib-tag ${pInfo.tagCls}">${pInfo.tag}</div>
      </div>`;
    });
  }

  const html=`
    <div class="lib-part-block">
      <div style="padding:14px 22px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="font-size:16px;font-weight:700;color:var(--navy)">${pInfo.label}</div>
        <div style="font-size:12px;color:var(--muted);font-weight:600">${total} sentences · all 15 tests</div>
      </div>
      ${rows||'<div class="lib-empty">No items found.</div>'}
    </div>`;

  _libCache[partKey]=html;  // store in cache
  content.innerHTML=html;
}

function getLibItems(t,partKey){
  if(!t) return[];
  if(partKey==='A') return t.A.map(s=>({text:s,ans:null}));
  if(partKey==='B') return t.B.map(it=>({text:'<span style="color:var(--muted);font-size:12px">Word groups:</span> <strong>'+it.w+'</strong>',ans:'Correct sentence: '+it.a}));
  if(partKey==='C') return t.C.map(it=>({
    text:'<span style="color:var(--muted);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Conversation</span><br>'
      +it.s1+' <span style="color:var(--muted)">→</span> '
      +it.s2+' <span style="color:var(--muted)">→</span> '
      +it.s3
      +'<br><span style="color:var(--muted);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Question</span><br>'+it.q,
    ans:it.a
  }));
  if(partKey==='D') return t.D.map(it=>({text:it.s,ans:'Missing word: <strong>'+it.a+'</strong>'}));
  if(partKey==='E') return t.E.map(s=>({text:s,ans:null}));
  if(partKey==='F') return t.F.map(it=>({
    text:'<strong>'+it.t+'</strong><br><span style="font-size:13px;color:#555">'+it.p+'</span>',
    ans:'Key points: '+it.k.join(' · ')
  }));
  return[];
}

// ═══════════════════════════════════════════════════════════
// PASSWORD + QUICK INFO GATE
// ═══════════════════════════════════════════════════════════
(function(){
  if(sessionStorage.getItem('nv_auth')==='1'){
    document.getElementById('pwGate').classList.add('hidden');
    return;
  }
  setTimeout(()=>{const i=document.getElementById('pwInput');if(i)i.focus();},100);
})();

// ── STEP 1: PASSWORD ──────────────────────────────────────
function checkPw(){
  const input=document.getElementById('pwInput');
  const err=document.getElementById('pwErr');
  const val=(input.value||'').trim().toLowerCase();
  const validPasswords=['techbee','hcltech','versant','india','english','versanttest','niraj','nirajcharpe','hcl','noida'];
  if(validPasswords.includes(val)){
    err.textContent='';
    document.getElementById('pwStep1').style.display='none';
    document.getElementById('pwStep2').style.display='block';
    setTimeout(()=>{const i=document.getElementById('regName');if(i)i.focus();},100);
  } else {
    input.classList.add('error');
    err.textContent='Incorrect password. Please try again.';
    input.value='';
    setTimeout(()=>input.classList.remove('error'),400);
    input.focus();
  }
}

function togglePwEye(){
  const i=document.getElementById('pwInput');
  const e=document.getElementById('pwEye');
  if(i.type==='password'){i.type='text';e.textContent='🙈';}
  else{i.type='password';e.textContent='👁';}
}

// ── STEP 2: QUICK INFO ────────────────────────────────────
function regSubmit(){
  const name=(document.getElementById('regName').value||'').trim();
  const age=(document.getElementById('regAge').value||'').trim();
  const purpose=document.querySelector('input[name="regPurpose"]:checked');
  const err=document.getElementById('regErr');
  if(!name){err.textContent='Please enter your name.';return;}
  if(!age||isNaN(age)||age<10||age>99){err.textContent='Please enter a valid age (10–99).';return;}
  if(!purpose){err.textContent='Please select your purpose.';return;}
  err.textContent='';
  sessionStorage.setItem('nv_auth','1');
  const gate=document.getElementById('pwGate');
  gate.style.opacity='0';
  gate.style.transition='opacity .45s ease';
  setTimeout(()=>gate.classList.add('hidden'),450);
}

// ═══════════════════════════════════════════════════════════
// QUICK PRACTICE ENGINE
// ═══════════════════════════════════════════════════════════
let qpQueue=[], qpIdx=0, qpCorrect=0, qpAnswered=false;

const QP_BADGE={
  A:{label:'Part A — Repeat',color:'#1A56DB',bg:'#EBF5FF',icon:'🔊'},
  B:{label:'Part B — Builds',color:'#1A56DB',bg:'#EBF5FF',icon:'🔀'},
  C:{label:'Part C — Conversations',color:'#7c3aed',bg:'#f5f3ff',icon:'💬'},
  D:{label:'Part D — Completion',color:'#0f766e',bg:'#f0fdfa',icon:'✏️'},
  E:{label:'Part E — Dictation',color:'#b45309',bg:'#fffbeb',icon:'🎧'},
  F:{label:'Part F — Passage',color:'#be185d',bg:'#fdf2f8',icon:'📖'},
};

function openQP(){showPg('pgQP');qpShowSetup();}

function qpShowSetup(){
  document.getElementById('qpSetup').style.display='block';
  document.getElementById('qpSession').style.display='none';
  document.getElementById('qpDone').style.display='none';
  stopAll();
}

function qpExit(){stopAll();showPg('pgHome');}

function qpStart(){
  // Gather selected parts
  const parts=['A','B','C','D','E','F'].filter(p=>document.getElementById('qpCb'+p).checked);
  if(!parts.length){toast('Please select at least one part.');return;}
  const count=parseInt(document.getElementById('qpCount').value)||20;

  // Build pool of all items for selected parts from all 15 tests
  let pool=[];
  for(let tid=1;tid<=15;tid++){
    const t=TESTS[tid];
    parts.forEach(p=>{
      const items=qpGetItems(t,p);
      items.forEach(item=>pool.push({...item,part:p,testId:tid}));
    });
  }

  // Shuffle and slice
  pool=pool.sort(()=>Math.random()-.5).slice(0,count);

  qpQueue=pool;
  qpIdx=0;
  qpCorrect=0;
  qpAnswered=false;

  document.getElementById('qpSetup').style.display='none';
  document.getElementById('qpSession').style.display='block';
  document.getElementById('qpDone').style.display='none';
  qpRender();
}

function qpGetItems(t,p){
  if(!t) return[];
  if(p==='A') return t.A.map(s=>({type:'speak',text:s,answer:s}));
  if(p==='B') return t.B.map(it=>({type:'speak',text:it.w,answer:it.a,prompt:'Rearrange these word groups into a correct sentence:'}));
  if(p==='C') return t.C.map(it=>({type:'speak',
    text:it.s1+'\n'+it.s2+'\n'+it.s3,
    question:it.q,answer:it.a,prompt:'Listen to the conversation, then answer the question:'}));
  if(p==='D') return t.D.map(it=>({type:'type-word',text:it.s,answer:it.a,prompt:'Type the missing word:'}));
  if(p==='E') return t.E.map(s=>({type:'type-sent',text:s,answer:s,prompt:'Type the sentence exactly:'}));
  if(p==='F') return t.F.map(it=>({type:'type-para',text:it.p,title:it.t,answer:it.p,keyPoints:it.k,prompt:'Read the passage, then reconstruct it from memory:'}));
  return[];
}

function qpRender(){
  stopAll(); qpAnswered=false;
  const total=qpQueue.length;
  const item=qpQueue[qpIdx];
  const pct=Math.round((qpIdx/total)*100);

  document.getElementById('qpProgFill').style.width=pct+'%';
  document.getElementById('qpProgLbl').textContent=(qpIdx+1)+' / '+total;

  const b=QP_BADGE[item.part];
  const card=document.getElementById('qpCard');

  // Build card HTML based on item type
  let inner='';
  const badge=`<div class="qp-part-badge" style="background:${b.bg};color:${b.color}">${b.icon} ${b.label}</div>`;

  if(item.type==='speak'){
    // Part A / B / C — play audio, record
    let qtext='';
    if(item.part==='A'){
      qtext=`<div class="qp-q-text">🔊 Listen carefully, then repeat the sentence exactly.</div>`;
    } else if(item.part==='B'){
      qtext=`<div class="qp-sub-text">${item.prompt||''}</div><div class="qp-q-text" style="font-family:monospace;background:var(--off);padding:10px 14px;border-radius:8px;font-size:14px">${item.text}</div>`;
    } else if(item.part==='C'){
      const lines=item.text.split('\n').map((l,i)=>`<div style="padding:4px 0;color:${i%2===0?'var(--navy)':'var(--ink)'}">${i===0?'👤':i===1?'👥':'👤'} ${l}</div>`).join('');
      qtext=`<div class="qp-sub-text">${item.prompt||''}</div><div style="background:var(--off);border-radius:10px;padding:12px 16px;margin-bottom:12px;font-size:14px">${lines}</div><div class="qp-q-text">❓ ${item.question||''}</div>`;
    }
    inner=badge+qtext+
      `<div id="qpAudioRow" style="margin-bottom:12px">
        <button class="btn btn-outline" id="qpPlayBtn" style="margin-right:8px" onclick="qpPlay()">▶ Play</button>
        <button class="btn" id="qpRecBtn" style="background:var(--green-l);border:1.5px solid #22c55e;color:#15803d;font-weight:700" onclick="qpToggleRec()" disabled>🎙 Record</button>
        <span id="qpRecLbl" style="font-size:12px;color:var(--muted);margin-left:10px"></span>
      </div>
      <div id="qpTranscript" style="display:none;background:var(--off);border-radius:8px;padding:10px 14px;font-size:14px;color:var(--ink);margin-bottom:8px;font-style:italic"></div>
      <div class="qp-feedback" id="qpFeedback"></div>`;
  } else if(item.type==='type-word'){
    inner=badge+
      `<div class="qp-sub-text">${item.prompt}</div>
      <div class="qp-q-text">${item.text}</div>
      <input class="qp-type-input" id="qpTypeIn" type="text" placeholder="Type the missing word…"
        oninput="qpOnType()" onkeydown="if(event.key==='Enter')qpCheckType()">
      <div class="qp-feedback" id="qpFeedback" style="margin-top:12px"></div>`;
  } else if(item.type==='type-sent'){
    // Part E — play audio first, then type
    inner=badge+
      `<div class="qp-sub-text">${item.prompt}</div>
      <div style="margin-bottom:12px">
        <button class="btn btn-outline" id="qpPlayBtn" onclick="qpPlayE()">🎧 Play Sentence</button>
      </div>
      <textarea class="qp-type-input" id="qpTypeIn" rows="2" placeholder="Type the sentence exactly as you heard it…"
        oninput="qpOnType()" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();qpCheckType();}"></textarea>
      <div class="qp-feedback" id="qpFeedback" style="margin-top:12px"></div>`;
  } else if(item.type==='type-para'){
    // Part F — show passage, then hide, then type
    inner=badge+
      `<div class="qp-sub-text"><strong>${item.title||'Passage'}</strong> — ${item.prompt}</div>
      <div id="qpPassage" style="background:var(--off);border-radius:10px;padding:14px 18px;font-size:14px;line-height:1.7;margin-bottom:12px;color:var(--ink)">${item.text}</div>
      <button class="btn btn-outline" id="qpHideBtn" style="margin-bottom:12px;font-size:13px" onclick="qpHidePassage()">👁 Hide &amp; Write</button>
      <textarea class="qp-type-input" id="qpTypeIn" rows="5" placeholder="Reconstruct the passage from memory…" style="display:none"
        oninput="qpOnType()"></textarea>
      <div class="qp-feedback" id="qpFeedback" style="margin-top:12px"></div>`;
  }

  card.innerHTML=inner;

  // Nav buttons
  const nav=document.getElementById('qpNav');
  nav.innerHTML=`
    <button class="btn btn-outline" style="font-size:13px;padding:9px 18px" onclick="qpSkip()">Skip →</button>
    <div style="display:flex;gap:8px">
      <button class="btn" id="qpCheckBtn" style="display:none;background:var(--amber-l);border:1.5px solid var(--amber);color:#92400e;font-weight:700;padding:10px 20px" onclick="qpCheckType()">✓ Check Answer</button>
      <button class="btn btn-blue" id="qpNextBtn" style="padding:10px 24px" onclick="qpNext()" disabled>Next →</button>
    </div>`;

  // Auto-play for Part A
  if(item.part==='A') setTimeout(qpPlay, 300);
  // Auto-play for Part E
  if(item.type==='type-sent') {}  // user clicks play manually
}

// ── PLAY / RECORD ──────────────────────────────────────────
function qpPlay(){
  const item=qpQueue[qpIdx];
  const btn=document.getElementById('qpPlayBtn');
  if(!btn) return;
  btn.disabled=true;
  if(item.part==='A'){
    speakWithFallback(item.text,1,1,()=>{
      btn.disabled=false;
      const rb=document.getElementById('qpRecBtn');
      if(rb) rb.disabled=false;
    });
  } else if(item.part==='B'){
    // speak each word group separately
    const groups=item.text.split('/').map(s=>s.trim());
    let i=0;
    function spk(){
      if(i>=groups.length){
        btn.disabled=false;
        const rb=document.getElementById('qpRecBtn');
        if(rb) rb.disabled=false;
        return;
      }
      speakWithFallback(groups[i],1,1,()=>{setTimeout(spk,400);});
      i++;
    }
    spk();
  } else if(item.part==='C'){
    const lines=item.text.split('\n');
    const rates=[.9,1.2,.9];
    let i=0;
    function spkLine(){
      if(i>=lines.length){
        // speak question
        speakWithFallback(item.question,1,1,()=>{
          btn.disabled=false;
          const rb=document.getElementById('qpRecBtn');
          if(rb) rb.disabled=false;
        });
        return;
      }
      speakWithFallback(lines[i],rates[i]||1,1,()=>{setTimeout(spkLine,400);});
      i++;
    }
    spkLine();
  }
}

function qpPlayE(){
  const item=qpQueue[qpIdx];
  const btn=document.getElementById('qpPlayBtn');
  if(btn) btn.disabled=true;
  speakWithFallback(item.text,.82,1,()=>{if(btn) btn.disabled=false;});
}

let qpRec=null, qpLiveRec=null, qpLiveFinal='';

function qpToggleRec(){
  const btn=document.getElementById('qpRecBtn');
  const lbl=document.getElementById('qpRecLbl');
  if(qpRec&&qpRec.state==='recording'){
    // stop
    qpRec.stop();
    if(qpLiveRec){try{qpLiveRec.stop();}catch(e){}}
    lbl.textContent='Processing…';
    btn.textContent='🎙 Record';
    btn.style.background='var(--green-l)';
    return;
  }
  // start
  if(!window.isSecureContext){
    toast('⚠ Microphone requires HTTPS. Open via https:// not http://');
    return;
  }
  navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{
    qpLiveFinal='';
    const mime=['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/mp4'].find(m=>MediaRecorder.isTypeSupported(m))||'';
    qpRec=new MediaRecorder(stream,mime?{mimeType:mime}:{});
    qpRec.start();
    btn.textContent='⏹ Stop';
    btn.style.background='#fee2e2';
    btn.style.border='1.5px solid #ef4444';
    btn.style.color='#dc2626';
    lbl.textContent='Recording…';

    // live speech recognition in QP with restart loop
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(SR){
      let qpSrStopping=false;

      function startQpSR(){
        if(qpSrStopping) return;
        const sr=new SR();
        sr.continuous=true;
        sr.interimResults=true;
        sr.lang=getAccentLang();
        sr.onresult=e=>{
          let final='',interim='';
          for(let i=e.resultIndex;i<e.results.length;i++){
            if(e.results[i].isFinal) final+=(qpLiveFinal?' ':'')+e.results[i][0].transcript.trim();
            else interim+=e.results[i][0].transcript;
          }
          if(final) qpLiveFinal+=final;
          // Show live in transcript box
          const tr=document.getElementById('qpTranscript');
          if(tr){
            const show=(qpLiveFinal+(interim?' '+interim:'')).trim();
            if(show){tr.style.display='block';tr.textContent='"'+show+'"';}
          }
        };
        sr.onerror=()=>{if(!qpSrStopping)try{sr.stop();}catch(e){}};
        sr.onend=()=>{if(!qpSrStopping&&qpRec&&qpRec.state==='recording')try{startQpSR();}catch(e){}};
        qpLiveRec=sr;
        try{sr.start();}catch(e){}
      }

      startQpSR();

      // When stop button is pressed, signal SR to stop restarting
      const origStop=qpRec.stop.bind(qpRec);
      qpRec.stop=()=>{qpSrStopping=true;if(qpLiveRec)try{qpLiveRec.stop();}catch(e){}origStop();};
    }

    qpRec.onstop=()=>{
      stream.getTracks().forEach(t=>t.stop());
      setTimeout(()=>{
        const transcript=(qpLiveFinal||'').trim();
        const tr=document.getElementById('qpTranscript');
        const lbl=document.getElementById('qpRecLbl');
        lbl.textContent='✓ Recorded';
        if(tr){
          tr.style.display='block';
          tr.textContent=transcript?'"'+transcript+'"':'(audio captured — no transcript)';
        }
        // evaluate
        qpEvalSpeak(transcript);
        // enable Next
        document.getElementById('qpNextBtn').disabled=false;
      },500);
    };
  }).catch(e=>{
    if(e.name==='NotAllowedError'||e.name==='PermissionDeniedError'){
      toast('⚠ Mic blocked. Click 🔒 in address bar → Allow Microphone.');
    } else {
      toast('⚠ Mic error: '+(e.message||e.name)+'. Ensure site is on HTTPS.');
    }
  });
}

function qpEvalSpeak(transcript){
  const item=qpQueue[qpIdx];
  qpAnswered=true;
  const fb=document.getElementById('qpFeedback');
  if(!transcript){
    fb.className='qp-feedback show qp-fb-wrong';
    fb.innerHTML=`<div class="qp-fb-label" style="color:#dc2626">✗ No speech detected</div><div class="qp-fb-text">Correct answer: <strong>${item.answer}</strong></div>`;
    return;
  }
  // simple scoring: check how many words match
  const got=transcript.toLowerCase().replace(/[^a-z0-9 ]/g,'').split(/\s+/);
  const exp=(item.answer||'').toLowerCase().replace(/[^a-z0-9 ]/g,'').split(/\s+/);
  const matches=exp.filter(w=>got.includes(w)).length;
  const ratio=matches/exp.length;
  if(ratio>=0.8){
    qpCorrect++;
    fb.className='qp-feedback show qp-fb-correct';
    fb.innerHTML=`<div class="qp-fb-label" style="color:#15803d">✓ Correct!</div><div class="qp-fb-text">You said: <em>"${transcript}"</em></div>`;
  } else if(ratio>=0.5){
    fb.className='qp-feedback show qp-fb-partial';
    fb.innerHTML=`<div class="qp-fb-label" style="color:#b45309">~ Partial</div><div class="qp-fb-text">You said: <em>"${transcript}"</em><br>Expected: <strong>${item.answer}</strong></div>`;
  } else {
    fb.className='qp-feedback show qp-fb-wrong';
    fb.innerHTML=`<div class="qp-fb-label" style="color:#dc2626">✗ Incorrect</div><div class="qp-fb-text">You said: <em>"${transcript}"</em><br>Expected: <strong>${item.answer}</strong></div>`;
  }
}

// ── TYPING PARTS ───────────────────────────────────────────
function qpOnType(){
  const btn=document.getElementById('qpCheckBtn');
  const inp=document.getElementById('qpTypeIn');
  if(btn&&inp) btn.style.display=inp.value.trim()?'inline-flex':'none';
}

function qpHidePassage(){
  const p=document.getElementById('qpPassage');
  const hb=document.getElementById('qpHideBtn');
  const ta=document.getElementById('qpTypeIn');
  const cb=document.getElementById('qpCheckBtn');
  if(p) p.style.display='none';
  if(hb) hb.style.display='none';
  if(ta){ta.style.display='block';ta.focus();}
  if(cb) cb.style.display='inline-flex';
}

function qpCheckType(){
  const item=qpQueue[qpIdx];
  const inp=document.getElementById('qpTypeIn');
  const fb=document.getElementById('qpFeedback');
  const nextBtn=document.getElementById('qpNextBtn');
  if(!inp) return;
  const typed=(inp.value||'').trim();
  if(!typed) return;
  qpAnswered=true;
  if(nextBtn) nextBtn.disabled=false;
  const cb=document.getElementById('qpCheckBtn');
  if(cb) cb.style.display='none';

  if(item.type==='type-word'){
    // Exact or fuzzy word match
    const result=scoreWord(typed.toLowerCase(),item.answer.toLowerCase());
    if(result.score===1){
      qpCorrect++;
      fb.className='qp-feedback show qp-fb-correct';
      fb.innerHTML=`<div class="qp-fb-label" style="color:#15803d">✓ Correct!</div><div class="qp-fb-text">Answer: <strong>${item.answer}</strong></div>`;
    } else if(result.score===0.5){
      fb.className='qp-feedback show qp-fb-partial';
      fb.innerHTML=`<div class="qp-fb-label" style="color:#b45309">~ Close! Minor spelling error</div><div class="qp-fb-text">You typed: <em>${typed}</em> · Correct: <strong>${item.answer}</strong></div>`;
    } else {
      fb.className='qp-feedback show qp-fb-wrong';
      fb.innerHTML=`<div class="qp-fb-label" style="color:#dc2626">✗ Incorrect</div><div class="qp-fb-text">You typed: <em>${typed}</em> · Correct answer: <strong>${item.answer}</strong></div>`;
    }
  } else if(item.type==='type-sent'){
    // Word-level comparison for dictation
    const got=typed.toLowerCase().replace(/[^a-z0-9 ']/g,'').split(/\s+/);
    const exp=item.answer.toLowerCase().replace(/[^a-z0-9 ']/g,'').split(/\s+/);
    const matches=exp.filter((w,i)=>got[i]===w).length;
    const ratio=matches/exp.length;
    if(ratio>=0.9){
      qpCorrect++;
      fb.className='qp-feedback show qp-fb-correct';
      fb.innerHTML=`<div class="qp-fb-label" style="color:#15803d">✓ Correct!</div><div class="qp-fb-text">Expected: <em>${item.answer}</em></div>`;
    } else if(ratio>=0.6){
      fb.className='qp-feedback show qp-fb-partial';
      fb.innerHTML=`<div class="qp-fb-label" style="color:#b45309">~ Partial (${Math.round(ratio*100)}% correct)</div><div class="qp-fb-text">You: <em>${typed}</em><br>Expected: <strong>${item.answer}</strong></div>`;
    } else {
      fb.className='qp-feedback show qp-fb-wrong';
      fb.innerHTML=`<div class="qp-fb-label" style="color:#dc2626">✗ Incorrect</div><div class="qp-fb-text">You: <em>${typed}</em><br>Expected: <strong>${item.answer}</strong></div>`;
    }
  } else if(item.type==='type-para'){
    // Key-point coverage
    const kp=item.keyPoints||[];
    const typedLow=typed.toLowerCase();
    const covered=kp.filter(k=>k.split(' ').filter(w=>w.length>3).every(w=>typedLow.includes(w.toLowerCase()))).length;
    const ratio=kp.length?covered/kp.length:0;
    if(ratio>=0.7){
      qpCorrect++;
      fb.className='qp-feedback show qp-fb-correct';
      fb.innerHTML=`<div class="qp-fb-label" style="color:#15803d">✓ Good reconstruction! (${covered}/${kp.length} key points)</div><div class="qp-fb-text">Key points: ${kp.join(' · ')}</div>`;
    } else {
      fb.className='qp-feedback show qp-fb-partial';
      fb.innerHTML=`<div class="qp-fb-label" style="color:#b45309">~ Partial (${covered}/${kp.length} key points)</div><div class="qp-fb-text">Key points to include: ${kp.join(' · ')}</div>`;
    }
  }
}

function qpNext(){
  stopAll();
  qpIdx++;
  if(qpIdx>=qpQueue.length){qpFinish();return;}
  qpRender();
}

function qpSkip(){
  stopAll();
  qpIdx++;
  if(qpIdx>=qpQueue.length){qpFinish();return;}
  qpRender();
}

function qpFinish(){
  document.getElementById('qpSession').style.display='none';
  document.getElementById('qpDone').style.display='block';
  const total=qpQueue.length;
  document.getElementById('qpScoreNum').textContent=qpCorrect+'/'+total;
  const pct=Math.round((qpCorrect/total)*100);
  document.getElementById('qpScoreSub').textContent=pct+'% correct · '+total+' questions completed';
}

function qpRestart(){
  document.getElementById('qpDone').style.display='none';
  qpShowSetup();
}

// BOOT
initHome();
