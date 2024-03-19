---
title: Create Readwise Q&A Mastery cards using Reader's AI Reading Companion - Ghostreader
date: 2024-03-18
categories:
 - Changelog
tags:
 - readwise
 - readwise reader
 - llm
---

I learned how to automatically create Q&A flashcards (aka *Q&A Mastery* cards) in Readwise using Reader's *Ghostreader* feature.

<!-- more -->

The only thing you need to do is open any document in Reader, open *Ghostreader*, highlight a word, sentence, or paragrpah, and run this prompt:

```text
Below is text from {{ document.title }}:

"""
{% if (selection | count_tokens) > 1000 %}
{{ selection | central_sentences | join("\n\n") }}
{% else %}
{{ selection }}
{% endif %}
"""

Write a question-and-answer pair based on the selected text. 
The output should always start with '.qa’ and the question should always end with a question mark ‘?’. 
The answer should be at the end and always end with a period ‘.’
```

Watch as it creates a new note that automatically generates a new flashcard in Readwise.

![readwise-mastery-flashcard](../images/readwise-mastery-flashcard.png)

That's it 🎉!

## Step-by-step

1. Open *Ghostreader* menu and select "Custom":![reader-ghostreader](../images/reader-ghostreader.png)
2. Paste prompt (see above) into the textbox and hit `command + Enter`: ![ghostreader-prompt](../images/ghostreader-prompt.png)
3. You should see the *Ghostreader* icon pop-up, a note will be created with the AI's response.: ![reader-ghostreader-highlight-example](../images/reader-ghostreader-highlight-example.png)
4. Go to *Readwise* and you should see new *Q&A Mastery* card!: ![readwise-bookreview-page](../images/readwise-bookreview-page.png)

## The Secret Sauce

The key is the prompt the model to use Readwise's *Action Tags*.

![Reader_ Frequently Asked Questions](../images/Reader-FAQ-Action-Tags.png)

To create a *Q&A Mastery* card you need to add a note starting with `'.qa'` and the questions needs to end in a question mark `'?'`. Readwise will identify this a new card and automatically create it on its next sync.

![Reader-FAQ-Action-Tags-QA](../images/Reader-FAQ-Action-Tags-QA.png)

## Conclusion

Readwise + Reader is a powerful reading workflow system making it easy to ["capture, review, and integrate"](https://blog.readwise.io/reading-workflow-part-1/) what you read. Now, with this quick trick, you can utilize *Ghostreader* to create *Mastery* cards in Readwise effortlessly.

Try it out yourself!

## Sources

* [How to Actually Use What You Read with Readwise: Part 1](https://blog.readwise.io/reading-workflow-part-1/)
* [The Next Chapter of Readwise: Our Own Reading App](https://blog.readwise.io/readwise-reading-app/)
* [Reader FAQ](https://blog.readwise.io/p/f8c0f71c-fe5f-4025-af57-f9f65c53fed7/)
* [Readwise Inline Tags](https://dylan-garrett.com/blog/readwise-inline-tags/#fn:5)
* [How to Tag Your Highlights While You Read](https://blog.readwise.io/tag-your-highlights-while-you-read/)
