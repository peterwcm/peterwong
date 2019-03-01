## Peter Wong's Portfolio

The online portfolio for Peter Wong
[http://peterwong.me](http://peterwong.me)

## Project Requirements

* Node.js, download and install Node [here](https://nodejs.org/download/).
* Bower, install it by running ```sudo npm install -g bower```
* Grunt CLI, install it by running ```sudo npm install -g grunt-cli```
* Make sure Ruby and Sass are installed (OS X should already have Ruby installed).
Run ```sudo gem install sass``` to install sass on a Mac.

## Project Installation & Setup

1. Clone the repository
2. Run ```npm install``` under the project root
3. Run ```bower install``` under the project root
3. Run ```grunt build``` to build the JS, CSS and images
4. Run ```grunt``` to start the files watcher and start developing

Since we are just using a plain HTML file, you can just simply open it and see the changes made.

## Deploy it to Netlify

This app is optimised for Continuous Deployment in Netlify.
Please use the following build settings.

```markdown
Base directory: Not set
Build command: gem install sass && grunt build
Publish directory: build
```
