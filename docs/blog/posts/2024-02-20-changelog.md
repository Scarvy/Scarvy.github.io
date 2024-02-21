---
title: The Changelog - v0.10.0
date: 2024-02-20
categories:
 - Changelog
tags:
 - Python
 - open-source
 - SQLite
 - ChatGPT
---

## New Release

* [ticktick-to-sqlite](https://github.com/Scarvy/ticktick-to-sqlite) - Import TickTick data into a SQLite database
* [chatgpt-to-sqlite](https://github.com/Scarvy/chatgpt-to-sqlite) - Import ChatGPT conversations into a SQLite database
* [ghostreader-prompts](https://github.com/Scarvy/ghostreader-prompts) - A collection of user-created prompts for Readwise Reader's "Copilot of Reading" feature Ghostreader.

<!-- more -->

## rye & uv - "Cargo for Python"

The Python packaging ecosystem can be overwhelming due to its crowded nature. However, there appears to be a solution in the works with Astral's (the creator of Ruff) efforts to create a "Cargo for Python" packaging tool. I have experience with `pyenv`, `pyenv-virtualenv`, and `poetry`, but I am now considering transitioning to `rye` since Astral is taking over the project and plans to merge it with their own. It might be a good time to gradually switch to `rye` since it seems to be where the tooling is headed for Python.

**References:**

* [uv Python packaging in Rust - Simon Willison's Weblog](https://simonwillison.net/2024/Feb/15/uv-python-packaging-in-rust/#atom-everything)
* [Rye Grows with UV - Armin Ronacher](http://lucumr.pocoo.org/2024/2/15/rye-grows-with-uv)
* [uv Python packing in Rust - Astral](https://astral.sh/blog/uv)
* [Rye: A Vision Continued](https://lucumr.pocoo.org/2024/2/4/rye-a-vision/)

## Blogs

* [The diminishing half-life of knowledge](https://rednafi.com/misc/diminishing_half_life_of_knowledge/): As humans, we have limited space in our brains to store knowledge, like a bookshelf. We replace old knowledge with new, more relevant information, making it difficult to retrieve older knowledge when we need it. This is the half-life of knowledge. Although there is no solution to combat this, we can make it easier to regain knowledge we have forgotten through various methods. After reading Redowan's post, that is how I interpret the half-life of knowledge:

    > "Turns out this manifestation of stochastic knowledge decay is a well-studied phenomenon. The term half-life of knowledge1 was coined in 1962 by economist Fritz Machlup2 to represent the amount of time that has to elapse before half of the knowledge or facts in a particular area is superseded or shown to be untrue. It’s named after the half-life of decay in radioactive materials. This article3 on the IEEE Spectrum dives deep into the concept and reflects upon its effect on the industry. It postulates that the half-life of engineering knowledge is shrinking faster than ever before and the only way to tackle this is through continuous learning and getting better at managing the onslaught of information."  

    That's why I'm building my "second-brain" system. It helps me keep track of my learning and knowledge to quickly adapt to the changing world. My system includes note-taking apps like Logseq and Apple Notes, Read-it Later app called Reader, highlight review app called Readwise, flashcards app Anki, and structured data app Notion Tables. I'm also experimenting with a personal knowledge and data warehouse system with Datasette.

* [Build a GitHub Support Bot with GPT3, LangChain, and Python - Dagster](https://dagster.io/blog/chatgpt-langchain) - A tutorial explaining how to build a GitHub support bot. I want to do something similar with my personal knowledge data warehouse.
* [The Python Rust-aissance - BCV](https://baincapitalventures.com/insight/why-more-python-developers-are-using-rust-for-building-libraries/) - Another reason why I want to learn Rust. More Python libraries are using Rust on the backend.

## Other

* 🐦 [Detailed Neural Circuit Transformer Diagram - Twitter](https://x.com/jxmnop/status/1757244005639766157?s=46) - A detailed diagram of a neural circuit for transformers.
