# Laravel Louisville Website

**A website for the monthly meetup group:**

[laravel-louisville.github.io/meetup](http://laravel-louisville.github.io/meetup/)

### Dependencies

**Ensure the following are installed globally, along with any dependencies:**

1. [Bower](http://bower.io/)
2. [Grunt](http://gruntjs.com/getting-started)
3. [Jekyll](http://jekyllrb.com/docs/installation/)

### Installing

1. Fork [laravel-louisville.github.io/meetup](http://laravel-louisville.github.io/meetup/)
2. ``` git clone https://github.com/laravel-louisville/meetup.git ```
3. ``` cd meetup ```
4. Install project dependencies: ``` bower install ```
5. Install Grunt dependencies: ``` npm install ```
6. Run ``` jekyll serve ``` to view site locally at [http://0.0.0.0:4000/](http://0.0.0.0:4000/)
7. Run ``` grunt ``` to compile CSS, JS, etc. after any changes*
8. ``` jekyll build ``` to build out _sites folder*

### To-do

*Gruntfile.js will eventually:

- watch changes	and compile/minify CSS and JS
- ``` jekyll build ``` automatically
