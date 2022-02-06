# SentiTunes
![Screenshot 2022-02-06 094847](https://user-images.githubusercontent.com/81494714/152676570-1172ad9c-eab0-4402-b47e-0bf55d08d8ab.png)


## Inspiration
With the pandemic and lockdown, mental health has been an issue for a lot of people. As getting professional help might take a while, we've created a web app that will help people navigate their emotions and provide comfort to them through music tailored to their current feelings. 

## What it does
SentiTunes carries out sentiment analysis on the user's input for how they're feeling and search for the top 10 songs on spotify that would suit the emotion, generating a custom playlist for the user to cope with a bad emotion or enhance a good one. 

## How we built it
For the frontend, we used React to design the UI and implemented some javascript to call functions from the backend. 
For the backend, SentiTunes has its unique sentiment analysis algorithm to analyse emotions in a sentence. Flask was used on the server side and the spotipy api was used to customise playlists for users. 

## Challenges we ran into
The technology we were looking for to amalyse emotions in a sentence weren't easily available or suitable, therefore we had to make our own algorithm. Having very little experience with frontend as a team, it was diffcult navigating React and styling it using css but was very stimulating to learn on the job and see our results. It was also challenging when we first treid to link React with flask as it required slightly deeper understanding of how the systems interacted with each other.  As a newcomer team, we had to learn how to manage time during the hackacthon and stagger work throughout to collaborate effectively. 

## Accomplishments that we're proud of
We are very proud of tackling our challenges and building a funtioning web app that we coded from scratch in such a contricted time frame and the fact that we learnt React during the hackathon. We are also proud of the future that it shows and excited to be able to develop it further even after this hackathon. 

## What we learned
It has been a great experience and chance to learn how to work together as a team and how to divide work effectively so that everyone can enjoy their task whilst learning. We also learnt how to find the most appropriate resources to learn from for our project so that it has all the functionalities we want it to. 

## What's next for SentiTunes
We will personalise the playlists to the user's music taste so it feels more tailored to them. We will also use machine learning to train a better model to give a more comprehensive sentiment analysis. We think that a simple therapy chat bot will also improve user experience by a lot. 

## Built with
python, flask, spotipy, React, css

## Run 
```
npm install 
npm run build
cd server
python main.py
```

## This product makes use of the NRC Emotion Lexicon, created by Saif Mohammad and Peter Turney at the National Research Council Canada

- NRC Emotion Lexicon: association of words with eight emotions (anger, fear, anticipation, trust, surprise, sadness, joy, and disgust) and two         sentiments (negative and positive) manually annotated on Amazon's Mechanical Turk. Available in 105 different languages.
    Version: 0.92
    Number of terms: 14,182 unigrams (words), ~25,000 word senses 
    Association scores: binary (associated or not)
    Creators: Saif M. Mohammad and Peter D. Turne
 
    Papers: 

    Saif Mohammad and Peter Turney (2013). Crowdsourcing a Word-Emotion Association Lexicon. Computational Intelligence, 29 (3), 436-465, 2013.
    
    Saif Mohammad and Peter Turney (2010). Emotions Evoked by Common Words and Phrases: Using Mechanical Turk to Create an Emotion Lexicon, In Proceedings of the NAACL-HLT 2010 Workshop on Computational Approaches to Analysis and Generation of Emotion in Text, June 2010, LA, California.
    

