---
title: Create Readwise Q&A Mastery cards using Reader's AI Reading Companion - Ghostreader
date: 2024-03-18
categories:
 - Changelog
tags:
 - readwise
 - readwise reader
 - studying
---

I learned how to automatically create a QA flashcards in Readwise using Reader's _Ghostreader_ feature.

<!-- more -->

The only thing you need to do is open any document in Reader, open the _Ghostreader_ menu, paste this prompt into the "Custom" prompt text window and hit enter.

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

That's it 🎉!

Navigate to the document's "Book Review" section in Readwise and you should see a flashcard like this:

![readwise-mastery-flashcard](../images/readwise-mastery-flashcard.png)

## Step-by-step

1. Open _Ghostreader_ menu and select "Custom":![reader-ghostreader](../images/reader-ghostreader.png)
2. Paste prompt (see above) into the textbox and hit `command + Enter`: ![ghostreader-prompt](../images/ghostreader-prompt.png)
3. You should see the _Ghostreader_ icon pop-up, a note will be created with the AI's response.: ![reader-ghostreader-highlight-example](../images/reader-ghostreader-highlight-example.png)
4. Go to _Readwise_ and you should see new _Q&A Mastery_ card!: ![readwise-bookreview-page](../images/readwise-bookreview-page.png)

## The Secret Sauce

The key is the prompt the model to use Readwise's _Action Tags_.

![Reader_ Frequently Asked Questions](../images/Reader-FAQ-Action-Tags.png)

One of these tags is ".qa" which allows someone to create a Q&A Mastery Flashcard.

![Reader-FAQ-Action-Tags-QA](../images/Reader-FAQ-Action-Tags-QA.png)
