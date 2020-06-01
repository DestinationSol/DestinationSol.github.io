[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/DestinationSol/DestinationSol.github.io) 

Building from Source
-----------
In order to build the site locally, you need to have ruby installed. After that you can `cd` into the project directory and run:

```
gem install jekyll bundler
```
which will install the Jekyll and Bundler gems (if this fails, try prepending a `sudo`),
```
bundle install
```
to install the site plugins, and finally
```
bundle exec jekyll serve
```
to build the site. You can access it at `localhost:4000` or by accessing the `_site` folder that is generated.
To stop the server gracefully, use <kbd>CTRL</kbd> + <kbd>C</kbd> and then confirm the next two prompts with `y`. Should you run into issues here on Mac or Linux, `ps aux |grep jekyll |awk '{print $2}' | xargs kill -9` should do the trick.

Unless you've tweaked the `_config.yml` all changes should automatically appear on the next page refresh without needing to restart the server.

Before Uploading Any Images
-----------
Please ensure that you optimise them for the web, using a service like [TinyPNG](https://tinypng.com/)

Adding New Blog Post
-----------

  1. Create a .md file in the `_posts` folder. The file must have a prefix containing the current date in `YYYY-MM-DD-` format followed by the post short/brief title. This file name is going to be used as the article directory.
  Ex: `2018-09-12-new-website` will be translated to http://destinationsol.org/2018/09/12/new-website.html
  2. The new post file must have the following format:
```yaml
---
layout: post
title: "Say Hello to Our New Website!" #This is your post tile
description: > #This is a brief description of your post that will show up in post previews.
  If you have visited our website before you might notice something different now. Yep, we have some more things!
  Our new website was built on a desire to improve upon the prior splashsite.
author: "NicholasBatesNZ" #This will show up as the post author
image: "gooey.png" #This is the image that you see in post previews
parallax: true #This determines whether or not the asteroid field will appear
---

# markdown content goes here
```
  3. If you created your post file correctly, the post will be visible on the front page of the site automatically. Make sure that all of your images, authors, and date and description appear correctly on the post. The post preview image should be placed in the `/img/posts` subfolder.



Adding New Slideshow Images
------------

To add a new image to the slideshow, simply place it within the `/img/slideshow` folder
